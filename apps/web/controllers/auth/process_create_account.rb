require 'bcrypt'
require 'securerandom'
require './lib/rss_reader/entities/user'
require './lib/rss_reader/mailers/activate_account'

module Web
  module Controllers
    module Auth
      class ProcessCreateAccount
        include Web::Action

        before :must_not_be_authenticated

        params do
          required(:auth).schema do
            required(:email).filled(:str?, format?: /\w+@\w+\.\w+/)
          end
        end

        def call(params)
          if params.valid?
            create_account
          else
            flash[:error] = 'Please make sure the form is filled out'
          end

          redirect_to routes.create_account_path
        end

        private

        def create_account
          user = User.create(email: email,
            pw_reset_token: SecureRandom.hex(50),
            pw_reset_token_sent_at: DateTime.now)

          Mailers::ActivateAccount.deliver(user: user, reset_route: routes.url(:reset_password))
          flash[:success] = 'Check your e-mail to finish account setup'
        end

        def email
          params.get(:auth, :email)
        end
      end
    end
  end
end
