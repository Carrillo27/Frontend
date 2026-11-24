import { Routes } from '@angular/router';
import { rutaCatalogo } from '../../shared/catalogo-diseno/pagina-catalogo';
import { AdministracionDiseno } from './administracion';
import { categoriasDiseno } from './categorias/categorias-diseno';
import { equiposComputoDiseno } from './equipos-computo/equipos-computo-diseno';
import { metodosPagoDiseno } from './metodos-pago/metodos-pago-diseno';
import { rolesDiseno } from './usuarios-roles/roles-diseno';
import { usuariosDiseno } from './usuarios-roles/usuarios-diseno';

export const ADMINISTRACION_DISENO_ROUTES: Routes = [
  {
    path: '',
    component: AdministracionDiseno,
    children: [
      rutaCatalogo('usuarios', usuariosDiseno, rolesDiseno),
      rutaCatalogo('categorias', categoriasDiseno),
      rutaCatalogo('metodos', metodosPagoDiseno),
      rutaCatalogo('equipos', equiposComputoDiseno),
      { path: '', pathMatch: 'full', redirectTo: 'usuarios' },
    ],
  },
];
