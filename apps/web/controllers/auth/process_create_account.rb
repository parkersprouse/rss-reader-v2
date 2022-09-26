require 'bcrypt'
require 'securerandom'
require './apps/web/mixins/check_authentication'
require './lib/rss_reader/entities/user'
require './lib/rss_reader/mailers/activate_account'

module Web
  module Controllers
    module Auth
      class ProcessCreateAccount
        include Web::Action
        include CheckAuthentication

        before { redirect_to routes.root_path if authenticated? }
        before { halt 400, 'Form not filled out' unless params.valid? }

        params do
          required(:auth).schema do
            required(:email).filled(:str?, format?: /\w+@\w+\.\w+/)
          end
        end

        def call(params)
          # pw_hash = BCrypt::Password.create(password)
          user = User.create(email: email,
            pw_reset_token: SecureRandom.hex(50),
            pw_reset_token_sent_at: DateTime.now)

          Mailers::ActivateAccount.deliver(user: user, reset_route: routes.url(:reset_password))
          flash[:success] = 'Check your e-mail to finish account setup'
          redirect_to routes.create_account_path
        end

        def email
          params.get(:auth, :email)
        end
      end
    end
  end
end
