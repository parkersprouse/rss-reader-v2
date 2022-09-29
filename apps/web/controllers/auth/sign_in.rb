module Web
  module Controllers
    module Auth
      class SignIn
        include Web::Action

        before :must_not_be_authenticated

        def call(params)
        end
      end
    end
  end
end
