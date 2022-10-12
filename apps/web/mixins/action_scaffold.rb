module ActionScaffold
  AuthFormError = Class.new(StandardError)
  FeedFormError = Class.new(StandardError)

  def self.included(action)
    action.class_eval do
      expose :errored?
    end
  end

  private

  def errored?
    # this doesn't seem to work accurately due to some strange caching issue
    flash[:error].present?
  end
end
