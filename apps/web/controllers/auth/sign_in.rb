module Web
  module Controllers
    module Auth
      class SignIn
        include Web::Action

        before :must_not_be_authenticated

        def initialize(failure_msg: nil)
          @failure_msg = failure_msg
        end

        def call(_)
          flash[:error] = @failure_msg if @failure_msg.present?
        end
      end
    end
  end
end
