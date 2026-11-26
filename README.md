# web.app — Cuba Rugby

Next.js + TypeScript + Firebase (Auth, Firestore, Cloud Messaging), desplegado en Firebase Hosting (proyecto `cubaglogin`).

## Setup para nuevos desarrolladores

1. Guía completa (incluye Claude Code): [`docs/onboarding.md`](docs/onboarding.md). Pide acceso a la org `Cuba-Rugby-tech` en GitHub y al proyecto de Firebase `cubaglogin`.
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

Cada PR genera una URL de preview (comentada en el PR) y al mergear en `main` se despliega a producción, vía GitHub Actions.

## Configuración del deploy (una sola vez, la hace un admin)

En GitHub → repo → Settings → Secrets and variables → Actions:

1. **Variables** (pestaña *Variables*): cargar las 6 `NEXT_PUBLIC_FIREBASE_*` de `.env.example` con los valores de la Web app de Firebase.
2. **Secret** `FIREBASE_SERVICE_ACCOUNT`: el JSON completo de una service account de Google Cloud (proyecto `cubaglogin`) con los roles *Firebase Hosting Admin*, *API Keys Viewer* y *Cloud Run Viewer*.

## Reglas de Firestore

Se despliegan a mano con la CLI de Firebase:

```bash
npx firebase-tools login
npx firebase-tools deploy --only firestore:rules
```
