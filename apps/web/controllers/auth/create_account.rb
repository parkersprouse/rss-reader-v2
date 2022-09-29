module Web
  module Controllers
    module Auth
      class CreateAccount
        include Web::Action

        before :must_not_be_authenticated

        def call(params)
        end
      end
    end
  end
end
