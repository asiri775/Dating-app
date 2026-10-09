# Pairly

Dating app web front end. Next.js (App Router) + TypeScript.

The design source is the Pairly design canvas; tokens and screen notes are in the project's `design-reference.md`.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run lint
npm run build
```

## What exists so far

- Home page (`/`): nav, hero with phone mockup, three-step "how it works", who we are, stories grid, closing call to action, footer.
- All copy and tiles come from dummy data in `src/data/home.ts`. Square-bracket text such as `[First name]` and `[PHOTO]` is deliberate placeholder content.
- Design tokens are CSS variables at the top of `src/app/globals.css`. Fonts (Bricolage Grotesque, DM Sans) load through `next/font/google`.

## Not built yet

Links to `/pricing`, `/discover`, `/profile`, `/privacy`, `/terms` and `/safety` point at planned routes that do not exist yet, so they will show a 404 for now.

## Layout

```
src/
  app/          layout, page, global styles
  components/   Icon, SiteNav, Hero, HowItWorks, About, Stories, CtaBanner, SiteFooter
  data/         dummy content
```
