## CAST Website

[www.wearecast.org.uk](http://wearecast.org.uk)

## Running Locally

* Make sure you have correct version of Ruby installed. The version number can be found on the `.ruby-version` file in the root.
* Run `gem install bundler`
* Navigate to `cast-website` directory and run `bundle install`
* Now you can run `middleman serve` from directory and access the site at `http://localhost:4567`

## Deploying

Currently we have the `main` site and a `staging` version of the site deployed on heroku

+ When making changes, pull request your branch into the `staging` branch - when merged, this will auto-deploy to heroku
+ When all changes have been approved, merge the `staging` branch into `master` - this will auto-deploy to the live site
