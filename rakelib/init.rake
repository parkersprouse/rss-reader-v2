require 'dotenv/load' unless ENV['HANAMI_ENV'] == 'production'

desc 'Prepares the dev and test app environments'
task :init do
  puts "\n"
  system("echo '#{NOTICE_COLOR}-----------------------------------------------#{NO_COLOR}'")
  system("echo '#{NOTICE_COLOR}INSTALLING DEPENDENCIES#{NO_COLOR}'")
  system("echo '#{NOTICE_COLOR}-----------------------------------------------#{NO_COLOR}'")
  puts "\n"
  system('bundle install')

  puts "\n"
  system("echo '#{NOTICE_COLOR}-----------------------------------------------#{NO_COLOR}'")
  system("echo '#{NOTICE_COLOR}PREPARING DEV ENVIRONMENT#{NO_COLOR}'")
  system("echo '#{NOTICE_COLOR}-----------------------------------------------#{NO_COLOR}'")
  puts "\n"
  system('bundle exec hanami db drop')
  system('bundle exec hanami db create')
  system('bundle exec hanami db prepare')

  puts "\n"
  system("echo '#{NOTICE_COLOR}-----------------------------------------------#{NO_COLOR}'")
  system("echo '#{NOTICE_COLOR}PREPARING TEST ENVIRONMENT#{NO_COLOR}'")
  system("echo '#{NOTICE_COLOR}-----------------------------------------------#{NO_COLOR}'")
  puts "\n"
  system('HANAMI_ENV=test bundle exec hanami db drop')
  system('HANAMI_ENV=test bundle exec hanami db create')
  system('HANAMI_ENV=test bundle exec hanami db prepare')
end
