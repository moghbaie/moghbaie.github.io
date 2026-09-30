# moghbaie.github.io

Personal website of Mehrnoosh Oghbaie, live at <https://moghbaie.github.io>.
Built with [Jekyll](https://jekyllrb.com/) and the
[Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) theme, hosted on GitHub Pages.

## Where to edit things

| What | File |
|------|------|
| Site title, bio, sidebar & footer links | `_config.yml` |
| Home page | `index.md` |
| Top navigation | `_data/navigation.yml` |
| About / Experience pages | `_pages/about.md`, `_pages/experience.md` |
| Projects list | `_data/projects.yml` |
| Blog posts | `_posts/YYYY-MM-DD-title.md` |
| Profile photo | `assets/images/Mehrnoosh_Oghbaie.JPEG` |

Push to `master` and GitHub Pages rebuilds the site automatically (takes ~1 minute).

## Run locally (optional)

Requires Ruby (on Windows: [RubyInstaller](https://rubyinstaller.org/) with DevKit).

```sh
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.
