require 'bcrypt'

module Web
  module Controllers
    module Settings
      class Update
        include Web::Action

        handle_exception ProfileFormError => :handle_error

        before :must_be_authenticated
        before do
          raise ProfileFormError unless %w(profile password preferences).include?(context)

          if context != 'preferences' && BCrypt::Password.new(current_user.pw_hash) != current_password
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
          optional(:profile).schema do
            required(:context) { filled? & str? & included_in?(%w(profile password)) }
            required(:current_password).filled(:str?)
            optional(:email) { str? & format?(/\w+@\w+\.\w+/) }
            optional(:new_password) { str? }
            optional(:new_password_confirmation) { str? }
          end

          optional(:preferences).schema do
            required(:context) { filled? & str? & included_in?(%w(preferences)) }
            required(:refresh_interval) { filled? }
            required(:theme) { filled? & str? & included_in?(%w(light dark)) }
          end
        end

        def call(params)
          if context == 'preferences'
            if current_user.settings.present?
              current_user.settings.update_settings(payload: preferences)
            else
              values = Json.build(UserSettings::DEFAULTS.merge(preferences))
              UserSettings.create(user_id: current_user.id, value: values)
            end
            flash[:success_toast] = 'Preferences successfully updated'
          else
            payload = {}
            payload[:email] = email if email.present?
            payload[:pw_hash] = BCrypt::Password.create(new_password) if new_password.present?
            current_user.update(payload)
            flash[:success_toast] = 'Profile successfully updated'
          end

          redirect_to destination
        rescue Hanami::Model::Error
          raise ProfileFormError, 'There was a problem updating your profile'
        end

        private

        def destination
          return routes.feed_index_path if context == 'preferences'
          routes.settings_show_path
        end

        def context
          params.get(:profile, :context) || params.get(:preferences, :context)
        end

        def preferences
          params.get(:preferences)&.reject { |k, _| k.to_s == 'context' }
        end

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
          redirect_to destination
        end
      end
    end
  end
end
