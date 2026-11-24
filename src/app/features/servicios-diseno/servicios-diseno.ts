import { Catalogo } from '../../shared/catalogo-diseno/catalogo';

export const serviciosDiseno: Catalogo = {
  title: 'Configuración de servicios',
  subtitle: 'Administra tus servicios y sus precios vigentes.',
  panel: 'Servicios',
  modal: 'Nuevo servicio',
  note: 'Haz doble clic sobre un precio para editarlo. La renta de equipos se cobra desde la sesión de cómputo.',
  fields: [
    {
      key: 'tipo',
      label: 'Tipo de servicio',
      kind: 'select',
      options: ['Copia', 'Impresión', 'Engargolado'],
    },
    {
      key: 'color',
      label: 'Color',
      kind: 'radio',
      options: ['B/N', 'Color'],
    },
    {
      key: 'tamano',
      label: 'Tamaño',
      kind: 'select',
      options: ['Carta', 'Oficio'],
    },
    {
      key: 'doble',
      label: 'Doble cara',
      kind: 'radio',
      options: ['No', 'Sí'],
    },
    {
      key: 'precio',
      label: 'Precio vigente',
      kind: 'number',
      options: [],
    },
  ],
  rows: [
    {
      tipo: 'Copia',
      color: 'B/N',
      tamano: 'Carta',
      doble: 'No',
      precio: '1.00',
    },
    {
      tipo: 'Impresión',
      color: 'Color',
      tamano: 'Carta',
      doble: 'Sí',
      precio: '6.00',
    },
    {
      tipo: 'Impresión',
      color: 'B/N',
      tamano: 'Oficio',
      doble: 'No',
      precio: '2.00',
    },
  ],
};
