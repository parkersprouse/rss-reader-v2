require 'bcrypt'

module Web
  module Controllers
    module Auth
      class ProcessResetPassword
        include Web::Action

        before :must_not_be_authenticated

        params do
          required(:auth).schema do
            required(:token).filled(:str?)
            required(:password).filled(:str?)
            required(:password_confirmation).filled(:str?)
          end
        end

        def call(params)
          unless params.valid? && user.present?
            flash[:error] = 'Provided token is invalid'
            redirect_to routes.reset_password_path
          end

          pw_hash = BCrypt::Password.create(new_password)
          user.update(pw_hash: pw_hash, pw_reset_token: nil, pw_reset_token_sent_at: nil)

          flash[:success] = 'Password successfully updated'
          redirect_to routes.sign_in_path
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
      end
    end
  end
end
