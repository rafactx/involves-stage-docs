<p align="right">
  🇧🇷 <a href="./README.pt.md">Português</a> •
  🇺🇸 <a href="./README.md">English</a> •
  🇫🇷 <a href="./README.fr.md">Français</a>
</p>

![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)

# 🧩 Involves Stage Docs · Monorepo

Repositorio unificado que contiene:

- 📘 Documentación de la API (`/docs`) con [Zudoku](https://zudoku.dev)
- 🌐 Sitio web oficial (`/website`) construido con [Next.js 15](https://nextjs.org)

---

## ⚡️ Comenzar Rápido

### Requisitos previos

- Node.js `>= 20`
- pnpm `>= 8`

```bash
git clone https://github.com/TU-USUARIO/involves-stage-docs
cd involves-stage-docs && pnpm install
```

### Desarrollo

```bash
# Ejecutar la documentación (Zudoku)
cd docs && pnpm dev

# Ejecutar el sitio web (Next.js)
cd website && pnpm dev
```

---

## 📁 Estructura del Proyecto

```
involves-stage-docs/
├── docs/        → Documentación técnica (Zudoku)
├── website/     → Sitio web principal (Next.js)
└── packages/    → Paquetes compartidos (si aplica)
```

### `/docs`

* `apis/` — Especificaciones OpenAPI
* `config/` — Configuración de Zudoku
* `pages/docs/` — Archivos `.mdx` por idioma
* `public/` — Archivos estáticos

### `/website`

* `src/components/` — Componentes de React
* `src/pages/` — Rutas de Next.js
* `src/styles/` — Estilos de Tailwind y temas
* `messages/` — Archivos de traducción
* `public/` — Archivos estáticos

---

## 🌍 Internacionalización

Idiomas disponibles:

* 🇧🇷 `pt`
* 🇺🇸 `en`
* 🇪🇸 `es`
* 🇫🇷 `fr`

```bash
# Traducciones de la documentación
/docs/pages/docs/{pt,en,es,fr}/...

# Traducciones del sitio web
/website/messages/{pt,en,es,fr}.json
```

---

## 🛠️ Tecnologías Utilizadas

### Monorepo

* [pnpm Workspaces](https://pnpm.io/workspaces)
* ESLint 9 (flat config) + Prettier
* TypeScript (modo estricto)
* Husky + Lint-staged (opcional)

### Documentación

* [Zudoku](https://zudoku.dev)
* React + MDX

### Sitio Web

* Next.js 15 (App Router)
* Tailwind CSS + Shadcn UI
* Íconos `lucide-react` + animaciones con Framer Motion
* `next-intl` para soporte multilenguaje

---

## 🧪 Scripts Globales

```bash
pnpm lint         # Verifica el código con ESLint
pnpm lint --fix   # Corrige problemas automáticamente
pnpm format       # Formatea con Prettier
pnpm check        # Lint + verificación de formato
pnpm fix          # Lint + formato con corrección
```

---

## 🤝 Contribuir

```bash
# Crear nueva rama de funcionalidad
git checkout -b feature/mi-funcionalidad

# Commit con mensaje semántico
git commit -m "feat: agrega mi funcionalidad"

# Push al remoto
git push origin feature/mi-funcionalidad
```

### Buenas Prácticas

* Usar TypeScript por defecto
* Seguir las reglas de ESLint y Prettier
* Escribir commits semánticos ([Commitizen](https://commitizen-tools.github.io/cz-cli/))
* Mantener una organización clara de componentes y utilidades

---

## 📄 Licencia

[Agrega aquí el tipo de licencia, por ejemplo: MIT]

---

<p align="center"><strong>Hecho con ❤️ por el equipo de Involves Stage</strong></p>
<p align="right">
  🇧🇷 <a href="./README.pt.md">Português</a> •
  🇺🇸 <a href="./README.md">English</a> •
  🇫🇷 <a href="./README.fr.md">Français</a>
</p>

# 🧩 Involves Stage Docs · Monorepo

Repositorio unificado que contiene:

- 📘 Documentación de la API (`/docs`) con [Zudoku](https://zudoku.dev)
- 🌐 Sitio web oficial (`/website`) construido con [Next.js 15](https://nextjs.org)

---

## ⚡️ Comenzar Rápido

### Requisitos previos

- Node.js `>= 20`
- pnpm `>= 8`

```bash
git clone https://github.com/TU-USUARIO/involves-stage-docs
cd involves-stage-docs && pnpm install
```

### Desarrollo

```bash
# Ejecutar la documentación (Zudoku)
cd docs && pnpm dev

# Ejecutar el sitio web (Next.js)
cd website && pnpm dev
```

---

## 📁 Estructura del Proyecto

```
involves-stage-docs/
├── docs/        → Documentación técnica (Zudoku)
├── website/     → Sitio web principal (Next.js)
└── packages/    → Paquetes compartidos (si aplica)
```

### `/docs`

* `apis/` — Especificaciones OpenAPI
* `config/` — Configuración de Zudoku
* `pages/docs/` — Archivos `.mdx` por idioma
* `public/` — Archivos estáticos

### `/website`

* `src/components/` — Componentes de React
* `src/pages/` — Rutas de Next.js
* `src/styles/` — Estilos de Tailwind y temas
* `messages/` — Archivos de traducción
* `public/` — Archivos estáticos

---

## 🌍 Internacionalización

Idiomas disponibles:

* 🇧🇷 `pt`
* 🇺🇸 `en`
* 🇪🇸 `es`
* 🇫🇷 `fr`

```bash
# Traducciones de la documentación
/docs/pages/docs/{pt,en,es,fr}/...

# Traducciones del sitio web
/website/messages/{pt,en,es,fr}.json
```

---

## 🛠️ Tecnologías Utilizadas

### Monorepo

* [pnpm Workspaces](https://pnpm.io/workspaces)
* ESLint 9 (flat config) + Prettier
* TypeScript (modo estricto)
* Husky + Lint-staged (opcional)

### Documentación

* [Zudoku](https://zudoku.dev)
* React + MDX

### Sitio Web

* Next.js 15 (App Router)
* Tailwind CSS + Shadcn UI
* Íconos `lucide-react` + animaciones con Framer Motion
* `next-intl` para soporte multilenguaje

---

## 🧪 Scripts Globales

```bash
pnpm lint         # Verifica el código con ESLint
pnpm lint --fix   # Corrige problemas automáticamente
pnpm format       # Formatea con Prettier
pnpm check        # Lint + verificación de formato
pnpm fix          # Lint + formato con corrección
```

---

## 🤝 Contribuir

```bash
# Crear nueva rama de funcionalidad
git checkout -b feature/mi-funcionalidad

# Commit con mensaje semántico
git commit -m "feat: agrega mi funcionalidad"

# Push al remoto
git push origin feature/mi-funcionalidad
```

### Buenas Prácticas

* Usar TypeScript por defecto
* Seguir las reglas de ESLint y Prettier
* Escribir commits semánticos ([Commitizen](https://commitizen-tools.github.io/cz-cli/))
* Mantener una organización clara de componentes y utilidades

---

## 📄 Licencia

Este proyecto está licenciado bajo la [Licencia MIT](./LICENSE).

---

<p align="center"><strong>Hecho con ❤️ por el equipo de Involves Stage</strong></p>
