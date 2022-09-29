module Web
  module Controllers
    module Feeds
      class Update
        include Web::Action

        before :must_be_authenticated
        before { halt 400, 'Form not correctly filled out' unless params.valid? }

        params do
          required(:id).filled(:str?)
          required(:feeds).schema do
            required(:feed_url).filled(:str?)
          end
        end

        def call(params)
          feed = Feed.find_by(id: params.get(:id))
          if feed.present?
            feed.update(source: params.get(:feeds, :feed_url))
            flash[:success] = 'Feed successfully updated'
          else
            flash[:error] = 'Feed not found'
          end
          redirect_to routes.feed_index_path
        end
      end
    end
  end
end
