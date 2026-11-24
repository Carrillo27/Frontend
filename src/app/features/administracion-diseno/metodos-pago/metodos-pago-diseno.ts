import { Catalogo } from '../../../shared/catalogo-diseno/catalogo';

export const metodosPagoDiseno: Catalogo = {
  title: 'Administración',
  subtitle: 'Configura las formas de pago aceptadas.',
  panel: 'Métodos de pago',
  modal: 'Nuevo método de pago',
  note: 'Gestiona las formas de pago aceptadas por el negocio.',
  fields: [
    {
      key: 'nombre',
      label: 'Nombre',
      kind: 'text',
      options: [],
    },
    {
      key: 'folio',
      label: 'Requiere folio',
      kind: 'radio',
      options: ['Sí', 'No'],
    },
    {
      key: 'tipo',
      label: 'Tipo',
      kind: 'select',
      options: ['Efectivo', 'Tarjeta', 'Transferencia'],
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
      nombre: 'Efectivo',
      folio: 'No',
      tipo: 'Efectivo',
      estado: 'Activo',
    },
    {
      nombre: 'Tarjeta de crédito',
      folio: 'Sí',
      tipo: 'Tarjeta',
      estado: 'Activo',
    },
    {
      nombre: 'Tarjeta de débito',
      folio: 'Sí',
      tipo: 'Tarjeta',
      estado: 'Activo',
    },
    {
      nombre: 'Transferencia bancaria',
      folio: 'Sí',
      tipo: 'Transferencia',
      estado: 'Activo',
    },
  ],
};
