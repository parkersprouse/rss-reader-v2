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
      builder_class.build(
        host: host,
        path: reset_route,
        port: port,
        query: "token=#{user.pw_reset_token}")
    end

    private

    def builder_class
      return URI::HTTPS if params.env['rack.url_scheme'] == 'https' || Hanami.env?(:production)
      URI::HTTP
    end

    def host
      return 'localhost' if Hanami.env?(:development)
      params.env['HTTP_HOST']
    end

    def port
      return if Hanami.env?(:production)
      params.env['HTTP_HOST'].split(':').last.to_i
    end
  end
end
