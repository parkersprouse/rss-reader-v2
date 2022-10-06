module Web
  module Controllers
    module Feeds
      class Create
        include Web::Action

        handle_exception FeedFormError => :handle_error

        before :must_be_authenticated
        before { raise FeedFormError, 'Please make sure the form is filled out' unless params.valid? }

        params do
          required(:feeds).schema do
            required(:feed_url).filled(:str?)
          end
        end

        def call(params)
          Feed.create(user_id: current_user.id, source: params.get(:feeds, :feed_url))
          flash[:success] = 'Feed successfully created'
          redirect_to routes.feed_index_path
        rescue Hanami::Model::Error
          raise FeedFormError, 'There was a problem adding the feed'
        end

        private

        def handle_error(exception)
          flash[:error] = exception.message || 'There was a problem adding the feed'
          redirect_to routes.feed_index_path
        end
      end
    end
  end
end
