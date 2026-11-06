# Onboarding — Nuevos desarrolladores

Guía para sumarse al proyecto web.app (Tecnología Rugby CUBA) trabajando con Claude Code.

## Antes de empezar (lo hace un admin)

1. Invitarte a la organización `Cuba-Rugby-tech` en GitHub con permiso **Write** sobre el repo.
2. Pasarte por un canal privado los valores de Firebase para tu `.env.local` (ver `.env.example`).

## Pasos

1. Aceptá la invitación a la organización `Cuba-Rugby-tech` en GitHub.
2. Necesitás una cuenta de Claude con acceso a Claude Code (plan Pro, Max o Team).
3. Elegí cómo trabajar:

### Opción A — En la web (claude.ai/code)

- Conectá tu GitHub cuando te lo pida y seleccioná el repo `Cuba-Rugby-tech/web.app`.
- Creá un entorno llamado `web.app` con este setup script (o pedíselo a Claude: "creá un entorno para web.app con setup script npm ci"):

  ```bash
  if [ -d web.app ]; then (cd web.app && npm ci); fi
  ```

- Abrí las sesiones nuevas de este proyecto con ese entorno.

### Opción B — En tu computadora

```bash
npm install -g @anthropic-ai/claude-code
git clone https://github.com/Cuba-Rugby-tech/web.app.git
cd web.app && npm install
cp .env.example .env.local   # completá con los valores que te pasemos
claude
```

4. Leé `README.md`, `CLAUDE.md` y `docs/roadmap.md`. Claude los lee automáticamente y ya conoce las reglas del proyecto.

## Flujo de trabajo

- Una rama por tarea (`feat/...`, `fix/...`, `chore/...`, `docs/...`), creada desde `main` actualizado.
- **Nunca** push directo a `main`.
- Antes del PR: `npm run lint && npm run typecheck`.
- Abrí un PR completando la plantilla; otro dev lo revisa (puede usar `/code-review` en Claude) y se mergea.
- Nunca subas `.env` ni claves al repo.
