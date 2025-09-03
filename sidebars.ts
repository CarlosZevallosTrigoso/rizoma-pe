import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
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
    // Add more categories or documents here
  ],
};

export default sidebars;
