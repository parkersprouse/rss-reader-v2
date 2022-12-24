module Web
  module Views
    module Feeds
      class Show
        include Web::View
        layout false # no layout because we only want the card element returned
      end
    end
  end
end
