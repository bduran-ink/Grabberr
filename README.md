# Grabber

Simple demo: a minimal backend API and a static frontend that lists products.

## Structure

- `backend/` — Node (Express) API (runs on port 4000)
  - `server.js` — API server
  - `package.json` — backend dependencies & `start` script
- `frontend/` — static site (HTML/CSS/JS)
  - `index.html`, `app.js`, `style.css`
  - `images/` — SVG product images

## Prerequisites

- Node.js (14+ recommended)
- npm (comes with Node)
- Optional: Python (for `python -m http.server`) or `npx http-server` for serving static files

## Run locally (Windows - `cmd.exe`)

Start the backend:

```cmd
cd C:\Users\bianc\OneDrive\Documents\GitHub\Grabber\backend
npm install
npm start
# or: node server.js
```

Serve the frontend (option A — `http-server`):

```cmd
npx --yes http-server "C:\Users\bianc\OneDrive\Documents\GitHub\Grabber\frontend" -p 3000
```

Serve the frontend (option B — Python):

```cmd
cd C:\Users\bianc\OneDrive\Documents\GitHub\Grabber\frontend
python -m http.server 3000
```

Open in your browser:

- Frontend UI: `http://127.0.0.1:3000`
- API endpoint: `http://127.0.0.1:4000/products`

## Notes

- The backend returns product objects; each product may include an `image` field that points to `/images/*.svg`. Serve the frontend directory so those image paths resolve.
- `backend/package.json` includes a `start` script (`node server.js`). Run it from inside `backend/`.

## Extras

If you'd like, I can:
- Add a `start-dev.bat` to launch backend + frontend in two windows with one double-click.
- Commit these changes and push a branch for you.

