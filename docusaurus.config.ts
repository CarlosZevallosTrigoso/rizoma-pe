import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Rizoma PE',
  tagline: 'Documentación y Guías para el Ecosistema Rizoma',
  favicon: 'img/favicon.ico',

  url: 'https://carloszevallostrigoso.github.io',
  baseUrl: '/rizoma-pe/',

  organizationName: 'carloszevallostrigoso',
  projectName: 'rizoma-pe',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // ⭐ Nuevo: Esto activa el modo de solo documentos
          // editUrl: 'https://github.com/carloszevallostrigoso/rizoma-pe/tree/main/',
        },
        blog: false, // Desactiva el plugin de blog
        pages: false, // ⭐ Nuevo: Desactiva la página src/pages
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '',
      logo: {
        src: 'img/rizomalogo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'introduccion',
          position: 'left',
          label: 'Documentación',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introducción',
              // ⭐ Importante: La ruta debe ser '/' si tu docs/intro.md es la página de inicio
              // De lo contrario, usa el nombre del doc, por ejemplo: '/introduccion'
              // Verifica tu archivo `docs/introduccion.md` para confirmarlo.
              to: '/',
            },
          ],
        },
        {
          title: 'Comunidad',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/carlos-alberto-zevallos-trigoso/',
            },
          ],
        },
        {
          title: 'Más',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/carloszevallostrigoso/rizoma-pe',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Rizoma PE. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
