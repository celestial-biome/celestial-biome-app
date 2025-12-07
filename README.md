# Celestial Biome Web App

Next.js + TypeScript starter for the Celestial Biome unified platform. The UI mirrors the initial wireframes (dashboards,
activity timeline, AI chat, and admin checklist) and is pre-wired for TanStack Query and Supabase.

> **Node version**: Next.js 14 requires Node.js **>= 18.17**. Use the included `.nvmrc` (18.20.3) to align local versions:
> ```bash
> nvm install
> nvm use
> ```

## Stack
- **Next.js 14 (App Router)** with **React 18** and **TypeScript 5.6**
- **Tailwind CSS 3.4** for styling
- **TanStack Query 5** for client-side data fetching
- **Supabase JS 2.45** for authentication and storage (client scaffolded)

## Getting started
<<<<<<< HEAD
1. Ensure you're using Node 18 (recommended: `nvm use` to read `.nvmrc`).
2. Install dependencies (network access to npm is required):
   ```bash
   npm install
   ```
3. Copy the environment template and add your Supabase values:
   ```bash
   cp .env.example .env.local
   # set NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_API_URL
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) to see the starter dashboard.

## Running with Docker Compose (frontend + backend)
The repository includes a minimal Fastify backend and a Next.js frontend wired together via `docker-compose.yml`.

```bash
docker compose up --build
```

This starts:
- **frontend** on [http://localhost:3000](http://localhost:3000) with live reload.
- **backend** on [http://localhost:4000](http://localhost:4000) exposing `/health` and `/api/status`.

Environment variables (`NEXT_PUBLIC_*`) are passed through from your host to the frontend container. Update `.env.example` as
needed and export them before running `docker compose`.

## Backend service
The backend is a lightweight Fastify server that reports health and placeholder platform metadata.

- Source: `backend/src/index.js`
- Local dev: `npm install && npm run dev` (inside `backend/`)
- Endpoints: `/health` (liveness) and `/api/status` (environment + feature hints)


## Project layout
- `src/app/layout.tsx` — global layout, providers, and navigation shell.
- `src/app/page.tsx` — landing dashboard matching the UX sketches.
- `src/components/` — composable UI cards (timeline, chat preview, logs, setup checklist).
- `src/lib/supabaseClient.ts` — browser client factory and React context.

## Notes
- The Supabase client initializes only when `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set. Until
  then, the UI remains in preview mode.
- Tailwind utilities, gradients, and badges are defined in `src/app/globals.css` along with the shared color palette.
