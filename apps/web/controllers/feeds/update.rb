module Web
  module Controllers
    module Feeds
      class Update
        include Web::Action

        handle_exception FeedFormError => :handle_error

        before :must_be_authenticated
        before { raise FeedFormError, 'Please make sure the form is filled out' unless params.valid? }
        before { raise FeedFormError, 'Feed not found' if feed.blank? }

        params do
          required(:id).filled(:str?)
          required(:feeds).schema do
            required(:feed_url).filled(:str?)
          end
        end

        def call(params)
          feed.update(source: params.get(:feeds, :feed_url))
          flash[:success] = 'Feed successfully updated'
          redirect_to routes.feed_index_path
        rescue Hanami::Model::Error
          raise FeedFormError, 'There was a problem updating the feed'
        end

        def feed
          @feed ||= Feed.find_by(id: params.get(:id))
        end

        private

        def handle_error(exception)
          flash[:error] = exception.message || 'There was a problem updating the feed'
          redirect_to routes.feed_index_path
        end
      end
    end
  end
end
