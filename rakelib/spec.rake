desc 'Runs the Hanami console'
task :spec do
  system("HANAMI_ENV=test bundle exec rspec #{ARGV[1..].join(' ')}")
end
