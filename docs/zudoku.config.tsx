import type { ZudokuConfig } from 'zudoku';
import { LanguageSelector } from './config/LanguageSelector';
import redirects from './config/redirects';
import { darkTheme, lightTheme } from './config/theme';

const config: ZudokuConfig = {
  theme: {
    light: lightTheme,
    dark: darkTheme,
  },

  page: {
    logo: {
      src: {
        light: '/logo-involves-dark.png',
        dark: '/logo-involves-light.png',
      },
      alt: 'Involves Stage',
      width: '150px',
    },
    footer: {
      position: 'center',
      columns: [
        {
          title: 'Produto',
          links: [
            { label: 'Funcionalidades', href: '/features' },
            { label: 'Preços', href: '/pricing' },
            { label: 'Documentação', href: '/docs' },
          ],
        },
        {
          title: 'Empresa',
          links: [
            { label: 'Sobre Nós', href: 'https://involves.com/quem-somos/' },
            { label: 'Blog', href: 'https://club.involves.com/' },
            { label: 'Carreiras', href: 'https://involves.gupy.io/' },
          ],
        },
        {
          title: 'Recursos',
          links: [{ label: 'Suporte', href: 'https://help.involves.com/hc/pt-br' }],
        },
      ],
      social: [
        { icon: 'linkedin', href: 'https://linkedin.com/company/involves' },
        { icon: 'instagram', href: 'https://instagram.com/ainvolves/' },
        { icon: 'youtube', href: 'https://youtube.com/@InvolvesOficial' },
      ],
      logo: {
        src: {
          light: '/logo-involves-dark.png',
          dark: '/logo-involves-light.png',
        },
        alt: 'Logo da Involves',
        width: '100px',
      },
      copyright: `© ${new Date().getFullYear()} Involves. Todos os direitos reservados.`,
    },
  },

  slots: {
    'head-navigation-end': () => <LanguageSelector />,
  },

  navigation: [
    {
      type: 'category',
      label: 'Visão Geral (PT)',
      icon: 'book',
      items: [
        { type: 'doc', file: 'docs/pt/intro', label: 'Introdução' },
        { type: 'doc', file: 'docs/pt/auth-ambiente' },
        { type: 'doc', file: 'docs/pt/boas-praticas' },
        { type: 'doc', file: 'docs/pt/exemplos-api-aux' },
        { type: 'doc', file: 'docs/pt/navegacao-dados' },
        { type: 'doc', file: 'docs/pt/respostas-erros' },
      ],
    },
    {
      type: 'link',
      label: 'API Reference',
      to: '/api',
      icon: 'code',
    },
  ],

  redirects,

  apis: {
    type: 'file',
    input: './apis/openapi-pt-br.json',
    path: '/api',
    options: {
      examplesLanguage: 'bash',
      disablePlayground: false,
      disableSidecar: false,
      showVersionSelect: 'if-available',
      expandAllTags: false,
    },
  },

  docs: {
    files: '/pages/**/*.{md,mdx}',
  },

  plugins: [],
};

export default config;
