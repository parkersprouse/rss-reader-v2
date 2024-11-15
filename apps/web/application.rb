# frozen_string_literal: true
require 'hanami/action/cache'
require 'hanami/assets'
require 'hanami/helpers'
require 'rack/protection'
require './apps/web/mixins/action_scaffold'
require './apps/web/mixins/check_authentication'
require './apps/web/mixins/icon_library'
require './apps/web/mixins/turbo_redirect'

module Web
  class Application < Hanami::Application
    configure do
      root __dir__

      load_paths << [
        'controllers',
        'helpers',
        'mixins',
        'views'
      ]

      routes 'config/routes'

      cookies httponly: true,
        secure: Hanami.env?(:production)

      sessions :cookie,
        httponly: true,
        key: 'session',
        secret: ENV.fetch('WEB_SESSIONS_SECRET'),
        secure: Hanami.env?(:production)

      middleware.use Rack::Protection

      default_request_format :html

      default_response_format :html

      layout :application

      templates 'templates'

      assets do
        sources << [
          'assets/dist'
        ]
      end

      security.x_frame_options 'DENY'

      security.x_content_type_options 'nosniff'

      security.x_xss_protection '1; mode=block'

      security.content_security_policy %{
        base-uri 'self';
        child-src 'self';
        connect-src 'self';
        default-src 'none';
        font-src 'self' fonts.bunny.net;
        form-action 'self';
        frame-ancestors 'self';
        frame-src 'self';
        img-src 'self' https: data:;
        media-src 'self';
        object-src 'none';
        script-src 'self' 'unsafe-inline' 'unsafe-eval';
        style-src 'self' 'unsafe-inline' fonts.bunny.net
      }

      controller.prepare do
        include CheckAuthentication
        include ActionScaffold
        include TurboRedirectHelper

        # Add cache control for each of the responses served by our action controllers.
        # Specifically, ensure that the browser gets a fresh copy of the response each
        #   time a request is made to ensure we aren't serving outdated responses.
        # NOTE: Does not apply to assets served from the `/assets` directory.
        include Hanami::Action::Cache
        cache_control :private, max_age: 0, must_revalidate: true
      end

      view.prepare do
        include Hanami::Helpers
        include Web::Assets::Helpers
        include Web::Helpers::PathHelper
        include IconLibrary
      end
    end

    configure :development do
      assets do
        fingerprint true
        subresource_integrity :sha256
      end
    end

    configure :production do
      assets do
        compile false
        fingerprint true
        subresource_integrity :sha256
      end
    end
  end
end
