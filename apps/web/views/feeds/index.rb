require 'rss'
require 'faraday'

module Web
  module Views
    module Feeds
      class Index
        include Web::View

        def parsed_feeds
          feeds.map do |feed|
            output = {}.merge(feed)

            res = Faraday.get(feed[:source])
            input = RSS::Parser.parse(res.body)
            output[:title] = input.channel.title
            output[:entries] = input.items.dup

            output
          end
        end
      end
    end
  end
end
