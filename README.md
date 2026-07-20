# Tran Quoc Dang — portfolio

Personal portfolio and research profile for network systems, network security, packet analysis, and applied machine learning.

## Stack

- Jekyll and Liquid for static generation
- Bulma 0.9.4 plus custom Sass
- Vanilla JavaScript for the mobile menu and theme preference
- GitHub Actions and GitHub Pages for deployment

The site deliberately stays serverless: contact uses direct email and professional-profile links, and recurring project content lives in `_data/projects.yml`.

## Local development

Ruby and Bundler are required.

```bash
bundle install
bundle exec jekyll serve
```

Open <http://127.0.0.1:4000/>.

Create a production build with:

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

## Content map

- `index.md`: homepage overview
- `research.md`: research directions and earlier work
- `_layouts/portfolio.html`: detailed education, experience, skills, and project profile
- `_data/projects.yml`: structured project and research entries
- `_posts/`: writing
- `_sass/main.scss`: design system and responsive styles

## Deployment

Pushes to `master` trigger `.github/workflows/jekyll.yml`. The workflow builds the static site and publishes `_site` to the `gh-pages` branch.

## License

See [LICENSE](LICENSE) for the repository's GPL-2.0 terms.
