require './apps/web/mixins/disable_csrf'

module Web
  module Controllers
    module Auth
      class SignOut
        include Web::Action
        include DisableCSRF

        def call(params)
          cookies[:session] = nil
          session[:user_id] = nil
          redirect_to routes.sign_in_path
        end
      end
    end
  end
end
