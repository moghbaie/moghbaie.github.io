# moghbaie.github.io

Personal website of Mehrnoosh Oghbaie, live at <https://moghbaie.github.io>.
Built with plain Jekyll (no theme); GitHub Pages builds it automatically on every push to `master`.

## Writing a post

1. Create a file in `_posts/` named `YYYY-MM-DD-short-title.md`
   (copy `_drafts/post-template.md` to start).
2. Fill in the `title` (and optionally `subtitle`, `tags`) at the top, then write in Markdown.
3. Commit and push. The post appears at `/writing/` and on the homepage within a minute or two.

Unfinished posts can live in `_drafts/`; they are never published.
Images go in `assets/images/` and are referenced as `/assets/images/name.png`.

## Where things live

| What | File |
|------|------|
| Homepage content | `index.html` |
| Header, footer, fonts (shared by all pages) | `_layouts/default.html` |
| Post page layout | `_layouts/post.html` |
| Writing list page | `writing/index.html` |
| Sample work entries (projects & code) | `_data/work.yml` |
| Sample work page layout | `work/index.html` |
| Colors & styles | `assets/css/style.css` (colors are variables at the top) |
| Site title / description | `_config.yml` |
