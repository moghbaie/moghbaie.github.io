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
| Project pages (one file each) | `_projects/*.md` |
| Project page layout | `_layouts/project.html` |
| Sample work page (lists all projects) | `work/index.html` |

## Adding a project

Copy any file in `_projects/`, rename it (the filename becomes the URL: `_projects/my-thing.md` →
`/projects/my-thing/`), and edit the top section:

- `kind: project` shows it under **Selected projects**; `kind: code` under **Open code**
- `order` sets its position; `org`, `summary`, `tags` and `links` fill in the card and page header

Everything below the `---` is the page body, written in Markdown. It appears on Sample work automatically.
| Colors & styles | `assets/css/style.css` (colors are variables at the top) |
| Site title / description | `_config.yml` |
