require 'bcrypt'

module Web
  module Controllers
    module Settings
      class Update
        include Web::Action

        handle_exception ProfileFormError => :handle_error

        before :must_be_authenticated

        before do
          context = params.get(:profile, :context)
          raise ProfileFormError unless %w(profile password).include?(context)

          if BCrypt::Password.new(current_user.pw_hash) != current_password
            raise ProfileFormError, 'Current password incorrect'
          end

          if context == 'password' && (new_password.blank? || new_password != new_password_confirmation)
            raise ProfileFormError, 'New password not filled out correctly'
          end

          if context == 'profile' && !email.match?(/\w+@\w+\.\w+/)
            raise ProfileFormError, 'Provided e-mail is invalid'
          end
        end

        # Not actually checking param validity through the .valid? method
        # Mostly just keeping this here for reference
        params do
          required(:profile).schema do
            required(:context) { filled? & str? & included_in?(%w(profile password))}
            required(:current_password).filled(:str?)
            optional(:email) { str? & format?(/\w+@\w+\.\w+/) }
            optional(:new_password) { str? }
            optional(:new_password_confirmation) { str? }
          end
        end

        def call(params)
          payload = {}
          payload[:email] = email if email.present?
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
          flash[:error_toast] = exception.message || 'There was a problem updating your profile'
          redirect_to routes.settings_show_path
        end
      end
    end
  end
end
