# .title Portfolio & Blog

This repository hosts the source code for my personal portfolio and research blog, built with **Jekyll**, **Bulma CSS**, and **Vanilla JavaScript**.

## Features

- **Dark Mode Support**: Seamless toggle between light and dark themes using CSS variables and local storage. State-of-the-art FOUC (Flash of Unstyled Content) prevention.
- **Mobile-First Design**: Completely responsive grid powered by Bulma.
- **Live Search**: Client-side instant JSON-based indexing using \simple-jekyll-search\.
- **Data-Driven Components**: Auto-generated projects, blogs, research pages rendered from \_data/*.yml\, keeping code clean.
- **SEO Optimized**: Fully integrates \jekyll-seo-tag\, \jekyll-sitemap\, and properly structured HTML5 headings.

## Local Development

If you'd like to run it locally:

1.  **Clone the repository**:
    \\\ash
    git clone https://github.com/collide0412/collide0412.github.io.git
    cd collide0412.github.io
    \\\

2.  **Install dependencies**:
    Ensure you have Ruby and Bundler installed.
    \\\ash
    bundle install
    \\\

3.  **Run the Jekyll server**:
    \\\ash
    bundle exec jekyll serve
    \\\

4.  Open \http://localhost:4000\ in your browser.

## Removal of "Forked from" (If applicable)

If you've cloned this from another template and wish to detach the fork network on GitHub to make it a standalone repository:
1. Create a new empty repository on your GitHub account.
2. In your terminal, swap the Git origin:
   \git remote set-url origin https://github.com/USERNAME/NEW-REPO.git\
3. Push to the new repository:
   \git push -u origin main\
(Or request GitHub Support to detach the fork manually).

## License

This project is open-sourced under the [MIT License](LICENSE).
