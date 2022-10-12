module Mailers
  class ResetPassword
    include Hanami::Mailer

    from ENV.fetch('APP_EMAIL')
    to :email
    subject 'Reset Your RSS Reader Password'

    def email
      user.email
    end

    def pw_reset_url
      "#{reset_route}?token=#{token}"
    end
  end
end
