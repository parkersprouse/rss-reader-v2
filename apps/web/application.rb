require 'hanami/helpers'
require 'hanami/assets'
require 'rack/protection'
require './apps/web/mixins/action_scaffold'
require './apps/web/mixins/check_authentication'

module Web
  class Application < Hanami::Application
    configure do
      root __dir__

      load_paths << [
        'controllers',
        'views'
      ]

      routes 'config/routes'

      sessions :cookie,
        httponly: true,
        key: 'session',
        secret: ENV.fetch('WEB_SESSIONS_SECRET'),
        secure: false #Hanami.env?(:production)

      middleware.use Rack::Protection

      layout :application

      templates 'templates'

      assets do
        javascript_compressor :builtin

        stylesheet_compressor :builtin

        sources << [
          'assets/dist'
        ]
      end

      security.x_frame_options 'DENY'

      security.x_content_type_options 'nosniff'

      security.x_xss_protection '1; mode=block'

      security.content_security_policy %{
        form-action 'self';
        frame-ancestors 'self';
        base-uri 'self';
        default-src 'none';
        script-src 'self';
        connect-src 'self';
        img-src 'self' https: data:;
        style-src 'self' 'unsafe-inline' https:;
        font-src 'self' fonts.gstatic.com fonts.googleapis.com;
        object-src 'none';
        plugin-types application/pdf;
        child-src 'self';
        frame-src 'self';
        media-src 'self'
      }

      controller.prepare do
        include ActionScaffold
        include CheckAuthentication
      end

      view.prepare do
        include Hanami::Helpers
        include Web::Assets::Helpers
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
