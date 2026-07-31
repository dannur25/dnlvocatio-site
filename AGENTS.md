# Agent Handbook — dnlvocatio.com

## Project overview

Personal portfolio and life site for Daniel Nursen, a data analyst. Deployed at **dnlvocatio.com** via GitHub Pages. The site has sections for About, Work (resume + projects), Life (hobby photo/quote galleries), and Contact.

## Architecture and directory map

```
/                         Root config (Vite, Tailwind, TypeScript, ESLint)
├─ .github/workflows/    GitHub Actions deploy to GitHub Pages
├─ public/               Static assets (images per hobby, favicon, robots.txt, CNAME)
├─ src/
│  ├─ main.tsx           React entry point
│  ├─ App.tsx            Route definitions (react-router-dom, BrowserRouter)
│  ├─ index.css          Tailwind directives + CSS custom properties (design tokens)
│  ├─ components/        Shared components (Header, Footer, NavLink, FadeInImage, FadeInQuote)
│  │  └─ ui/            shadcn/ui primitives (do not edit manually; managed by shadcn CLI)
│  ├─ hooks/             Custom React hooks
│  ├─ lib/               Utilities (cn helper, GA4 wrapper)
│  └─ pages/             Route-level page components
│     └─ hobbies/        Hobby sub-pages (Cycling, Fishing, Reading, Running, Travel)
```

This is a single-page application with client-side routing. There is no backend, no API, no database.

## Technology stack

| Layer        | Technology                                     |
| ------------ | ---------------------------------------------- |
| Framework    | React 18 + TypeScript                          |
| Build        | Vite 5 (SWC plugin)                            |
| Styling      | Tailwind CSS 3 + shadcn/ui + CSS custom props  |
| Routing      | react-router-dom 6 (BrowserRouter)             |
| Icons        | lucide-react                                   |
| Analytics    | Google Analytics 4 (gtag.js, ID: G-QTLPC7Z0BL) |
| Font         | Radley (Google Fonts, loaded in index.html)    |
| Package mgr  | npm                                            |
| Deploy       | GitHub Actions → GitHub Pages (custom domain)  |
| Node version | 20 (CI), 24+ works locally                     |

## Local setup

```sh
npm install
npm run dev        # Vite dev server at http://localhost:8080
```

## Development commands

| Command            | Purpose                                                   |
| ------------------ | --------------------------------------------------------- |
| `npm run dev`      | Start local dev server (port 8080)                        |
| `npm run build`    | Production build → `dist/` (uses `cp`; Linux/CI only)     |
| `npx vite build`   | Production build without 404.html copy (works on Windows) |
| `npm run preview`  | Preview production build locally                          |
| `npm run lint`     | ESLint (flat config)                                      |
| `npx tsc --noEmit` | TypeScript type checking                                  |

**Note:** `npm run build` includes `cp dist/index.html dist/404.html` which only works on Linux/macOS/CI. On Windows use `npx vite build` directly.

## Testing and validation

There is no test suite. Validate changes by:

1. `npx tsc --noEmit` — must pass with no errors.
2. `npm run lint` — review errors; warnings in `src/components/ui/` are from generated code and acceptable.
3. `npx vite build` — must produce `dist/` without errors.
4. `npm run dev` — visually verify affected pages in the browser.

## Coding conventions

- **Path aliases:** Use `@/` to reference `src/` (e.g., `@/components/Footer`).
- **Components:** Functional components with arrow functions; default export per file.
- **Styling:** Tailwind utility classes; design tokens via CSS custom properties in `index.css`. Use the `cn()` helper from `@/lib/utils` to merge class names.
- **shadcn/ui components:** Located in `src/components/ui/`. Do not hand-edit these files. Add new components via the shadcn CLI (`npx shadcn-ui@latest add <component>`).
- **Page structure:** Each page is self-contained, renders `<Footer />` at the bottom (hobby sub-pages are an exception — they omit it).
- **Routing:** All routes defined in `App.tsx`. Add new routes above the catch-all `*` route.
- **Analytics:** Use `@/lib/ga` helpers (`pageview`, `event`) for custom tracking. `ScrollToTop` already tracks page views on route changes.
- **Images:** Stored in `public/<hobby>/`. Referenced with absolute paths (e.g., `/cycling/photo.jpg`).

## UI and styling conventions

- Cream/warm color palette defined as HSL CSS variables; dark mode tokens exist but no toggle is implemented.
- Radley serif is the primary font (loaded globally).
- Max content width: `max-w-4xl` for text pages, `max-w-5xl` for image galleries.
- Fade-in animations via `FadeInImage` and `FadeInQuote` using IntersectionObserver.
- Fixed header with backdrop blur; centered navigation links.

## Environment variables

None required. The GA4 measurement ID is hardcoded (frontend analytics; not a secret).

## Deployment

- Push to `main` triggers `.github/workflows/deploy.yml`.
- The workflow runs `npm ci && npm run build`, then deploys `dist/` to GitHub Pages.
- Custom domain `dnlvocatio.com` is configured via `CNAME` file in the repo root.
- The build copies `index.html` to `404.html` so that GitHub Pages serves the SPA for all routes.

## Security constraints

- No secrets or API keys should be committed.
- No server-side code; the site is fully static.
- External links must use `rel="noopener noreferrer"` with `target="_blank"`.
- Do not add dependencies that execute code at build time without review.

## Known limitations

- `npm run build` fails on Windows due to `cp` command. Use `npx vite build` on Windows.
- Projects page contains placeholder content with links to non-existent routes.
- Many shadcn/ui components and npm packages are installed but unused (legacy from Lovable scaffold).
- No automated tests exist.
- Dark mode CSS variables are defined but there is no user-facing theme toggle.
- Instagram link on Contact page points to instagram.com root (no profile specified).

## Common development workflows

### Add a new page

1. Create `src/pages/NewPage.tsx`.
2. Add a `<Route>` in `App.tsx` above the catch-all.
3. Add a navigation link in `Header.tsx` if it should appear in the nav.

### Add a new hobby gallery

1. Add images to `public/<hobby>/`.
2. Create `src/pages/hobbies/HobbyName.tsx` using `FadeInImage`.
3. Add a route in `App.tsx`.
4. Add a card link in `src/pages/Life.tsx`.

### Add a shadcn/ui component

```sh
npx shadcn-ui@latest add <component-name>
```

## Rules for AI agents

- **Read this file and `.github/copilot-instructions.md` before beginning substantial work.**
- Do not add new dependencies without explicit user approval.
- Do not refactor working code unless the change is directly requested or fixes a verified issue.
- Do not modify files in `src/components/ui/` by hand.
- Keep pages simple and self-contained; avoid unnecessary abstractions.
- Validate changes with type checking (`npx tsc --noEmit`) and build (`npx vite build`).
- Do not expose secrets, tokens, or credentials in any file.
- Distinguish verified facts from assumptions.

## Documentation maintenance

Treat repository instruction and context files (`AGENTS.md`, `.github/copilot-instructions.md`) as maintained project documentation. Whenever a change makes information in these files inaccurate, incomplete, outdated, or misleading, update the relevant file as part of the same change. This includes changes to architecture, directories, commands, dependencies, environment variables, deployment, conventions, workflows, external services, and important project behavior.

- Confirm that documented commands and paths still match the repository.
- Update only the source that owns the information.
- Avoid duplicating instructions across files.
- Remove or correct stale information when discovered.
- Never record secrets, tokens, passwords, or private keys.
- Keep documentation concise enough that agents can realistically read and follow it.
