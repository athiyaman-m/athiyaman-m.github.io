# Athiyaman M — Portfolio

Personal portfolio website of **Athiyaman M**, a software engineer based in Chennai, India,
working across backend systems, AI products, and healthcare technology.

The site is a **static website** — plain HTML, CSS, and vanilla JavaScript with **no build
step and no dependencies**. Push to `main` and GitHub Pages serves it directly.

Live site: <https://athiyaman-m.github.io/>

---

## Tech stack

| Layer      | Choice                                                        |
| ---------- | ------------------------------------------------------------- |
| Markup     | Hand-written HTML5                                             |
| Styling    | Plain CSS (no preprocessor, no Tailwind)                      |
| Behaviour  | Vanilla JavaScript (no framework)                             |
| Fonts      | Google Fonts — Manrope + DM Mono (home page)                  |
| Hosting    | GitHub Pages (`athiyaman-m.github.io`, branch `main`)         |

There is **no `package.json`, no bundler, and no build command**. Everything is served as-is.

---

## Project structure

```
athiyamanm/
├── index.html              # Home — hero, about, selected work, experience, contact
├── experience.html         # Full work history
├── education.html          # Degree, honours, and coursework
├── projects.html           # Project listing (grouped by year)
├── publications.html       # Research publications
├── blogs.html              # Writing / articles
├── news.html               # Awards and milestones by year
├── .gitignore
├── README.md
├── assets/
│   ├── css/
│   │   ├── portfolio.css    # Styles for the home page only
│   │   ├── site.css         # Shared design system for inner pages
│   │   └── styles.css       # Theme overrides (loaded after site.css)
│   ├── js/
│   │   ├── portfolio.js     # Home page behaviour (mobile menu, scroll reveal)
│   │   └── site.js          # Shared header/footer + listing accordions for inner pages
│   ├── documents/
│   │   └── Resume-Athiyaman.pdf
│   └── img/
│       ├── favicon.png
│       ├── athiyaman-3d-cartoon-workstation.png   # Hero portrait
│       └── badge-sd-fill.svg                      # Monogram placeholder thumbnail
└── news/                    # Event / award photos referenced by news.html
    ├── 2023/
    ├── 2024/
    ├── 2025/
    └── 2026/
```

### How the pieces fit together

- **`index.html`** is standalone and loads only `assets/css/portfolio.css` and
  `assets/js/portfolio.js`.
- **Every other page** loads `assets/css/site.css` → `assets/css/styles.css` and
  `assets/js/site.js`. The shared JS injects the site header, footer, and mobile bottom
  navigation, and rebuilds the project/publication/blog listings into year-grouped
  accordions from the markup in the HTML.
- Asset links are **relative**, so the site works from the repository root (as GitHub Pages
  serves it) and from any local static server.

---

## Running locally

Because the pages are static, you can preview them with any static file server. Opening
`index.html` directly in a browser also works, but a server is recommended so relative paths
and the shared JS behave exactly as in production.

### Option 1 — Python (no install needed)

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000/>.

### Option 2 — Node (`npx`)

```bash
npx serve .
```

Then open the URL it prints (usually <http://localhost:3000/>).

### Option 3 — VS Code Live Server

Install the **Live Server** extension, right-click `index.html`, and choose
**"Open with Live Server"**.

Stop the server with `Ctrl+C`.

---

## Editing content

| What you want to change            | File                          |
| ---------------------------------- | ----------------------------- |
| Home page sections / hero copy     | `index.html`                  |
| Work history                       | `experience.html`             |
| Degree and coursework              | `education.html`              |
| Projects list                      | `projects.html`               |
| Publications                       | `publications.html`           |
| Blog / article list                | `blogs.html`                  |
| Awards and milestones              | `news.html`                   |
| Resume PDF                         | `assets/documents/`           |
| Images and photos                  | `assets/img/` and `news/`     |

Notes:

- Project, publication, and blog listings are plain HTML; the shared JS reads those cards
  and re-renders them grouped by year at load time. To add an entry, copy an existing
  `<div class="quarto-post">…</div>` block and edit its fields (title, description,
  categories, date, `data-github-url`, etc.).
- Cache-busting query strings such as `?v=20260701` are appended to the inner-page CSS/JS.
  Bump the version (e.g. `?v=20260702`) after changing `site.css`, `styles.css`, or `site.js`
  to force browsers to fetch the new file.

---

## Deployment

The site is published with **GitHub Pages** from the `main` branch of the
`athiyaman-m.github.io` repository.

```bash
git add .
git commit -m "Your message"
git push origin main
```

GitHub Pages rebuilds automatically within a minute or two; the changes appear at
<https://athiyaman-m.github.io/>.

---

## Notes

- `news/2026/` contains event photos that are not currently referenced by any page — kept
  for future updates.
- No framework, no bundler, and no runtime dependencies are required to run or deploy.
