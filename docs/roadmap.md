# Roadmap — Tecnología Rugby CUBA

Documento vivo: se actualiza a medida que se definen módulos y KPIs.

## Objetivo

Generar información valiosa para la toma de decisiones en el rugby del CUBA, comenzando por los planteles juveniles.

## Decisiones generales

- **Carga de datos:** la hacen principalmente los **jugadores**, a demanda, desde el celular.
- **App:** PWA (instalable desde el navegador, sin tiendas) con **notificaciones push** (Firebase Cloud Messaging) para pedir la carga de datos (ej.: "¿Fuiste al entrenamiento de hoy?", "Cargá tu peso del mes", "¿Cómo sigue tu lesión?").
- **Validación:** el staff puede validar o corregir lo que carga el jugador (en especial presentismo), para que los KPIs sean confiables.
- **Datos sensibles:** lesiones y datos corporales son datos de salud de menores (Ley 25.326). Acceso restringido por rol y consentimiento de los padres gestionado por el club.

## Roles y permisos

| Rol | Puede |
| --- | ----- |
| Jugador | Cargar y ver **solo sus propios** datos |
| Staff | Ver y validar datos de su división, incluidas lesiones y datos corporales |
| Coordinación de Rugby | Ver todo; reportes de todas las divisiones |
| Admin (Tecnología) | Gestionar usuarios, roles y configuración |

Los permisos se aplican con Firestore Security Rules (`firestore.rules`). El rol de cada usuario se guarda en su perfil (o como custom claim de Firebase Auth).

## Base común (previa a los módulos)

Entidades que reutilizan todos los módulos:

- **Temporadas**
- **Divisiones** (ej.: M15, M17, M19)
- **Equipos** dentro de cada división (ej.: A, B, C)
- **Jugadores** (pertenecen a una división por temporada; pueden jugar en distintos equipos)
- **Usuarios y roles** (jugador, staff, coordinación, admin)

Estructura: Temporada → División → Equipo.

Estado: _en definición_

## Módulos

Orden de implementación: base común → 1 → 2 → 3 → 4 → 5.

| # | Módulo | Qué registra | KPIs | Carga | Consulta | Estado |
| - | ------ | ------------ | ---- | ----- | -------- | ------ |
| 1 | Entrenamientos y presentismo | Sesiones (fecha, división, tipo) y asistencia | % asistencia por jugador / división / mes; cantidad de entrenamientos | Jugador (push), valida staff | Jugador (propio), staff, coordinación | Idea |
| 2 | Partidos | Partidos y equipo en el que jugó cada jugador (titular/suplente) | Partidos jugados por jugador y por equipo | Jugador, valida staff | Jugador (propio), staff, coordinación | Idea |
| 3 | Lesiones | Tipo, zona, gravedad, contexto (partido/entrenamiento), fecha de alta | Cantidad y tipo de lesiones; días de baja; lesiones por división | Jugador, completa/valida staff | Jugador (propio), staff, coordinación | Idea |
| 4 | Datos corporales | Mediciones periódicas: peso, altura, etc. | Evolución por jugador; promedios por división | Jugador (push periódico) | Jugador (propio), staff, coordinación | Idea |
| 5 | Rutinas de entrenamiento | Rutinas asignadas y su cumplimiento | % de cumplimiento por jugador | Staff asigna, jugador registra | Jugador (propio), staff, coordinación | Idea |

## Plantilla para un nuevo módulo

```md
### <Nombre del módulo>

- **Objetivo:** qué decisión ayuda a tomar
- **KPIs:** qué se mide y cómo se calcula
- **Carga de datos:** quién y con qué frecuencia
- **Consulta:** quién lo ve y en qué formato (tabla, gráfico, reporte)
- **Datos necesarios:** entidades y campos
- **Estado:** idea / en definición / en desarrollo / en producción
```
