<p align="right">
  🇺🇸 <a href="./README.md">English</a> •
  🇪🇸 <a href="./README.es.md">Español</a> •
  🇫🇷 <a href="./README.fr.md">Français</a>
</p>

# 🧩 Involves Stage Docs · Monorepo

Repositório unificado contendo:

- 📘 Documentação da API (`/docs`) com [Zudoku](https://zudoku.dev)
- 🌐 Website oficial (`/website`) com [Next.js 15](https://nextjs.org)

---

## ⚡️ Início Rápido

### Pré-requisitos

- Node.js `>= 20`
- pnpm `>= 8`

```bash
git clone https://github.com/SEU-USUARIO/involves-stage-docs
cd involves-stage-docs && pnpm install
````

### Desenvolvimento

```bash
# Rodar a documentação (Zudoku)
cd docs && pnpm dev

# Rodar o website (Next.js)
cd website && pnpm dev
```

---

## 📁 Estrutura do Projeto

```
involves-stage-docs/
├── docs/        → Documentação técnica (Zudoku)
├── website/     → Website institucional (Next.js)
└── packages/    → Pacotes compartilhados (se houver)
```

### `/docs`

* `apis/` — Especificações OpenAPI
* `config/` — Configuração do Zudoku
* `pages/docs/` — Arquivos `.mdx` por idioma
* `public/` — Assets estáticos

### `/website`

* `src/components/` — Componentes React
* `src/pages/` — Rotas Next.js
* `src/styles/` — Tailwind e temas
* `messages/` — Arquivos de tradução
* `public/` — Assets estáticos

---

## 🌍 Internacionalização

Idiomas disponíveis:

* 🇧🇷 `pt`
* 🇺🇸 `en`
* 🇪🇸 `es`
* 🇫🇷 `fr`

```bash
# Traduções da documentação
/docs/pages/docs/{pt,en,es,fr}/...

# Traduções do site
/website/messages/{pt,en,es,fr}.json
```

---

## 🛠️ Tecnologias

### Monorepo

* [pnpm Workspaces](https://pnpm.io/workspaces)
* ESLint 9 (flat config) + Prettier
* TypeScript (modo estrito)
* Husky + Lint-staged (opcional)

### Documentação

* [Zudoku](https://zudoku.dev)
* React + MDX

### Website

* Next.js 15 (App Router)
* Tailwind CSS + Shadcn UI
* Ícones `lucide-react` + animações com Framer Motion
* `next-intl` para suporte multilíngue

---

## 🧪 Scripts Globais

```bash
pnpm lint         # Verifica o código com ESLint
pnpm lint --fix   # Corrige problemas automaticamente
pnpm format       # Formata com Prettier
pnpm check        # Lint + Prettier
pnpm fix          # Lint + Prettier com correções
```

---

## 🤝 Contribuindo

```bash
# Criar nova branch de feature
git checkout -b feature/minha-feature

# Commit com mensagem semântica
git commit -m "feat: adiciona minha feature"

# Enviar para o remoto
git push origin feature/minha-feature
```

### Boas Práticas

* Use TypeScript sempre que possível
* Siga as regras do ESLint e Prettier
* Use mensagens de commit semânticas ([Commitizen](https://commitizen-tools.github.io/cz-cli/))
* Mantenha a organização dos componentes e utilitários

---

## 📄 Licença

\[Adicione o tipo de licença aqui, ex: MIT]

---
