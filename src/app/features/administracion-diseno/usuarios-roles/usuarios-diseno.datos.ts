import type { Catalogo } from '../../../components';

export const usuariosDiseno: Catalogo = {
  title: 'Administración',
  subtitle: 'Administra usuarios, sus roles y los catálogos de la sucursal.',
  panel: 'Usuarios',
  modal: 'Nuevo usuario',
  note: 'Gestiona el acceso de tu equipo. Asigna un rol a cada usuario.',
  fields: [
    {
      key: 'nombre',
      label: 'Nombre(s)',
      kind: 'text',
      options: [],
    },
    {
      key: 'apellidos',
      label: 'Apellidos',
      kind: 'text',
      options: [],
    },
    {
      key: 'usuario',
      label: 'Username',
      kind: 'text',
      options: [],
    },
    {
      key: 'clave',
      label: 'Contraseña',
      kind: 'password',
      options: [],
    },
    {
      key: 'rol',
      label: 'Rol',
      kind: 'radio',
      options: ['Administrador', 'Cajero'],
    },
  ],
  rows: [
    {
      nombre: 'María',
      apellidos: 'López',
      usuario: 'mlopez',
      clave: '',
      rol: 'Administrador',
    },
    {
      nombre: 'Carlos',
      apellidos: 'Díaz',
      usuario: 'cdiaz',
      clave: '',
      rol: 'Cajero',
    },
  ],
};
