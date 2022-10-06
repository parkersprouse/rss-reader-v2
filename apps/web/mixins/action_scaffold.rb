module ActionScaffold
  AuthFormError = Class.new(StandardError)
  FeedFormError = Class.new(StandardError)

  def self.included(action)
    action.class_eval do
      expose :errored
    end
  end

  private

  def errored
    flash[:error].present?
  end
end
