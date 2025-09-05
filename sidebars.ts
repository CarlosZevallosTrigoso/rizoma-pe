import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // To have full control, we define it here
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Cursos/Talleres pasados',
      items: ['ani2022']
    },
    {
      type: 'doc',
      id: 'introduccion', 
      label: 'Introducción',
    },
    // You can add more categories or standalone documents here
  ],
};

export default sidebars;
