require './apps/web/mixins/check_authentication'

module Web
  module Controllers
    module Feeds
      class Index
        include Web::Action
        include CheckAuthentication

        before :must_be_authenticated

        def call(params)
        end
      end
    end
  end
end
