import { Catalogo } from '../../../shared/catalogo-diseno/catalogo';

export const categoriasDiseno: Catalogo = {
  title: 'Administración',
  subtitle: 'Administra tus categorías de productos.',
  panel: 'Categorías',
  modal: 'Nueva categoría',
  note: 'Gestiona y organiza las categorías de la papelería. Facilita la búsqueda y el control del inventario.',
  fields: [
    {
      key: 'nombre',
      label: 'Nombre de categoría',
      kind: 'text',
      options: [],
    },
    {
      key: 'descripcion',
      label: 'Descripción / Detalle',
      kind: 'textarea',
      options: [],
    },
    {
      key: 'estado',
      label: 'Estado',
      kind: 'radio',
      options: ['Activo', 'Inactivo'],
    },
  ],
  rows: [
    {
      nombre: 'Papelería y Mercería',
      descripcion: 'Cuadernos, hojas, lápices…',
      estado: 'Activo',
    },
    {
      nombre: 'Cómputo y Electrónica',
      descripcion: 'USB, cables, periféricos…',
      estado: 'Activo',
    },
    {
      nombre: 'Servicios e Impresiones',
      descripcion: 'Copias, impresiones, escaneos…',
      estado: 'Activo',
    },
    {
      nombre: 'Regalos y Envolturas',
      descripcion: 'Bolsas, papel regalo…',
      estado: 'Activo',
    },
    {
      nombre: 'Promociones / Varios',
      descripcion: 'Artículos de temporada',
      estado: 'Inactivo',
    },
  ],
};
