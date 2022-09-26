RSpec.describe Mailers::ResetPassword, type: :mailer do
  it 'delivers email' do
    mail = Mailers::ResetPassword.deliver
  end
end
