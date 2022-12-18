# frozen_string_literal: true
require './apps/web/mixins/csrf_overrides'

module Web
  module Controllers
    module Feeds
      class UpdateSortOrder
        include Web::Action
        include CSRFOverrides

        accept :json

        before :must_be_authenticated
        before { halt 400 unless params.valid? }

        params do
          required(:body) { filled? & array? }
        end

        def call(params)
          params.get(:body).each do |feed|
            Feed.find(feed[:id]).update(sort_order: feed[:index])
          end

          self.status = 201
        end
      end
    end
  end
end
