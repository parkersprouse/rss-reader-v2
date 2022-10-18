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
      URI::HTTP.build(
        scheme: scheme,
        host: host,
        path: reset_route,
        query: "token=#{user.pw_reset_token}")
    end

    private

    def host
      params.env['HTTP_HOST']
    end

    def scheme
      params.env['rack.url_scheme'] || (Hanami.env?(:production) ? 'https' : 'http')
    end
  end
end
