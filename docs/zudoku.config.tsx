import type { ZudokuConfig } from 'zudoku';
import { LanguageSelector } from './config/LanguageSelector';
import redirects from './config/redirects';
import { generateSidebarForLanguage } from './config/sidebar';
import { darkTheme, lightTheme } from './config/theme';

// Main Zudoku configuration
const config: ZudokuConfig = {
  // Theme tokens
  theme: {
    light: lightTheme,
    dark: darkTheme,
  },

  // Page-level settings: logo and footer
  page: {
    logo: {
      src: { light: '/logo-involves-dark.png', dark: '/logo-involves-light.png' },
      alt: 'Involves Stage',
      width: '150px',
    },
    footer: {
      position: 'center', // Horizontal alignment: start | center | end
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
        src: { light: '/logo-involves-dark.png', dark: '/logo-involves-light.png' },
        alt: 'Logo da Involves',
        width: '100px',
      },
      copyright: `© ${new Date().getFullYear()} Involves. Todos os direitos reservados.`,
    },
  },

  // Inject custom slot after main nav
  slots: {
    'head-navigation-end': () => <LanguageSelector />,
  },

  topNavigation: [
    { id: 'docs', label: 'Documentação' },
    { id: 'api', label: 'API Reference' },
  ],

  sidebar: {
    docs: generateSidebarForLanguage('pt'),
  },

  // URL redirects
  redirects,

  // API reference settings
  apis: {
    type: 'file',
    input: './apis/openapi.yaml',
    navigationId: 'api',
  },

  // Documentation sources
  docs: {
    files: '/pages/**/*.{md,mdx}',
  },

  // Plugin hooks
  plugins: [],
};
console.log('SIDEBAR DEBUG:', generateSidebarForLanguage('pt'));

export default config;
