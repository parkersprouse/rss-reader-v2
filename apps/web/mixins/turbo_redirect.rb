# frozen_string_literal: true

#-----------
# Non-GET submissions handled by Turbo expect redirection responses to be made with a
# `303 See Other` status in order to redirect correctly.
#
# This helper will override the `redirect_to` method to check if any non-GET requests include the
# Turbo-specific MIME type, and make the redirection use the `303 See Other` status if so.
#-----------

module TurboRedirectHelper
  def redirect_to(url = {}, options = {})
    options[:status] = 303 if !request.get? && accept?('text/vnd.turbo-stream.html')
    super url, options
  end
end
