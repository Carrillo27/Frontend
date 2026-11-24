import { Catalogo } from '../../shared/catalogo-diseno/catalogo';

export const proveedoresDiseno: Catalogo = {
  title: 'Compras y Proveedores',
  subtitle: 'Administra tus proveedores y registra las compras del negocio.',
  panel: 'Proveedores registrados',
  modal: 'Agregar nuevo proveedor',
  note: 'Mantén actualizados los datos de contacto de tus proveedores.',
  fields: [
    {
      key: 'empresa',
      label: 'Nombre / Empresa',
      kind: 'text',
      options: [],
    },
    {
      key: 'contacto',
      label: 'Contacto',
      kind: 'text',
      options: [],
    },
    {
      key: 'telefono',
      label: 'Teléfono',
      kind: 'tel',
      options: [],
    },
    {
      key: 'domicilio',
      label: 'Domicilio',
      kind: 'text',
      options: [],
    },
    {
      key: 'correo',
      label: 'Correo',
      kind: 'email',
      options: [],
    },
  ],
  rows: [
    {
      empresa: 'Papelería del Sol',
      contacto: 'Juan Pérez',
      telefono: '951 000 0000',
      domicilio: 'Av. Independencia 123, Centro',
      correo: 'juan@example.com',
    },
    {
      empresa: 'Cómputo Oaxaca',
      contacto: 'Ana Ruiz',
      telefono: '951 000 0001',
      domicilio: 'Oaxaca de Juárez',
      correo: 'ana@example.com',
    },
  ],
};
