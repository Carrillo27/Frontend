import { Catalogo } from '../../../shared/catalogo-diseno/catalogo';

export const equiposComputoDiseno: Catalogo = {
  title: 'Administración',
  subtitle: 'Administra tus equipos de cómputo.',
  panel: 'Equipos de cómputo',
  modal: 'Nuevo equipo de cómputo',
  note: 'Gestiona el inventario de equipos de cómputo. Registra su código, modelo y fecha de adquisición.',
  fields: [
    {
      key: 'codigo',
      label: 'Código / ID',
      kind: 'text',
      options: [],
    },
    {
      key: 'tipo',
      label: 'Tipo',
      kind: 'select',
      options: ['Computadora de escritorio', 'Laptop'],
    },
    {
      key: 'modelo',
      label: 'Modelo / Tipo',
      kind: 'text',
      options: [],
    },
    {
      key: 'fecha',
      label: 'Fecha de adquisición',
      kind: 'date',
      options: [],
    },
  ],
  rows: [
    {
      codigo: 'PC 01',
      tipo: 'Computadora de escritorio',
      modelo: 'Dell OptiPlex',
      fecha: '2024-03-12',
    },
    {
      codigo: 'PC 02',
      tipo: 'Computadora de escritorio',
      modelo: 'HP ProDesk',
      fecha: '2024-03-12',
    },
    {
      codigo: 'PC 03',
      tipo: 'Computadora de escritorio',
      modelo: 'Acer Aspire',
      fecha: '2024-03-12',
    },
    {
      codigo: 'PC 04',
      tipo: 'Computadora de escritorio',
      modelo: 'Lenovo ThinkCentre',
      fecha: '2024-03-12',
    },
    {
      codigo: 'PC 05',
      tipo: 'Computadora de escritorio',
      modelo: 'Dell OptiPlex',
      fecha: '2024-03-12',
    },
    {
      codigo: 'PC 06',
      tipo: 'Computadora de escritorio',
      modelo: 'HP ProDesk',
      fecha: '2024-03-12',
    },
    {
      codigo: 'PC 07',
      tipo: 'Computadora de escritorio',
      modelo: 'Acer Aspire',
      fecha: '2024-03-12',
    },
    {
      codigo: 'PC 08',
      tipo: 'Computadora de escritorio',
      modelo: 'Lenovo ThinkCentre',
      fecha: '2024-03-12',
    },
  ],
};
