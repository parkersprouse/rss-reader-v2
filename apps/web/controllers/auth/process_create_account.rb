require 'bcrypt'
require 'securerandom'
require './lib/rss_reader/entities/user'
require './lib/rss_reader/mailers/activate_account'

module Web
  module Controllers
    module Auth
      class ProcessCreateAccount
        include Web::Action

        handle_exception AuthFormError => :handle_error

        before :must_not_be_authenticated
        before { raise AuthFormError, 'Please make sure the form is filled out' unless params.valid? }
        before { raise AuthFormError, 'E-mail address is not available' if existing_user? }

        params do
          required(:auth).schema do
            required(:email).filled(:str?, format?: /\w+@\w+\.\w+/)
          end
        end

        def call(params)
          create_account
          redirect_to routes.sign_in_path
        rescue Hanami::Model::Error, Hanami::Mailer::Error
          raise AuthFormError, 'There was a problem creating your account'
        end

        private

        def create_account
          User.transaction do
            user = User.create(email: email,
              pw_reset_token: SecureRandom.hex(50),
              pw_reset_token_sent_at: DateTime.now)
            Mailers::ActivateAccount.deliver(
              user: user, params: params, reset_route: routes.path(:reset_password))
          end
          flash[:success_alert] = 'Check your e-mail to finish account setup'
        end

        def email
          params.get(:auth, :email)
        end

        def existing_user?
          @existing_user ||= User.find_by(email: email).present?
        end

        def handle_error(exception)
          flash[:error_alert] = exception.message || 'There was a problem creating your account'
          redirect_to routes.create_account_path
        end
      end
    end
  end
end
