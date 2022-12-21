require './lib/rss_reader/entities/feed'

module Web
  module Controllers
    module Feed
      class Show
        include Web::Action

        handle_exception FeedError => :handle_error

        before :must_be_authenticated
        before { raise FeedError, 'Feed ID is required' unless params.valid? }

        expose :feed

        params do
          required(:id) { filled? & str? }
        end

        def call(_)
          @feed = current_user.feeds.where(id: id).first
          raise FeedError, "No feed found with ID #{id}" if @feed.nil?
        end

        private

        def id
          params.get(:id)
        end

        def handle_error(exception)
          flash[:error_toast] = exception.message || 'There was a problem loading the feed'
          # redirect_to routes.feed_index_path
          self.status = 400
        end
      end
    end
  end
end
