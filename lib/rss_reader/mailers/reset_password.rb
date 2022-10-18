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
      builder_class.build(
        host: host,
        path: reset_route,
        query: "token=#{user.pw_reset_token}")
    end

    private

    def host
      params.env['HTTP_HOST']
    end

    def builder_class
      return URI::HTTPS if params.env['rack.url_scheme'] == 'https' || Hanami.env?(:production)
      URI::HTTP
    end
  end
end
