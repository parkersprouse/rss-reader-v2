require 'faraday'
require 'rss'

module Web
  module Views
    module Feeds
      class Show
        include Web::View
        layout false # no layout because we only wanted the card element returned

        def parsed_feed
          output = {}.merge(feed)

          begin
            res = Faraday.get(output[:source])
            input = RSS::Parser.parse(res.body)
            output[:title] = output[:title] || input.channel.title
            output[:entries] = input.items
          rescue
            output[:title] = 'Failed to parse feed'
            output[:error] = "Feed at source \"#{output[:source]}\" failed to load"
          end

          output
        end
      end
    end
  end
end
