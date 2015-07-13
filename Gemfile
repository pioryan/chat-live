source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.1'

gem 'pg'

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'coffee-rails'

  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # gem 'therubyracer', platforms: :ruby

  gem 'uglifier', '>= 1.0.3'
end

group :test do
  gem 'faker'
  gem 'capybara'
  gem 'database_cleaner'
  gem 'launchy'
end
group :development, :test do
  gem 'annotate'

  gem 'rspec-rails'
  gem 'factory_girl_rails'
  gem 'guard-rspec'
  gem 'ngrok'
end

gem 'jquery-rails'

# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
gem 'puma'
# gem 'rainbows'
#gem 'thin'
gem 'redis'

gem "figaro"
gem 'haml-rails'


gem 'aws-sdk', '< 2.0'
gem "asset_sync"
# gem 'heroku-deflater', :group => :production
gem "yui-compressor"

gem 'rack-zippy'

gem "rails_12factor"

gem 'newrelic_rpm'

gem 'bootstrap-sass', '~> 3.3.4'
gem 'sass-rails', '>= 3.2'

gem 'devise'
gem 'devise-guests'
# To use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.0.0'

# Use unicorn as the app server
# gem 'unicorn'

# Deploy with Capistrano
# gem 'capistrano', group: :development

# To use debugger
# gem 'debugger'

group :development do
  gem 'pry'
  gem 'capistrano', '~> 3.4.0'
  # gem 'capistrano-unicorn-nginx'
  # gem 'capistrano-safe-deploy-to', '~> 1.1.1'
  gem 'capistrano3-puma',   require: false
  gem 'capistrano-rails',   '~> 1.1', require: false
  gem 'capistrano-bundler', '~> 1.1', require: false
  gem 'capistrano-rvm',   '~> 0.1', require: false
  gem 'capistrano-figaro-yml', '~> 1.0.1'
  gem 'capistrano-postgresql', '~> 4.2.0'
end