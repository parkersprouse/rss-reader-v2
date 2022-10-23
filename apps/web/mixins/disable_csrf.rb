# frozen_string_literal: true

module DisableCSRF
  def invalid_csrf_token?
    false
  end
end
