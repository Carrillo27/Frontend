import type { Catalogo } from '../../../components';

export const rolesDiseno: Catalogo = {
  title: 'Roles',
  subtitle: '',
  panel: 'Roles',
  modal: 'Configuración de Rol / Permisos',
  note: 'Organiza los roles del negocio y define sus permisos.',
  fields: [
    {
      key: 'nombre',
      label: 'Nombre del rol',
      kind: 'text',
      options: [],
    },
    {
      key: 'ventas',
      label: 'Registrar ventas y cobrar',
      kind: 'checkbox',
      options: [],
    },
    {
      key: 'inventario',
      label: 'Ver inventario / catálogo de productos',
      kind: 'checkbox',
      options: [],
    },
    {
      key: 'servicios',
      label: 'Configurar servicios e impresiones',
      kind: 'checkbox',
      options: [],
    },
    {
      key: 'reportes',
      label: 'Ver reportes financieros y corte de caja',
      kind: 'checkbox',
      options: [],
    },
    {
      key: 'usuarios',
      label: 'Administrar usuarios',
      kind: 'checkbox',
      options: [],
    },
  ],
  rows: [
    {
      nombre: 'Administrador',
      ventas: 'Sí',
      inventario: 'Sí',
      servicios: 'Sí',
      reportes: 'Sí',
      usuarios: 'Sí',
    },
    {
      nombre: 'Cajero',
      ventas: 'Sí',
      inventario: 'Sí',
      servicios: 'No',
      reportes: 'No',
      usuarios: 'No',
    },
  ],
};
