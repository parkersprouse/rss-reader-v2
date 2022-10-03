require 'bcrypt'
require './lib/rss_reader/entities/user'

module Web
  module Controllers
    module Auth
      class ProcessSignIn
        include Web::Action

        before :must_not_be_authenticated
        before { halt 400, 'Form not filled out' unless params.valid? }

        params do
          required(:auth).schema do
            required(:email).filled(:str?, format?: /\w+@\w+\.\w+/)
            required(:password).filled(:str?)
          end
        end

        def call(params)
          params.env['warden'].authenticate!
          redirect_to routes.root_path
        end
      end
    end
  end
end
