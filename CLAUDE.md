# web.app

Proyecto de Cuba Rugby. Equipo de 2-3 desarrolladores, todos trabajando con Claude Code.

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Supabase (Postgres + Auth) vía `@supabase/ssr`
- Deploy: Vercel (preview por PR, producción desde `main`)

## Comandos

- `npm run dev` — servidor local (http://localhost:3000)
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript sin emitir
- `npm run build` — build de producción

Antes de dar una tarea por terminada: `npm run lint && npm run typecheck`.

## Estructura

- `src/app/` — rutas (App Router)
- `src/components/` — componentes reutilizables
- `src/lib/supabase/client.ts` — Supabase en Client Components
- `src/lib/supabase/server.ts` — Supabase en Server Components / Actions / Route Handlers
- `src/lib/` — utilidades

## Reglas de Git (obligatorias)

- **Nunca** hacer push a `main`. Todo cambio entra por Pull Request con 1 aprobación.
- Una rama por tarea, creada desde `main` actualizado: `git fetch origin main && git checkout -b feat/<nombre> origin/main`
- Prefijos de rama: `feat/`, `fix/`, `chore/`, `docs/`
- Commits cortos en imperativo, estilo Conventional Commits: `feat: agrega login`, `fix: corrige fecha en partidos`
- PRs pequeños y enfocados en una sola cosa; completar la plantilla de PR.
- Sin `--force` en ramas compartidas.

## Convenciones de código

- TypeScript estricto; evitar `any`.
- Server Components por defecto; `"use client"` solo cuando haga falta interactividad.
- Usar el alias `@/` para imports desde `src/`.
- Componentes en PascalCase (`PlayerCard.tsx`); utilidades en camelCase.
- Estilos con clases de Tailwind; nada de CSS suelto salvo `globals.css`.

## Seguridad

- Nunca leer, imprimir ni commitear `.env` / `.env.local`. Las variables necesarias están en `.env.example`.
- Solo la `anon key` de Supabase va en el frontend. La `service_role` key nunca va al cliente.
- Toda tabla de Supabase debe tener Row Level Security (RLS) activado.
