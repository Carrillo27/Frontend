import { Routes } from '@angular/router';
import { rutaCatalogo } from '../../shared/catalogo-diseno/pagina-catalogo';
import { HistorialVentasDiseno } from '../historial-ventas-diseno/historial-ventas';
import { productosDiseno } from '../productos-diseno/productos-diseno';
import { proveedoresDiseno } from '../proveedores-diseno/proveedores-diseno';
import { serviciosDiseno } from '../servicios-diseno/servicios-diseno';
import { Disenos } from './disenos';

export const DISENO_ROUTES: Routes = [
  {
    path: '',
    component: Disenos,
    children: [
      rutaCatalogo('servicios', serviciosDiseno),
      { path: 'ventas', component: HistorialVentasDiseno },
      rutaCatalogo('productos', productosDiseno),
      rutaCatalogo('proveedores', proveedoresDiseno),
      {
        path: 'administracion',
        loadChildren: () =>
          import('../administracion-diseno/administracion.routes').then(
            (m) => m.ADMINISTRACION_DISENO_ROUTES,
          ),
      },
      { path: 'usuarios', pathMatch: 'full', redirectTo: 'administracion/usuarios' },
      { path: 'categorias', pathMatch: 'full', redirectTo: 'administracion/categorias' },
      { path: 'metodos', pathMatch: 'full', redirectTo: 'administracion/metodos' },
      { path: 'equipos', pathMatch: 'full', redirectTo: 'administracion/equipos' },
      { path: '', pathMatch: 'full', redirectTo: 'servicios' },
    ],
  },
];
