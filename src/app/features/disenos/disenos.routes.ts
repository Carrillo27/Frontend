import { Routes } from '@angular/router';
import { HistorialVentasDiseno } from '../historial-ventas-diseno/historial-ventas';
import { ProductosDiseno } from '../productos-diseno/productos-diseno';
import { ProveedoresDiseno } from '../proveedores-diseno/proveedores-diseno';
import { ServiciosDiseno } from '../servicios-diseno/servicios-diseno';
import { Disenos } from './disenos';

export const DISENO_ROUTES: Routes = [
  {
    path: '',
    component: Disenos,
    children: [
      { path: 'servicios', component: ServiciosDiseno },
      { path: 'ventas', component: HistorialVentasDiseno },
      { path: 'productos', component: ProductosDiseno },
      { path: 'proveedores', component: ProveedoresDiseno },
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
