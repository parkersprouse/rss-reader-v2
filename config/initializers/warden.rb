require 'warden'
require './lib/rss_reader/entities/user'

# @reference https://github.com/wardencommunity/warden/wiki/Setup

Warden::Manager.serialize_into_session do |user|
  user.id
end

Warden::Manager.serialize_from_session do |id|
  User.find_by(id: id)
end

Warden::Strategies.add(:local) do
  def valid?
    email || password
  end

  def authenticate!
    return success!(user) if user.present? && passwords_match?
    fail!('Incorrect e-mail or password')
  end

  def email
    params['auth']&.[]('email')
  end

  def password
    params['auth']&.[]('password')
  end

  def passwords_match?
    BCrypt::Password.new(user.pw_hash) == password
  end

  def user
    @user ||= User.find_by(email: email)
  end
end
