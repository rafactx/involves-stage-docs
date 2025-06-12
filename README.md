<p align="right">
  🇧🇷 <a href="./README.pt.md">Português</a> •
  🇪🇸 <a href="./README.es.md">Español</a> •
  🇫🇷 <a href="./README.fr.md">Français</a>
</p>

![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)

# 🧩 Involves Stage Docs · Monorepo

Unified repository containing:

- 📘 API Documentation (`/docs`) using [Zudoku](https://zudoku.dev)
- 🌐 Official Website (`/website`) built with [Next.js 15](https://nextjs.org)

---

## ⚡️ Quick Start

### Prerequisites

- Node.js `>= 20`
- pnpm `>= 8`

```bash
git clone https://github.com/YOUR-USERNAME/involves-stage-docs
cd involves-stage-docs && pnpm install
```

### Development

```bash
# Run the documentation (Zudoku)
cd docs && pnpm dev

# Run the website (Next.js)
cd website && pnpm dev
```

---

## 📁 Project Structure

```
involves-stage-docs/
├── docs/        → API documentation (Zudoku)
├── website/     → Main website (Next.js)
└── packages/    → Shared packages (if any)
```

### `/docs`

* `apis/` — OpenAPI specifications
* `config/` — Zudoku configuration
* `pages/docs/` — `.mdx` documentation files (by language)
* `public/` — Static assets

### `/website`

* `src/components/` — React components
* `src/pages/` — Next.js routes
* `src/styles/` — Tailwind and theme styles
* `messages/` — Translation files
* `public/` — Static assets

---

## 🌍 Internationalization

Supported languages:

* 🇧🇷 `pt`
* 🇺🇸 `en`
* 🇪🇸 `es`
* 🇫🇷 `fr`

```bash
# Documentation translations
/docs/pages/docs/{pt,en,es,fr}/...

# Website translations
/website/messages/{pt,en,es,fr}.json
```

---

## 🛠️ Tech Stack

### Monorepo

* [pnpm Workspaces](https://pnpm.io/workspaces)
* ESLint 9 (flat config) + Prettier
* TypeScript (strict mode)
* Husky + Lint-staged (optional)

### Docs

* [Zudoku](https://zudoku.dev)
* React + MDX

### Website

* Next.js 15 (App Router)
* Tailwind CSS + Shadcn UI
* `lucide-react` icons + Framer Motion animations
* `next-intl` for i18n support

---

## 🧪 Global Scripts

```bash
pnpm lint         # Check code with ESLint
pnpm lint --fix   # Auto-fix lint issues
pnpm format       # Format with Prettier
pnpm check        # Lint + format check
pnpm fix          # Lint + format with fix
```

---

## 🤝 Contributing

```bash
# Create a new feature branch
git checkout -b feature/your-feature

# Commit with semantic message
git commit -m "feat: add your feature"

# Push to remote
git push origin feature/your-feature
```

### Code Guidelines

* Use TypeScript by default
* Follow ESLint + Prettier rules
* Write semantic commits ([Commitizen](https://commitizen-tools.github.io/cz-cli/))
* Keep component and utility organization clean

---

## 📄 License

[Add your license type here, e.g. MIT]

---

<p align="center"><strong>Made with ❤️ by the Involves Stage team</strong></p>
