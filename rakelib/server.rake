production = ENV['HANAMI_ENV'] == 'production'

require 'dotenv/load' unless production

task :server do
  system('bundle exec rake server:build')
  system('bundle exec rake server:start')
end

namespace :server do
  task :build do
    if production
      system('pnpm run build')
      system('bundle exec hanami assets precompile')
    end
  end

  task :start do
    if production
      system('rackup config.ru -p $PORT')
    else
      system('pnpm run watch')
    end
  end
end
