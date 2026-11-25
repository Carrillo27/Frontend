import { Component } from '@angular/core';
import { CatalogoDiseno, EncabezadoPagina } from '../../../components';
import { categoriasDiseno } from './categorias-diseno.datos';

/** Administración de categorías de productos. */
@Component({
  selector: 'app-categorias-diseno',
  imports: [EncabezadoPagina, CatalogoDiseno],
  templateUrl: './categorias-diseno.html',
})
export class CategoriasDiseno {
  readonly config = categoriasDiseno;
}
