source 'https://rubygems.org'
ruby '2.7.6'

gem 'bcrypt'
gem 'hanami', '~> 1.3'
gem 'hanami-model', '~> 1.3'
gem 'pg'
gem 'rack-protection'
gem 'rake'

group :development do
  gem 'babel-transpiler'
  gem 'hanami-webconsole'
  gem 'reek'
  gem 'rubocop'
  gem 'rubocop-airbnb'
  gem 'sassc'
  gem 'shotgun', platforms: :ruby
  gem 'uglifier'
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
  # gem 'puma'
end
