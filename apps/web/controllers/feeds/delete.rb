require './apps/web/mixins/csrf_overrides'

module Web
  module Controllers
    module Feeds
      class Delete
        include Web::Action
        include CSRFOverrides

        handle_exception FeedFormError => :handle_error

        before :must_be_authenticated
        before { raise FeedFormError, 'Feed not found' if feed.blank? }

        def call(params)
          feed.delete
          flash[:success_toast] = 'Feed successfully deleted'
          redirect_to routes.feed_index_path
        rescue Hanami::Model::Error
          raise FeedFormError, 'There was a problem deleting the feed'
        end

        private

        def feed
          @feed ||= Feed.find_by(id: params.get(:id))
        end

        def handle_error(exception)
          flash[:error_toast] = exception.message || 'There was a problem deleting the feed'
          redirect_to routes.feed_index_path
        end
      end
    end
  end
end
