require './apps/web/mixins/check_authentication'

module Web
  module Controllers
    module Home
      class Index
        include Web::Action
        include CheckAuthentication

        def call(_)
          return redirect_to routes.feed_index_path if authenticated?
          redirect_to routes.sign_in_path
        end
      end
    end
  end
end
