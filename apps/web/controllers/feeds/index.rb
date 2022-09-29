module Web
  module Controllers
    module Feeds
      class Index
        include Web::Action

        before :must_be_authenticated

        expose :feeds

        def call(params)
          @feeds ||= current_user.feeds
        end
      end
    end
  end
end
