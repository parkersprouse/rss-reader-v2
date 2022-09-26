RSpec.describe Mailers::ActivateAccount, type: :mailer do
  it 'delivers email' do
    mail = Mailers::ActivateAccount.deliver
  end
end
