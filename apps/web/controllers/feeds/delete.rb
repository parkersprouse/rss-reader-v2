module Web
  module Controllers
    module Feeds
      class Delete
        include Web::Action

        handle_exception FeedFormError => :handle_error

        before :must_be_authenticated
        before { raise FeedFormError, 'Feed not found' if feed.blank? }

        def call(params)
          feed.delete
          flash[:success] = 'Feed successfully deleted'
          redirect_to routes.feed_index_path, status: 200
        rescue Hanami::Model::Error
          raise FeedFormError, 'There was a problem deleting the feed'
        end

        private

        def feed
          @feed ||= Feed.find_by(id: params.get(:id))
        end

        def handle_error(exception)
          flash[:error] = exception.message || 'There was a problem deleting the feed'
          redirect_to routes.feed_index_path, status: 200
        end
      end
    end
  end
end
