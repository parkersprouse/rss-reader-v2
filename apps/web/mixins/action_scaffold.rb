module ActionScaffold
  class AuthFormInvalid < StandardError
    def initialize(msg)
      super msg
    end
  end

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
