# A mixin that can be included in an {Action} to check if the user triggering
# this {Action} is authenticated, and finding who it is if so.
module CheckAuthentication
  # @return [Boolean]
  #   Whether or not the user is currently authenticated.
  def authenticated?
    session[:user_id].present?
  end

  # @return [User]
  #   The currently authenticated user, if there is an authenticated user.
  def current_user
    return nil unless authenticated?
    @user ||= User.find_by(id: session[:user_id])
  end

  # @return [void]
  #   When used as a callback in an {Action}, will redirect the user to the sign in page
  #   if the request was not made by an authenticated user.
  def must_be_authenticated
    redirect_to routes.sign_in_path unless authenticated?
  end

  # @return [void]
  #   When used as a callback in an {Action}, will redirect the user to the sign in page
  #   if the request was not made by an authenticated user.
  def must_not_be_authenticated
    redirect_to routes.root_path if authenticated?
  end
end
