# Megamind Ventures Ltd website

Static site (HTML, CSS, JS). No build step.

## Files
- `index.html` - all page content
- `style.css` - colours and fonts are at the top (`:root`)
- `script.js` - mobile menu, hero slideshow and WhatsApp quote form (set `WHATSAPP`)
- `assets/logo.png`, `assets/favicon.png` - brand files
- `assets/clients/` - client logos
- `assets/projects/` - project photos, one folder per service:
  `billboards`, `vehicle-branding`, `wall-branding`, `led-signage`, `event-branding`

## Adding more project photos
1. Put the photo in the matching folder (or make a new folder) in `assets/projects/`.
2. Copy one `<figure>` block in the `#projects` section of `index.html` and change the file path, the `alt` text and the caption.
3. Keep photos under about 300 KB so the page loads fast on mobile.

## Publish on GitHub Pages
1. Create a new repository on GitHub (public).
2. Upload all files in this folder (keep `.nojekyll`).
3. Go to Settings > Pages > Source: "Deploy from a branch" > Branch: `main`, folder `/ (root)` > Save.
4. After a minute your site is live at `https://YOUR-USERNAME.github.io/REPO-NAME/`.

## Before launch
- Only show client logos and brand photos that the clients have agreed to.
