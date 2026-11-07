# Naba — Creative Archive

A pixel-inspired, single-page personal portfolio made with plain HTML, CSS and JavaScript.

## Files
- `index.html` — page content
- `style.css` — visual design and responsive layout
- `script.js` — small interactions
- `assets/` — put your images and video files here

## Add your own work
1. Put your video files in `assets/` (for example `edit-01.mp4`).
2. In `index.html`, find the `ADD YOUR EDIT VIDEO` placeholder and replace its `<div>` with:
   ```html
   <video controls playsinline preload="metadata">
     <source src="assets/edit-01.mp4" type="video/mp4">
   </video>
   ```
3. Add this CSS rule to `style.css` so videos fit:
   ```css
   .edit-card video { width: 100%; aspect-ratio: 16/10; object-fit: cover; background: #080a09; }
   ```
4. For pixel art, replace an `.art-placeholder` div with:
   ```html
   <img class="art-image" src="assets/pixel-art-01.png" alt="Description of my pixel art">
   ```
   Add this CSS:
   ```css
   .art-image { width: 100%; height: 220px; object-fit: cover; image-rendering: pixelated; border: 1px solid #485449; }
   ```
5. For your NASA certificate, add your certificate image in `assets/` and replace the `.certificate-placeholder` div with an `<img>` element. Use `max-width:100%; display:block;` in CSS.
6. Update the chess ratings in `index.html` to your current ratings. Only label a rating as FIDE if it is your official FIDE rating.

## Publish with GitHub Pages
1. Create a **public** GitHub repository named exactly `YOUR-USERNAME.github.io` (replace with your GitHub username).
2. Upload `index.html`, `style.css`, `script.js`, and the `assets` folder contents to the repository root. `README.md` can also be uploaded.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/(root)`, then Save.
6. After deployment, visit `https://YOUR-USERNAME.github.io`.

The first deployment may take a few minutes. Changes pushed to the `main` branch will update the site.

## Before publishing
- Replace `Naba` if you prefer another display name.
- Replace `your-email@example.com` with an email address you are comfortable making public, or remove the contact links.
- Replace the sample chess rating with your current accurate rating.
- Add only media you own or have permission to display.
