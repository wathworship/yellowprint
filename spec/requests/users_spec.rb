require "rails_helper"

describe "users" do
  let(:user) { create_normal_user }

  before do
    user
    create_normal_user
  end

  it "return users list" do
    sign_in user

    get "/users"
    users = JSON.parse(response.body)
    expect(users.count).to eq 2
  end
end
