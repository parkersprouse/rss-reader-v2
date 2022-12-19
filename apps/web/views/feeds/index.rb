require 'faraday'
require 'rss'

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
              output[:title] = feed[:title] || input.channel.title
              output[:entries] = input.items.dup
            rescue
              output[:title] = 'Failed to parse feed'
              output[:error] = "Feed at source \"#{feed[:source]}\" failed to load"
            end

            output
          end
          # sort entries by their provided sort order
          .sort_by { |feed| (feed[:sort_order] || 1) }
          # put entries with no sort order at the end of the list
          .sort { |a, b| (a[:sort_order].nil? ? 1 : -1) <=> (b[:sort_order].nil? ? 1 : -1) }
          # then put errors at the end of the list
          .sort { |a, b| (a[:error].present? ? 1 : -1) <=> (b[:error].present? ? 1 : -1) }
        end
      end
    end
  end
end
