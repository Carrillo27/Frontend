import { Routes } from '@angular/router';
import { AdministracionDiseno } from './administracion';
import { CategoriasDiseno } from './categorias/categorias-diseno';
import { EquiposComputoDiseno } from './equipos-computo/equipos-computo-diseno';
import { MetodosPagoDiseno } from './metodos-pago/metodos-pago-diseno';
import { UsuariosRolesDiseno } from './usuarios-roles/usuarios-roles-diseno';

export const ADMINISTRACION_DISENO_ROUTES: Routes = [
  {
    path: '',
    component: AdministracionDiseno,
    children: [
      { path: 'usuarios', component: UsuariosRolesDiseno },
      { path: 'categorias', component: CategoriasDiseno },
      { path: 'metodos', component: MetodosPagoDiseno },
      { path: 'equipos', component: EquiposComputoDiseno },
      { path: '', pathMatch: 'full', redirectTo: 'usuarios' },
    ],
  },
];
