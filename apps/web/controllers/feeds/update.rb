module Web
  module Controllers
    module Feeds
      class Update
        include Web::Action

        handle_exception FeedFormError => :handle_error

        before :must_be_authenticated
        before { raise FeedFormError, 'A feed URL is required' unless params.valid? }
        before { raise FeedFormError, 'Feed not found' if feed.blank? }

        params do
          required(:id).filled(:str?)
          required(:feeds).schema do
            required(:feed_url).filled(:str?)
            optional(:title).filled(:str?)
          end
        end

        def call(params)
          feed.update(source: params.get(:feeds, :feed_url), title: params.get(:feeds, :title))
          flash[:success_toast] = 'Feed successfully updated'
          redirect_to routes.feed_index_path
        rescue Hanami::Model::Error
          raise FeedFormError, 'There was a problem updating the feed'
        end

        def feed
          @feed ||= Feed.find_by(id: params.get(:id))
        end

        private

        def handle_error(exception)
          flash[:error_toast] = exception.message || 'There was a problem updating the feed'
          redirect_to routes.feed_index_path
        end
      end
    end
  end
end
