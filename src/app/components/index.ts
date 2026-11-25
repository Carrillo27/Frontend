/**
 * Punto único de acceso a los componentes reutilizables de la aplicación.
 *
 *   import { Modal, PanelEquipos } from '../../components';
 *
 * Cada componente vive en su propia carpeta con su .ts, .html y .css.
 */
export { Layout } from './layout/layout';
export { Modal } from './modal/modal';
export { EncabezadoPagina } from './encabezado-pagina/encabezado-pagina';
export { CatalogoDiseno } from './catalogo/catalogo-diseno';
export type { Campo, Catalogo } from './catalogo/catalogo';
export { PanelEquipos } from './panel-equipos/panel-equipos';
export type { EquipoComputo, EstadoEquipo } from './panel-equipos/panel-equipos';
export { PanelServicios } from './panel-servicios/panel-servicios';
export type { ServicioCaja } from './panel-servicios/panel-servicios';
