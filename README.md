# Future Tense Reading Dashboard

Microlearning reader for Future Tense Publishing. Simple. Sincere. Sacred.

## Edit content
- Books and ideas: `data/books.js` (add one object to `BOOKS` for a new book)
- Purchase link: `SITE_URL` in `data/books.js`
- Colours and fonts: `styles/globals.css`

## Run on your computer (optional)
    npm ci
    npm run dev        # http://localhost:3000

## Publish
Push to the `main` branch. GitHub Actions builds the site and deploys it to
GitHub Pages at https://futuretensebangalore.com (see `public/CNAME`).

## Privacy
Readers' progress, saved ideas and reflections are stored only in their own
browser. Nothing is sent to a server. Readers can download or delete their
data from the Progress page.
