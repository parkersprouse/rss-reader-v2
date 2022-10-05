require 'bcrypt'
require './lib/rss_reader/entities/user'

module Web
  module Controllers
    module Auth
      class ProcessSignIn
        include Web::Action

        handle_exception AuthFormInvalid => :handle_invalid_form

        before :must_not_be_authenticated

        params do
          required(:auth).schema do
            required(:email).filled(:str?, format?: /\w+@\w+\.\w+/)
            required(:password).filled(:str?)
          end
        end

        def call(params)
          raise AuthFormInvalid.new('Invalid e-mail or password') unless params.valid? && passwords_match?
          session[:user_id] = user.id
          redirect_to routes.root_path
        end

        private

        def email
          params.get(:auth, :email)
        end

        def password
          params.get(:auth, :password)
        end

        def passwords_match?
          BCrypt::Password.new(user.pw_hash) == password
        end

        def user
          @user ||= User.find_by(email: email)
        end

        def handle_invalid_form(exception)
          flash[:error] = exception.message || 'Invalid e-mail or password'
          redirect_to routes.sign_in_path
        end
      end
    end
  end
end
