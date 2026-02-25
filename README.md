# DroneSync Landing Page

This is a static single-page landing page for BrandBoost AI, a prototype drone and logo service. The site no longer requires React or any CDN; all interactivity is implemented with plain JavaScript. The dark futuristic theme and responsive design remain. You can display your contact email and, once deployed, a URL such as `https://brandboostai.tk` in the footer.

## Structure

- `index.html` – entry point with static HTML structure and links to CSS/JS.
- `css/style.css` – dark modern theme styles, animations, and responsive rules.
- `js/app.js` – plain JavaScript handling the logo generator and contact form.

## Running (locally)

1. Navigate to `my-website` directory.
2. Open `index.html` in a browser (no build step required).
3. The page works offline; no external dependencies are needed.
4. Modify content or styles to suit your business.

## Deploying for free

You can publish your site at no cost using any of the following services. They will give you a usable URL in the form of a subdomain.

### GitHub Pages

1. Create a free GitHub account if you don't have one.
2. Make a new repository (e.g. `brandboostai`), then push the contents of `my-website` to it.
3. In the repo settings, go to **Pages** and select the `main` branch (or `gh-pages`) and `/ (root)` folder.
4. GitHub will build the site; the public address will be `https://<your-username>.github.io/<repo-name>/`.

### Netlify (or Vercel)

1. Create a free Netlify account and connect it to your GitHub repository (or drag & drop the folder).
2. Netlify automatically deploys and assigns a random subdomain like `happy-crab-12345.netlify.app`.
3. You can change the subdomain in site settings to something memorable.

### Free domain names

- Use a registrar like [Freenom](https://www.freenom.com) to obtain a free domain (`.tk`, `.ml`, `.ga`, `.cf`, `.gq`).
- Point the domain to your GitHub Pages or Netlify site (they provide DNS instructions).
- This gives you a nicer URL such as `brandboostai.tk` without paying anything.

### Tips

- Add an explicit `<title>` and `<meta name="description">` in `index.html` to help search engines.
- After deploying, link to your site from social media or profiles to help people find it.

> ⚠️ Assets (like `assets/hero-bg.jpg`) should be added manually if desired.

This is a quick prototype; for production consider a proper toolchain (Create React App, Vite, etc.) and server-side form handling.
