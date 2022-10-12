require 'rss'
require 'faraday'

module Web
  module Views
    module Feeds
      class Index
        include Web::View

        def parsed_feeds
          @parsed_feeds ||= feeds.map do |feed|
            output = {}.merge(feed)

            begin
              res = Faraday.get(feed[:source])
              input = RSS::Parser.parse(res.body)
              output[:title] = input.channel.title
              output[:entries] = input.items.dup
            rescue
              output[:title] = 'Failed to parse feed'
              output[:error] = "Feed at source \"#{feed[:source]}\" failed to load"
            end

            output
          end
          .sort_by { |feed| feed[:created_at] }
          .sort { |a, b| (a[:error].present? ? 1 : -1) <=> (b[:error].present? ? 1 : -1) }
        end
      end
    end
  end
end
