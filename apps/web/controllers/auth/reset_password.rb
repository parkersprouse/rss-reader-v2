module Web
  module Controllers
    module Auth
      class ResetPassword
        include Web::Action

        before :must_not_be_authenticated

        expose :providing_new_password
        expose :requesting_reset_email
        expose :new_account
        expose :token_invalid

        params do
          optional(:token).filled(:str?)
        end

        def call(params)
          flash[:error] = 'Provided token is invalid' if token_invalid
        end

        def new_account
          token.present? && !user&.active?
        end

        def providing_new_password
          user.present?
        end

        def requesting_reset_email
          token.blank?
        end

        def token_invalid
          token.present? && user.blank?
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
