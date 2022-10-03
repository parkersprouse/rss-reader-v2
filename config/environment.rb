require 'bundler/setup'
require 'hanami/setup'
require 'hanami/middleware/body_parser'
require 'hanami/model'
require 'warden'
require_relative '../lib/rss_reader'
require_relative '../apps/web/application'

Hanami.configure do
  mount Web::Application, at: '/'

  middleware.use Hanami::Middleware::BodyParser, :json
  middleware.use Warden::Manager do |manager|
    manager.default_strategies :local
    manager.failure_app = ->(env) do
      Web::Controllers::Auth::SignIn.new(failure_msg: env['warden'].message).call(env)
      Web::Views::Auth::SignIn.render(env.merge(format: :html))
    end
  end

  model do
    adapter :sql, ENV.fetch('DATABASE_URL')

    migrations 'db/migrations'
    schema     'db/schema.sql'
  end

  mailer do
    root 'lib/rss_reader/mailers'

    delivery :test
  end

  environment :development do
    logger level: :debug

    mailer do
      delivery :smtp, address: ENV.fetch('SMTP_HOST'), port: ENV.fetch('SMTP_PORT'),
        user_name: 'SMTP_Injection', password: ENV.fetch('SPARKPOST_SECRET'),
        authentication: :login
    end
  end

  environment :production do
    logger level: :info, formatter: :json, filter: []

    mailer do
      delivery :smtp, address: ENV.fetch('SMTP_HOST'), port: ENV.fetch('SMTP_PORT'),
        user_name: 'SMTP_Injection', password: ENV.fetch('SPARKPOST_SECRET'),
        authentication: :login
    end
  end
end
