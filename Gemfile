source "https://rubygems.org"

gem "github-pages", group: :jekyll_plugins

install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo-data"
end

gem "wdm", install_if: Gem.win_platform?
