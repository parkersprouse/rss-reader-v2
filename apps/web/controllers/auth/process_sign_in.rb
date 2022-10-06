require 'bcrypt'
require './lib/rss_reader/entities/user'

module Web
  module Controllers
    module Auth
      class ProcessSignIn
        include Web::Action

        handle_exception AuthFormError => :handle_error

        before :must_not_be_authenticated
        before do
          raise AuthFormError, 'Invalid e-mail or password' unless params.valid? && user.present? && passwords_match?
        end

        params do
          required(:auth).schema do
            required(:email).filled(:str?, format?: /\w+@\w+\.\w+/)
            required(:password).filled(:str?)
          end
        end

        def call(params)
          session[:user_id] = user.id
          redirect_to routes.root_path
        rescue Hanami::Model::Error
          raise AuthFormError, 'There was a problem signing you in'
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

        def handle_error(exception)
          flash[:error] = exception.message || 'There was a problem signing you in'
          redirect_to routes.sign_in_path
        end
      end
    end
  end
end
