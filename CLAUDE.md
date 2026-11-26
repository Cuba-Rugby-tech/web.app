# web.app

Proyecto del departamento de Tecnología de la capitanía de Rugby del CUBA. Equipo de 2-3 desarrolladores, todos trabajando con Claude Code.

## Contexto del proyecto

- **Objetivo:** construir herramientas tecnológicas que generen información valiosa para la toma de decisiones en el rugby del CUBA.
- **Foco inicial:** planteles juveniles.
- **Horizonte:** proyecto a largo plazo; el alcance general aún no está cerrado y se define módulo a módulo.
- **Enfoque modular:** cada funcionalidad es un módulo independiente que se suma de forma incremental. El roadmap, los módulos y los KPIs viven en `docs/roadmap.md`.
- Al proponer o implementar algo, priorizar que los datos sirvan para medir KPIs y tomar decisiones, no solo para registrar información.

### Cómo se agrega un módulo

1. Definirlo en `docs/roadmap.md` (objetivo, KPIs, quién carga y quién consulta los datos).
2. Rutas en `src/app/<modulo>/` y componentes propios en `src/components/<modulo>/`.
3. Colecciones en Firestore protegidas con Security Rules (`firestore.rules`), reutilizando la base común (planteles, jugadores, temporadas, usuarios) en lugar de duplicarla.
4. Un PR por módulo o por parte del módulo; nunca mezclar módulos en un mismo PR.

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Firebase: Auth (login), Firestore (base de datos NoSQL) y Cloud Messaging (push)
- Deploy: Firebase Hosting, proyecto `cubaglogin`, plan Spark (sin servidor). Preview por PR y producción desde `main` vía GitHub Actions (`.github/workflows/deploy.yml`)

## Comandos

- `npm run dev` — servidor local (http://localhost:3000)
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript sin emitir
- `npm run build` — build de producción

Antes de dar una tarea por terminada: `npm run lint && npm run typecheck`.

## Estructura

- `src/app/` — rutas (App Router)
- `src/components/` — componentes reutilizables
- `src/lib/firebase/client.ts` — Firebase en el navegador (`auth`, `db`)
- `firestore.rules` — Security Rules de Firestore (por defecto todo denegado)
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
- La app es una **exportación estática** (`output: "export"`): no usar API Routes, Server Actions, middleware, `cookies()`/`headers()` ni rutas dinámicas sin `generateStaticParams`.
- Los datos de Firestore y el login se usan desde Client Components (`"use client"`) con `src/lib/firebase/client.ts`. Las páginas pueden ser Server Components solo para contenido estático.
- Usar el alias `@/` para imports desde `src/`.
- Componentes en PascalCase (`PlayerCard.tsx`); utilidades en camelCase.
- Estilos con clases de Tailwind; nada de CSS suelto salvo `globals.css`.

## Seguridad

- Nunca leer, imprimir ni commitear `.env` / `.env.local`. Las variables necesarias están en `.env.example`.
- La app solo usa las variables `NEXT_PUBLIC_FIREBASE_*` (públicas). Nunca commitear claves de service accounts (`*firebase-adminsdk*.json`).
- Toda colección de Firestore debe tener reglas explícitas en `firestore.rules`; nunca dejar reglas abiertas (`allow read, write: if true`).
- Las Security Rules son la única barrera de seguridad (no hay servidor): toda validación de permisos va en `firestore.rules`.

## Firestore y KPIs

- Firestore es NoSQL: no hay JOINs ni agregaciones complejas.
- Los KPIs (ej.: % de asistencia por división y mes) se guardan como totales precalculados (se actualizan al escribir el dato; Cloud Functions no está disponible en Spark), no se calculan recorriendo todas las colecciones.
- Diseñar las colecciones pensando en las consultas que se van a hacer.
