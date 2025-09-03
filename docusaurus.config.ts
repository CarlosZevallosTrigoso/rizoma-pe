import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Rizoma PE', // Título principal de tu sitio
  tagline: 'Documentación y Guías para el Ecosistema Rizoma', // Subtítulo o eslogan
  favicon: 'img/favicon.ico', // Asegúrate de tener este archivo en static/img/

  // URL de producción de tu sitio
  url: 'https://carloszevallostrigoso.github.io',
  // Subdirectorio donde se despliega. Para GitHub Pages, es el nombre del repo.
  baseUrl: '/rizoma-pe/',

  // Configuración de despliegue en GitHub Pages
  organizationName: 'carloszevallostrigoso', // Tu usuario de GitHub
  projectName: 'rizoma-pe', // El nombre de tu repositorio

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
          sidebarPath: './sidebars.js', // TypeScript prefiere la ruta explícita
          // Por favor, edita la URL para apuntar al repo correcto.
          editUrl:
            'https://github.com/carloszevallostrigoso/rizoma-pe/tree/main/',
        },
        blog: false, // Desactivamos el blog si no lo usarás.
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Reemplaza con una imagen para las previews en redes sociales
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Rizoma PE',
      logo: {
        alt: 'Logo de Rizoma PE',
        src: 'img/logo.svg', // Asegúrate de tener un logo en static/img/
      },
      items: [
        {
          type: 'doc',
          docId: 'introduccion', // ID de tu página de inicio de la documentación
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
