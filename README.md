# Natthabhat — Engineering Portfolio

A Next.js and TypeScript portfolio with a resume-style landing page and six full experience detail pages.

## Run

```sh
pnpm install
pnpm dev
```

Open http://localhost:3000. Build with `pnpm build`, then run with `pnpm start`.

## Edit

- `app/experiences.ts`: landing summaries, detailed content, tools, images
- `app/data.ts`: profile and skills
- `components/portfolio.tsx`: resume overview
- `app/experience/[slug]/page.tsx`: full experience page template
- `app/globals.css`: layout and styling
- `public/resume.pdf`: CV download

Each landing experience opens a real detail URL. Contact links open an email draft. Docker deployment is configured; see `DEPLOYMENT.md`.
