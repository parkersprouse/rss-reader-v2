module Web
  module Controllers
    module Home
      class Index
        include Web::Action

        def call(_)
          dest = authenticated? ? routes.feed_index_path : routes.sign_in_path
          redirect_to dest
        end
      end
    end
  end
end
