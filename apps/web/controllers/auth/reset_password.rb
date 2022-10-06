module Web
  module Controllers
    module Auth
      class ResetPassword
        include Web::Action

        before :must_not_be_authenticated

        expose :new_account
        expose :user

        params do
          required(:token).filled(:str?)
        end

        def call(params)
          flash[:error] = 'Provided token is invalid' unless params.valid? && user.present?
        end

        def new_account
          token.present? && !user&.active?
        end

        private

        def token
          params.get(:token)
        end

        def user
          return if token.blank?
          @user ||= User.find_by(pw_reset_token: token)
        end
      end
    end
  end
end
