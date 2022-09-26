module Mailers
  class ActivateAccount
    include Hanami::Mailer

    from ENV.fetch('APP_EMAIL')
    to :email
    subject 'Activate Your RSS Reader Account'

    def email
      user.email
    end

    def pw_reset_url
      "#{reset_route}?token=#{user.pw_reset_token}"
    end
  end
end
