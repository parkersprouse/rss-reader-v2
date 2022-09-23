require 'dotenv/load' unless ENV['HANAMI_ENV'] == 'production'

desc 'Runs all linters'
task :lint do
  system("bundle exec rake lint:style #{ARGV[1..].join(' ')}")
  puts "\n"
  system("bundle exec rake lint:smell #{ARGV[1..].join(' ')}")
end

namespace :lint do
  desc 'Runs just the style linter'
  task :style do
    puts "\n"
    system("echo '#{NOTICE_COLOR}-----------------------------------------------#{NO_COLOR}'")
    system("echo '#{NOTICE_COLOR}LINTING STYLES WITH RUBOCOP#{NO_COLOR}'")
    system("echo '#{NOTICE_COLOR}-----------------------------------------------#{NO_COLOR}'")
    puts "\n"
    system("rubocop --require rubocop-airbnb #{ARGV[1..].join(' ')}")
  end

  desc 'Runs just the code smell linter'
  task :smell do
    puts "\n"
    system("echo '#{NOTICE_COLOR}-----------------------------------------------#{NO_COLOR}'")
    system("echo '#{NOTICE_COLOR}LINTING SMELLS WITH REEK#{NO_COLOR}'")
    system("echo '#{NOTICE_COLOR}-----------------------------------------------#{NO_COLOR}'")
    puts "\n"
    system("reek #{ARGV[1..].join(' ')}")
  end
end
