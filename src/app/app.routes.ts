import { Routes } from '@angular/router';
import { sesionGuard } from './core/auth';
import { Layout } from './shared/layout';
export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./features/acceso/acceso').then((m) => m.Acceso) },
  {
    path: 'recuperacion',
    loadComponent: () => import('./features/acceso/acceso').then((m) => m.Acceso),
  },
  {
    path: '',
    component: Layout,
    canActivate: [sesionGuard],
    children: [
      {
        path: 'disenos',
        loadChildren: () =>
          import('./features/disenos/disenos.routes').then((m) => m.DISENO_ROUTES),
      },
      { path: 'caja', loadComponent: () => import('./features/venta/venta').then((m) => m.Venta) },
      {
        path: 'reportes',
        loadComponent: () => import('./features/reportes/reportes').then((m) => m.Reportes),
      },
      {
        path: 'productos',
        loadComponent: () => import('./features/productos/productos').then((m) => m.Productos),
      },
      { path: '', pathMatch: 'full', redirectTo: 'caja' },
    ],
  },
  { path: '**', redirectTo: 'caja' },
];
