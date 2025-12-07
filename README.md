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
1. Ensure you're using Node 18 (recommended: `nvm use` to read `.nvmrc`).
2. Install dependencies (network access to npm is required):
   ```bash
   npm install
   ```
3. Copy the environment template and add your Supabase values:
   ```bash
   cp .env.example .env.local
   # set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) to see the starter dashboard.

## Project layout
- `src/app/layout.tsx` — global layout, providers, and navigation shell.
- `src/app/page.tsx` — landing dashboard matching the UX sketches.
- `src/components/` — composable UI cards (timeline, chat preview, logs, setup checklist).
- `src/lib/supabaseClient.ts` — browser client factory and React context.

## Notes
- The Supabase client initializes only when `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set. Until
  then, the UI remains in preview mode.
- Tailwind utilities, gradients, and badges are defined in `src/app/globals.css` along with the shared color palette.
