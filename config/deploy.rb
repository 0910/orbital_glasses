require "bundler/capistrano"

load "config/recipes/base"
load "config/recipes/nginx"
load "config/recipes/unicorn"
load "config/recipes/mysql"
load "config/recipes/rbenv"
load "config/recipes/check"
load "config/recipes/nodejs"

server "74.208.90.50", :web, :app, :db, primary: true

set :domain, 'orbitalvirtual.com.ar'
set :user, "root"
set :application, "orbital_glasses"
set :deploy_to, "/var/www/applications/#{application}"
set :deploy_via, :remote_cache
set :use_sudo, false

set :scm, "git"
set :repository, "git@github.com:0910/orbital_glasses.git"
set :branch, "master"
set :keep_releases, 2

default_run_options[:pty] = true
ssh_options[:forward_agent] = true

namespace :images do
  task :symlink, :except => { :no_release => true } do
    run "rm -rf #{release_path}/public/spree"
    run "ln -nfs #{shared_path}/spree #{release_path}/public/spree"
  end
end
after "bundle:install", "images:symlink"

after "deploy", "deploy:cleanup" # keep only the last 5 releases
