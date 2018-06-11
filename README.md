# YELLOWPRINT

Ruby on Rails + Angular code template for Banana Coding

### How to create a new project from this template?

1. Create a new repo on github
2. Open Terminal
3. Create a bare clone of the repository.
```
git clone --bare git@github.com:BananaCoding/yellowprint
```
4. Mirror-push to the new repository.
```
cd yellowprint.git
git push --mirror git@github.com:BananaCoding/new-repository.git
```
Where `new-repository` is the name of your new github repo.
5. Remove template folder from your local machine.
```
cd ..
rm -rf yellowprint.git
```
6. Clone new repo to your local machine.
```
git clone git@github.com:BananaCoding/new-repository.git
```

### Prerequisite
- install rbenv
```
brew install rbenv
brew upgrade rbenv ruby-build
```
- ruby 2.5.0
```
rbenv install 2.5.0
rbenv global 2.5.0
```
- nodejs `brew install node`
- yarn `brew install yarn`

### Setup project

##### Dev Machine

1. Mac user have to install Xcode command line tool first
1.1 xcode-select --install # Install Command Line Tools if you haven't already.
1.2 sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
2. install yarn https://yarnpkg.com/lang/en/docs/install
3. install ruby 2.5.0(Windows: https://rubyinstaller.org/, Mac: https://github.com/rbenv/rbenv#homebrew-on-macos)
4. clone code from YellowPrint repo "git clone git@github.com:BananaCoding/yellowprint.git"
5. create config/application.yml you can copy sample config from config/application.sample.yml
6. create config/database.yml you can copy sample config from config/database.sample.yml
7. run "yarn install"
8. run "gem install bundler"
9. run "sudo bundle install"
10. run "rake db:setup" to setup database
11. start server with "rails s" command
12. open "localhost:3000" on your web browser

##### Figaro: environment variables (ENV)
We're using Figaro as a Rails app configuration, so please create your own 'config/application.yml' by running
```
bundle exec figaro install
```
you can see the required ENV in 'config/initializer/figaro.rb'

ps. please also check 'config/application.sample.yml'

##### Heroku

1. link project to Heroku repo by using command
```
git remote add heroku git@heroku.com:project.git
```
where `project` is the name of your Heroku project

2. deploy to Heroku by using command `git push heroku master`

##### Drone (CI)

We are using Drone as CI (Continuous Integration). Please check `.drone.yml` file

You also have to setup your Drone project and environment variables at `http://drone.bananacoding.com`

Following are required variables

1. HEROKU_API_KEY (You can get the key from Heroku website > Account Setting > API Key)
2. HEROKU_LOGIN (Your email)
3. HEROKU_GIT_URL (https://git.heroku.com/your-app-name.git ** where `your-app-name` is your Heroku app name)
4. EMAIL_HOST
5. EMAIL_USERNAME
6. EMAIL_PASSWORD

### Rails Admin

You can enable rails admin by adding `rails_admin_path` variable into your application.yml file

### Translation

We are using i18n and i18n-js together, which means you can use ruby I18n translation on client side like this javascript code

```
I18n.t("KEY")
```
