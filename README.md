# Involves Stage Docs Monorepo

Monorepo contendo a documentação e o website da Involves Stage.

## 📁 Estrutura do Projeto

```
involves-stage-docs/
├── docs/          # Documentação da API usando Zudoku
├── website/       # Website principal usando Next.js
└── packages/      # Pacotes compartilhados (se houver)
```

## 🚀 Início Rápido

### Pré-requisitos

- Node.js >= 20.0.0
- pnpm >= 8.0.0

### Instalação

```bash
# Clone o repositório
git clone [url-do-repositorio]
cd involves-stage-docs

# Instale as dependências
pnpm install
```

### Desenvolvimento

```bash
# Rodar a documentação (Zudoku)
cd docs
pnpm dev

# Rodar o website (Next.js)
cd website
pnpm dev
```

## 📝 Scripts Disponíveis

### Scripts Globais (Raiz do Monorepo)

```bash
# Verificar código com ESLint
pnpm lint

# Corrigir problemas do ESLint automaticamente
pnpm lint --fix

# Verificar formatação com Prettier
pnpm format:check

# Formatar código com Prettier
pnpm format

# Executar todas as verificações
pnpm check

# Corrigir lint e formatação
pnpm fix
```

### Scripts por Projeto

#### Documentação (`/docs`)

```bash
cd docs

# Desenvolvimento
pnpm dev

# Build de produção
pnpm build

# Preview da build
pnpm preview
```

#### Website (`/website`)

```bash
cd website

# Desenvolvimento
pnpm dev

# Build de produção
pnpm build

# Iniciar servidor de produção
pnpm start
```

## 🛠️ Tecnologias Utilizadas

### Monorepo
- **pnpm** - Gerenciador de pacotes e workspaces
- **ESLint 9** - Linting com flat config
- **Prettier** - Formatação de código
- **TypeScript** - Tipagem estática

### Documentação (`/docs`)
- **Zudoku** - Framework para documentação de APIs
- **React** - Biblioteca UI
- **MDX** - Markdown com componentes React

### Website (`/website`)
- **Next.js** - Framework React
- **Tailwind CSS** - Utilitários CSS
- **shadcn/ui** - Componentes UI
- **Lucide React** - Ícones
- **i18n** - Internacionalização (pt, en, es, fr)

## 🌐 Internacionalização

O projeto suporta 4 idiomas:
- 🇧🇷 Português (pt)
- 🇺🇸 English (en)
- 🇪🇸 Español (es)
- 🇫🇷 Français (fr)

### Estrutura de Tradução

```
docs/pages/docs/
├── pt/
├── en/
├── es/
└── fr/

website/messages/
├── pt.json
├── en.json
├── es.json
└── fr.json
```

## 📋 Configuração do ESLint

O projeto usa ESLint 9 com flat config. A configuração está em `eslint.config.js` na raiz.

### Regras Principais
- TypeScript strict mode
- Prettier para formatação
- Next.js core web vitals
- Suporte para arquivos MDX (em desenvolvimento)

## 🎨 Formatação de Código

O Prettier está configurado para formatar automaticamente:
- TypeScript/JavaScript
- JSON
- Markdown/MDX
- CSS

## 🏗️ Estrutura de Arquivos

### Documentação (`/docs`)
```
docs/
├── apis/              # Especificações OpenAPI
├── config/            # Configurações do Zudoku
├── pages/docs/        # Páginas MDX da documentação
└── public/            # Assets estáticos
```

### Website (`/website`)
```
website/
├── src/
│   ├── components/    # Componentes React
│   ├── pages/         # Páginas Next.js
│   ├── styles/        # Estilos globais
│   └── lib/           # Utilitários
├── messages/          # Arquivos de tradução
└── public/            # Assets estáticos
```

## 🤝 Contribuindo

1. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
2. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
3. Push para a branch (`git push origin feature/MinhaFeature`)
4. Abra um Pull Request

### Padrões de Código

- Use TypeScript sempre que possível
- Siga as regras do ESLint
- Mantenha a formatação com Prettier
- Escreva mensagens de commit descritivas
- Adicione tipos apropriados

## 📄 Licença

[Adicione informações sobre a licença aqui]

## 👥 Time

[Adicione informações sobre o time/contatos aqui]

---

<p align="center">Feito com ❤️ pela equipe Involves Stage</p>
