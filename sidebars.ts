import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // Por defecto, Docusaurus genera un sidebar a partir de la estructura de la carpeta de documentos
  // Para tener un control total, lo definimos aquí
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Cursos/talleres',
      items: [
        'introduccion', // Documento ani2022
      ],
    },
    {
      type: 'category',
      label: 'Cursos/talleres pasados',
      items: [
        '1_ani2022',
        '2_neo2022',
        '3_idn1_2023',
        '4_pc2024',
        '5_idn2_2024',
        '6_porta2024',
        '7_ani2024',
        '8_ID2024',
        '9_idn3_2025',
        '10_ani2025',
    ],
  },
],
