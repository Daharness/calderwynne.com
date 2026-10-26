# calderwynne.com

Static website of Calder & Wynne, served by GitHub Pages at https://calderwynne.com.

- `css/tokens.css`, `css/base.css`: copied verbatim from the design system (`styles/`). Update them there first, then copy.
- `css/site.css`: screen adaptation. Same rules as the brand book: white pages, navy and steel, serif for titles and key figures, sans for text, steel only for numbering.
- The C&W mark is inlined as SVG (same geometry as `components/brand.py`).
- DNS (OVH): apex A/AAAA to GitHub Pages, `www` CNAME `daharness.github.io`. `CNAME` file holds the custom domain.

No build step on GitHub: pages are generated locally by `build.py` (EN at `/`, FR at `/fr/`; 6 pages each), then pushed by `deploy.py`.
Partners, deals, figures and quotes are FICTIONAL placeholders (`NOINDEX = True` in `build.py` until replaced).
