module Web
  module Controllers
    module Feeds
      class Index
        include Web::Action

        before :must_be_authenticated

        expose :feeds

        def call(_)
          @feeds ||= current_user.feeds.select(:id, :sort_order).order(:sort_order)
        end
      end
    end
  end
end
