require 'dotenv/load' unless ENV['HANAMI_ENV'] == 'production'

desc 'Runs the Hanami console'
task :console do
  system('bundle exec hanami console')
end
