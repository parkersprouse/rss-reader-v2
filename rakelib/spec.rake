require 'dotenv/load' unless ENV['HANAMI_ENV'] == 'production'

desc 'Runs the specs'
task :spec do
  system("HANAMI_ENV=test bundle exec rspec #{ARGV[1..].join(' ')}")
end
