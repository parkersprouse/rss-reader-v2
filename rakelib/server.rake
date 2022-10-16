production = ENV['HANAMI_ENV'] == 'production'

require 'dotenv/load' unless production

namespace :server do
  task :build do
    return unless production
    system('pnpm run build') || system('npm run build')
    system('bundle exec hanami assets precompile')
  end

  task :start do
    if production
      system('bundle exec hanami server --port $PORT')
    else
      system('pnpm dlx concurrently "pnpm run watch" "bundle exec hanami server"') ||
        system('npx concurrently "npm run watch" "bundle exec hanami server"')
    end
  end
end