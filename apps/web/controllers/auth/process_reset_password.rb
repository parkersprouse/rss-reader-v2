require 'bcrypt'

module Web
  module Controllers
    module Auth
      class ProcessResetPassword
        include Web::Action

        handle_exception AuthFormError => :handle_error

        before :must_not_be_authenticated
        before { raise AuthFormError, 'Please make sure the form is filled out' unless params.valid? }
        before { raise AuthFormError, 'Provided token is invalid' if user.blank? }

        params do
          required(:auth).schema do
            required(:token).filled(:str?)
            required(:password).filled(:str?)
            required(:password_confirmation).filled(:str?)
          end
        end

        def call(params)
          pw_hash = BCrypt::Password.create(new_password)
          user.update(pw_hash: pw_hash, pw_reset_token: nil, pw_reset_token_sent_at: nil)
          flash[:success] = 'Password successfully updated'
          redirect_to routes.sign_in_path
        rescue Hanami::Model::Error
          raise AuthFormError, 'There was a problem updating your password'
        end

        private

        def new_password
          params.get(:auth, :password)
        end

        def token
          params.get(:auth, :token)
        end

        def user
          @user ||= User.find_by(pw_reset_token: token)
        end

        def handle_error(exception)
          flash[:error] = exception.message || 'There was a problem updating your password'
          redirect_to "#{routes.reset_password_path}#{token.present? ? '?token=' + token : ''}"
        end
      end
    end
  end
end
