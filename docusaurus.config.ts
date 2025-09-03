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
          sidebarPath: './sidebars.ts', // ✅ ¡CORREGIDO!
          editUrl:
            'https://github.com/carloszevallostrigoso/rizoma-pe/tree/main/',
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
      title: 'Rizoma PE',
      logo: {
        alt: 'Logo de Rizoma PE',
        src: 'img/logo.svg',
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
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
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
      copyright: `Copyright © ${new Date().getFullYear()} Rizoma PE. Construido con Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
