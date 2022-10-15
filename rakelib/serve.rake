production = ENV['HANAMI_ENV'] == 'production'

require 'dotenv/load' unless production

desc 'Start the application'
task :serve do
  if production
    system('pnpm run build') || system('npm run build')
    system('bundle exec hanami assets precompile')
    system('bundle exec hanami server')
  else
    system('pnpm dlx concurrently "pnpm run watch" "bundle exec hanami server"') ||
      system('npx concurrently "npm run watch" "bundle exec hanami server"')
  end
end
