import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // To have full control, we define it here
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'ani2022', // He cambiado el ID para que coincida con tu documento
      label: 'Análisis de las imágenes (2022)',
    },
  ],
};

export default sidebars;
