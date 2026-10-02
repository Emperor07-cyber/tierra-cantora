# Rancho y Lácteos Tierra Cantora — website

A single-page React site for Rancho y Lácteos Tierra Cantora, a beef-and-dairy
ranch near San Miguel de Allende, Guanajuato, México.

## Running it locally

You'll need [Node.js](https://nodejs.org/) installed (version 18 or newer).

1. Open a terminal in this folder.
2. Install dependencies:

   ```
   npm install
   ```

3. Start the dev server:

   ```
   npm run dev
   ```

4. Open the URL it prints (usually `http://localhost:5173`) in your browser.

The page will reload automatically whenever you edit `src/App.jsx`.

## Adding your own photos

Drop your image files into `public/images/`, using the file names listed in
`public/images/README.md`. Any photo not yet added shows a small
"Add photo: ..." placeholder instead of breaking the site, so you can add
them one at a time.

## Editing content

All of the site's text — the ranch story, herd descriptions, products,
guest stays, testimonials, FAQ, and contact details — lives in `src/App.jsx`
as plain JavaScript objects near the top of the file (`SEASONS`, `PRODUCTS`,
`VOICES`, `FAQS`) and directly in the JSX further down. Edit the text there
and save; the dev server will update automatically.

## Building for deployment

When you're ready to put the site online:

```
npm run build
```

This creates a `dist/` folder with the finished, optimized site, which you
can upload to any static host (Netlify, Vercel, GitHub Pages, your own
server, etc.).

## Project structure

```
tierra-cantora/
├── index.html          entry HTML file
├── package.json         project dependencies and scripts
├── vite.config.js        build tool configuration
├── public/
│   └── images/           put your photos here
└── src/
    ├── main.jsx          mounts the app
    └── App.jsx           the whole site (content, layout, styles)
```
