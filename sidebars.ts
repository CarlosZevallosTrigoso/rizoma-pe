import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // Por defecto, Docusaurus genera un sidebar a partir de la estructura de la carpeta de documentos
  // Para tener un control total, lo definimos aquí
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Cursos/talleres',
      link: {type: 'doc', id: 'ani2022'}, // Agregamos un enlace para la categoría
      items: [
        'ani2022', // Documento ani2022
      ],
    },
    {
      type: 'category',
      label: 'Cursos/talleres pasados',
      items: [
        'ani2022', // Documento ani2022
        'neo2022', // Documento neo2022
      ],
    },
  ],
};

export default sidebars;
