// @ts-check
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
          // Elimina esta línea para quitar el botón "Editar esta página"
          // editUrl: 'https://github.com/carloszevallostrigoso/rizoma-pe/tree/main/',
          
          // Agrega esta propiedad para quitar la navegación de página (siguiente/anterior)
          docItem: {
            pagination: false,
          },
        },
        blog: false,
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
        {
          href: 'https://github.com/carloszevallostrigoso/rizoma-pe',
          label: 'GitHub',
          position: 'right',
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
              to: '/docs/introduccion',
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
