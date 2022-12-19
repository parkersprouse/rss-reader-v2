require 'bcrypt'

module Web
  module Controllers
    module Settings
      class Update
        include Web::Action

        handle_exception ProfileFormError => :handle_error

        before :must_be_authenticated

        before do
          raise ProfileFormError, 'Make sure the form is filled out' unless params.valid?

          if BCrypt::Password.new(current_user.pw_hash) != current_password
            raise ProfileFormError, 'Current password incorrect'
          end

          if new_password.present? && new_password != new_password_confirmation
            raise ProfileFormError, 'New password confirmation incorrect'
          end
        end

        params do
          required(:profile).schema do
            required(:email).filled(:str?, format?: /\w+@\w+\.\w+/)
            required(:current_password).filled(:str?)
            optional(:new_password) { str? }
            optional(:new_password_confirmation) { str? }
          end
        end

        def call(params)
          payload = { email: email }
          payload[:pw_hash] = BCrypt::Password.create(new_password) if new_password.present?
          current_user.update(payload)

          flash[:success_toast] = 'Profile successfully updated'
          redirect_to routes.settings_show_path
        rescue Hanami::Model::Error
          raise ProfileFormError, 'There was a problem updating your profile'
        end

        private

        def email
          params.get(:profile, :email)
        end

        def current_password
          params.get(:profile, :current_password)
        end

        def new_password
          params.get(:profile, :new_password)
        end

        def new_password_confirmation
          params.get(:profile, :new_password_confirmation)
        end

        def handle_error(exception)
          flash[:error_alert] = exception.message || 'There was a problem updating your profile'
          redirect_to routes.settings_show_path
        end
      end
    end
  end
end
