import { Component } from '@angular/core';
import { CatalogoDiseno, EncabezadoPagina } from '../../../components';
import { rolesDiseno } from './roles-diseno.datos';
import { usuariosDiseno } from './usuarios-diseno.datos';

/** Usuarios y roles: dos catálogos lado a lado (uno debajo del otro en pantallas chicas). */
@Component({
  selector: 'app-usuarios-roles-diseno',
  imports: [EncabezadoPagina, CatalogoDiseno],
  templateUrl: './usuarios-roles-diseno.html',
  styleUrl: './usuarios-roles-diseno.css',
})
export class UsuariosRolesDiseno {
  readonly usuarios = usuariosDiseno;
  readonly roles = rolesDiseno;
}
