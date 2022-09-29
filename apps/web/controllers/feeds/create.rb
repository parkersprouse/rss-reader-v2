module Web
  module Controllers
    module Feeds
      class Create
        include Web::Action

        before :must_be_authenticated
        before { halt 400, 'Form not correctly filled out' unless params.valid? }

        params do
          required(:feeds).schema do
            required(:feed_url).filled(:str?)
          end
        end

        def call(params)
          Feed.create(user_id: current_user.id, source: params.get(:feeds, :feed_url))
          flash[:success] = 'Feed successfully created'
          redirect_to routes.feed_index_path
        end
      end
    end
  end
end
