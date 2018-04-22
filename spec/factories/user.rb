FactoryBot.define do
  factory :user do
    sequence(:email) { |_| Faker::Internet.email }
    password 'password'
  end
end
