# frozen_string_literal: true

require 'hanami/utils/blank'
require 'rack/utils'

#-----------
# Copied from https://github.com/hanami/controller/blob/main/lib/hanami/action/csrf_protection.rb
# so that I can add in my own checks.
#
# Hanami doesn't look for the CSRF token headers and solely relies on a specific field being
# included with submitted forms, which is very limiting for third-party libraries we want
# to use. So these changes are to also check provided headers.
#-----------

module CSRFOverrides
  def csrf_token_value
    request.env['HTTP_X_CSRF_TOKEN'] || params[Hanami::Action::CSRFProtection::CSRF_TOKEN]
  end

  def invalid_csrf_token?
    Hanami::Utils::Blank.blank?(csrf_token_value) ||
      !::Rack::Utils.secure_compare(session[Hanami::Action::CSRFProtection::CSRF_TOKEN], csrf_token_value)
  end
end
