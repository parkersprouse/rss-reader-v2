require 'faraday'
require 'faraday/follow_redirects'
require 'feedjira'
require './lib/rss_reader/entities/feed'

module Web
  module Controllers
    module Feeds
      class Show
        include Web::Action

        handle_exception FeedError => :handle_error

        before :must_be_authenticated
        before { raise FeedError, 'Feed ID is required' unless params.valid? }

        expose :parsed_feed

        params do
          required(:id) { filled? & str? }
        end

        def call(_)
          feed = Feed.find_by(id: id, user_id: current_user.id)
          raise FeedError, "No feed found with ID #{id}" if feed.nil?
          @parsed_feed = parse_feed(feed)
        end

        private

        def id
          params.get(:id)
        end

        def parse_feed(feed)
          output = {}.merge(feed)

          begin
            conn = Faraday.new do |f|
              f.response :follow_redirects
            end
            res = conn.get(output[:source])

            input = Feedjira.parse(res.body)
            output[:title] = output[:title] || input.title
            output[:entries] = input.entries
          rescue => e
            output[:title] = 'Failed to parse feed'
            output[:error] = "Feed at source \"#{output[:source]}\" failed to load"
          end

          output
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
