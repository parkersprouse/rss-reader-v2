source 'https://rubygems.org'
ruby '2.7.8'

gem 'bcrypt'
gem 'dry-core', '0.8.1' # breaks if updates to 0.9.0+
gem 'faraday'
gem 'faraday-follow_redirects'
gem 'feedjira'
gem 'hanami', '~> 1.3'
gem 'hanami-model', '~> 1.3'
gem 'newrelic_rpm', require: false
gem 'oj'
gem 'pg'
gem 'rack-brotli'
gem 'rack-protection'
gem 'rake'

group :development do
  gem 'hanami-webconsole'
  gem 'reek'
  gem 'rubocop'
  gem 'rubocop-airbnb'
  gem 'shotgun', platforms: :ruby # Seems like shotgun breaks "watch" mode
  gem 'yard'
end

group :test, :development do
  gem 'dotenv', '~> 2.4'
  gem 'pry'
end

group :test do
  gem 'capybara'
  gem 'rspec'
end

group :production do
  gem 'puma'
end
