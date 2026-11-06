# web.app — Cuba Rugby

Next.js + TypeScript + Supabase, desplegado en Vercel.

## Setup para nuevos desarrolladores

1. Pide acceso a la org `Cuba-Rugby-tech` en GitHub y a los proyectos de Supabase y Vercel.
2. Clona el repo e instala dependencias:
   ```bash
   git clone https://github.com/Cuba-Rugby-tech/web.app.git
   cd web.app
   npm install
   ```
3. Crea tu `.env.local` a partir de `.env.example` y completa los valores (pídelos al equipo).
4. Arranca: `npm run dev` → http://localhost:3000

## Flujo de trabajo

1. Actualiza y crea tu rama: `git fetch origin main && git checkout -b feat/mi-tarea origin/main`
2. Trabaja (con Claude Code; las reglas del proyecto están en `CLAUDE.md`).
3. Verifica: `npm run lint && npm run typecheck`
4. Push de tu rama y abre un Pull Request hacia `main`.
5. Otro dev revisa y aprueba; el CI debe pasar. Luego merge.

Vercel genera un preview por cada PR y despliega a producción al mergear en `main`.
