# This is a custom Rack middleware for setting the `Cache-Control` HTTP header in all requests
# for files under the `/assets` path. This ensures that the assets we serve are cached by the
# browser for performance optimization. The length of time we cache for doesn't really
# matter (meaning we can cache for a long time) because any new versions of the assets will be
# built with a new hash in the name, so there's very little risk of outdated assets being served.
class RackCache
  def initialize(app)
    @app = app
  end

  def call(env)
    res = @app.call(env)
    path = env['REQUEST_PATH']
    patterns.each do |pattern, data|
      if path =~ pattern
        res[1]['Cache-Control'] = data[:cache_control] if data.has_key?(:cache_control)
        res[1]['Expires'] = (Time.now + data[:expires]).utc.rfc2822 if data.has_key?(:expires)
        return res
      end
    end
    res
  end

  private

  def patterns
    return dev_cache_control if Hanami.env?(:development)
    prod_cache_control
  end

  def dev_cache_control
    {
      /\/assets\// =>
        {
          cache_control: 'no-cache, max-age=0',
          expires: 0
        }
    }
  end

  def prod_cache_control
    {
      /\/assets\// =>
        {
          # 60 seconds * 60 minutes * 24 hours * 365 days = 31536000 seconds = 1 year
          cache_control: 'private, max-age=31536000',
          expires: 31536000 # (DateTime.now + 365).new_offset('GMT').strftime('%a, %d %b %Y %H:%M:%S GMT')
        }
    }
  end
end
