# NextElite — Community Stats (Vercel-ready)

This repo contains a Next.js + Tailwind project that aggregates Discourse forum metrics and renders a mobile-first, card-based statistics page.

Quick steps to run locally:
1. Copy `.env.example` to `.env.local` and set values (do NOT commit `.env.local`).
2. Install:
   - npm install
3. Local dev:
   - npm run dev
4. Production build test:
   - npm run build
   - npm start

Vercel deployment checklist:
- Connect this repository to Vercel.
- In Vercel Project Settings → Environment Variables, add:
  - DISCOURSE_URL (server-only)
  - NEXT_PUBLIC_DISCOURSE_URL (optional; safe public URL)
  - DISCOURSE_API_KEY (server-only, if needed)
  - DISCOURSE_API_USERNAME (server-only, if needed)
- Deploy (Vercel will detect Next.js and use `next build`).

Notes:
- The project uses Incremental Static Regeneration (ISR) for the homepage (revalidate interval is in getStaticProps). Keep `DISCOURSE_URL` and any API keys server-only.
- For accurate "Top Players", the server-side aggregator should call Discourse's polls endpoints. You can add poll aggregation logic in `lib/discourse.ts`.
