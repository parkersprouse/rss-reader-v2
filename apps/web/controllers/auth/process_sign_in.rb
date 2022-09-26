require 'bcrypt'
require './apps/web/mixins/check_authentication'
require './lib/rss_reader/entities/user'

module Web
  module Controllers
    module Auth
      class ProcessSignIn
        include Web::Action
        include CheckAuthentication

        before { redirect_to routes.root_path if authenticated? }
        before { halt 400, 'Form not filled out' unless params.valid? }
        before { halt 401, 'Invalid e-mail or password' unless user.present? }

        params do
          required(:auth).schema do
            required(:email).filled(:str?, format?: /\w+@\w+\.\w+/)
            required(:password).filled(:str?)
          end
        end

        def call(params)
          halt 401, 'Invalid e-mail or password' unless password_correct?
          session[:id] = user.id
          redirect_to routes.root_path
        end

        def email
          params.get(:auth, :email)
        end

        def password
          params.get(:auth, :password)
        end

        def password_correct?
          return unless user.present?
          BCrypt::Password.new(user.pw_hash) == password
        end

        def user
          @user ||= User.find_by(email: email)
        end
      end
    end
  end
end
