import { Catalogo } from '../../shared/catalogo-diseno/catalogo';

export const productosDiseno: Catalogo = {
  title: 'Productos',
  subtitle: 'Administra los productos, precios y existencias.',
  panel: 'Productos registrados',
  modal: 'Agregar producto',
  note: 'Mantén actualizado tu catálogo de productos. Usa las acciones para editar un artículo.',
  fields: [
    {
      key: 'codigo',
      label: 'Código',
      kind: 'text',
      options: [],
    },
    {
      key: 'producto',
      label: 'Producto',
      kind: 'text',
      options: [],
    },
    {
      key: 'categoria',
      label: 'Categoría',
      kind: 'select',
      options: [
        'Papelería y Mercería',
        'Cómputo y Electrónica',
        'Servicios e Impresiones',
        'Regalos y Envolturas',
      ],
    },
    {
      key: 'compra',
      label: 'P. compra',
      kind: 'number',
      options: [],
    },
    {
      key: 'venta',
      label: 'P. venta',
      kind: 'number',
      options: [],
    },
    {
      key: 'stock',
      label: 'Stock',
      kind: 'number',
      options: [],
    },
    {
      key: 'minimo',
      label: 'Mínimo',
      kind: 'number',
      options: [],
    },
  ],
  rows: [
    {
      codigo: '7501001',
      producto: 'Cuaderno',
      categoria: 'Papelería y Mercería',
      compra: '22',
      venta: '35',
      stock: '48',
      minimo: '10',
    },
    {
      codigo: '7501002',
      producto: 'Pluma azul',
      categoria: 'Papelería y Mercería',
      compra: '4',
      venta: '8',
      stock: '5',
      minimo: '8',
    },
  ],
};
