production = ENV['HANAMI_ENV'] == 'production'

require 'dotenv/load' unless production

task :server do
  system('bundle exec rake server:build')
  system('bundle exec rake server:start')
end

namespace :server do
  task :build do
    if production
      system('pnpm run build') || system('npm run build')
      system('bundle exec hanami assets precompile')
    end
  end

  task :start do
    if production
      system('rackup config.ru -p $PORT')
    else
      system('pnpm dlx concurrently "pnpm run watch" "bundle exec hanami server"') ||
        system('npx concurrently "npm run watch" "bundle exec hanami server"')
    end
  end
end
