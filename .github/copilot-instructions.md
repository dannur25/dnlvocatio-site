# Copilot Instructions — dnlvocatio.com

Personal portfolio site (React + Vite + Tailwind + shadcn/ui + TypeScript). Deployed to GitHub Pages at dnlvocatio.com.

## Key locations

- Routes: `src/App.tsx`
- Pages: `src/pages/`
- Shared components: `src/components/`
- UI primitives (shadcn): `src/components/ui/` — do not edit manually
- Design tokens: `src/index.css`
- Utilities: `src/lib/`
- Static assets: `public/`

## Validated commands

```sh
npm run dev          # Dev server (port 8080)
npx tsc --noEmit    # Type check
npm run lint         # ESLint
npx vite build      # Production build (cross-platform)
```

## Conventions

- Path alias `@/` → `src/`
- Tailwind utilities + `cn()` from `@/lib/utils`
- Functional components, arrow functions, default exports
- All routes in `App.tsx` above the catch-all `*`
- Journal entries live in the `entries` array at the top of `src/pages/Journal.tsx`, newest first
- Images in `public/<hobby>/`, referenced by absolute path

## Constraints

- No backend or API; fully static SPA
- Do not hand-edit `src/components/ui/` files
- Do not add npm dependencies without user approval
- Validate with `npx tsc --noEmit` and `npx vite build` before finishing
- Keep external links using `target="_blank"` paired with `rel="noopener noreferrer"`

## Detailed handbook

See [AGENTS.md](../AGENTS.md) for full architecture, workflows, known limitations, and maintenance rules.
