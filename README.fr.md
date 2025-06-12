<p align="right">
  🇧🇷 <a href="./README.pt.md">Português</a> •
  🇺🇸 <a href="./README.md">English</a> •
  🇪🇸 <a href="./README.es.md">Español</a>
</p>

# 🧩 Involves Stage Docs · Monorepo

Dépôt unifié contenant :

- 📘 Documentation de l'API (`/docs`) avec [Zudoku](https://zudoku.dev)
- 🌐 Site officiel (`/website`) basé sur [Next.js 15](https://nextjs.org)

---

## ⚡️ Démarrage rapide

### Prérequis

- Node.js `>= 20`
- pnpm `>= 8`

```bash
git clone https://github.com/VOTRE-UTILISATEUR/involves-stage-docs
cd involves-stage-docs && pnpm install
```

### Développement

```bash
# Lancer la documentation (Zudoku)
cd docs && pnpm dev

# Lancer le site (Next.js)
cd website && pnpm dev
```

---

## 📁 Structure du projet

```
involves-stage-docs/
├── docs/        → Documentation technique (Zudoku)
├── website/     → Site principal (Next.js)
└── packages/    → Packages partagés (si applicable)
```

### `/docs`

* `apis/` — Spécifications OpenAPI
* `config/` — Configuration Zudoku
* `pages/docs/` — Fichiers `.mdx` multilingues
* `public/` — Fichiers statiques

### `/website`

* `src/components/` — Composants React
* `src/pages/` — Pages Next.js
* `src/styles/` — Styles Tailwind & thèmes
* `messages/` — Fichiers de traduction
* `public/` — Fichiers statiques

---

## 🌍 Internationalisation

Langues prises en charge :

* 🇧🇷 `pt`
* 🇺🇸 `en`
* 🇪🇸 `es`
* 🇫🇷 `fr`

```bash
# Traductions de la documentation
/docs/pages/docs/{pt,en,es,fr}/...

# Traductions du site
/website/messages/{pt,en,es,fr}.json
```

---

## 🛠️ Technologies utilisées

### Monorepo

* [pnpm Workspaces](https://pnpm.io/workspaces)
* ESLint 9 (flat config) + Prettier
* TypeScript (mode strict)
* Husky + Lint-staged (optionnel)

### Documentation

* [Zudoku](https://zudoku.dev)
* React + MDX

### Site Web

* Next.js 15 (App Router)
* Tailwind CSS + Shadcn UI
* Icônes `lucide-react` + animations Framer Motion
* `next-intl` pour la prise en charge multilingue

---

## 🧪 Scripts globaux

```bash
pnpm lint         # Vérifier le code avec ESLint
pnpm lint --fix   # Corriger automatiquement les erreurs
pnpm format       # Formater avec Prettier
pnpm check        # Vérification combinée lint + format
pnpm fix          # Correction automatique lint + format
```

---

## 🤝 Contribuer

```bash
# Créer une nouvelle branche de fonctionnalité
git checkout -b feature/ma-fonctionnalite

# Commit avec message sémantique
git commit -m "feat: ajout de ma fonctionnalité"

# Pousser la branche
git push origin feature/ma-fonctionnalite
```

### Bonnes pratiques

* Utilisez TypeScript par défaut
* Respectez les règles ESLint + Prettier
* Utilisez des messages de commit sémantiques ([Commitizen](https://commitizen-tools.github.io/cz-cli/))
* Organisez les composants et utilitaires de manière claire

---

## 📄 Licence

[Ajoutez ici le type de licence, ex : MIT]

---

<p align="center"><strong>Fait avec ❤️ par l’équipe Involves Stage</strong></p>
