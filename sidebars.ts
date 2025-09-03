import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // To have full control, we define it here
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'introduccion', 
      label: 'Introducción',
    },
    {
      type: 'category',
      label: 'Guías de Inicio',
      items: ['guia-uno', 'guia-dos'],
    },
    // You can add more categories or standalone documents here
  ],
};

export default sidebars;
