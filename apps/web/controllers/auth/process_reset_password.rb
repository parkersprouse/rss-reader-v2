require 'bcrypt'
require 'securerandom'
require './lib/rss_reader/entities/user'
require './lib/rss_reader/mailers/reset_password'

module Web
  module Controllers
    module Auth
      class ProcessResetPassword
        include Web::Action

        handle_exception AuthFormError => :handle_error

        before :must_not_be_authenticated

        params do
          required(:auth).schema do
            optional(:email).filled(:str?, format?: /\w+@\w+\.\w+/)
            optional(:token).filled(:str?)
            optional(:password).filled(:str?)
            optional(:password_confirmation).filled(:str?)
          end
        end

        def call(params)
          if token.blank? && email.present?
            raise AuthFormError, 'Please enter a valid e-mail' unless params.valid?
            request_reset_email
          elsif user.present? && token.present? && new_password.present? && params.valid?
            raise AuthFormError, 'Passwords must match' unless new_password == new_password_confirm
            set_new_password
          elsif token.present? && user.blank?
            raise AuthFormError, 'Provided token is invalid'
          else
            raise AuthFormError, 'Please make sure the form is filled out'
          end
        rescue Hanami::Model::Error
          raise AuthFormError, 'There was a problem updating your password'
        end

        private

        def email
          params.get(:auth, :email)
        end

        def new_password
          params.get(:auth, :password)
        end

        def new_password_confirm
          params.get(:auth, :password_confirmation)
        end

        def request_reset_email
          if user.present?
            User.transaction do
              token = SecureRandom.hex(50)
              user.update(pw_reset_token: token, pw_reset_token_sent_at: DateTime.now)
              Mailers::ResetPassword.deliver(user: user, token: token, reset_route: routes.url(:reset_password))
            end
          end
          flash[:success] = 'If there is an account associated with the provided e-mail address, '\
                            'it should receive an e-mail shortly with instructions to continue'
          redirect_to routes.reset_password_path
        end

        def set_new_password
          pw_hash = BCrypt::Password.create(new_password)
          user.update(pw_hash: pw_hash, pw_reset_token: nil, pw_reset_token_sent_at: nil)
          flash[:success] = 'Password successfully updated'
          redirect_to routes.sign_in_path
        end

        def token
          params.get(:auth, :token)
        end

        def user
          return @user if @user.present?
          return @user ||= User.find_by(email: email) if email.present?
          @user ||= User.find_by(pw_reset_token: token) if token.present?
        end

        def handle_error(exception)
          flash[:error] = exception.message || 'There was a problem updating your password'
          redirect_to "#{routes.reset_password_path}#{token.present? ? '?token=' + token : ''}"
        end
      end
    end
  end
end
