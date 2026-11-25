import { Component } from '@angular/core';
import { CatalogoDiseno, EncabezadoPagina } from '../../components';
import { productosDiseno } from './productos-diseno.datos';

/** Catálogo de productos con precios y existencias. */
@Component({
  selector: 'app-productos-diseno',
  imports: [EncabezadoPagina, CatalogoDiseno],
  templateUrl: './productos-diseno.html',
})
export class ProductosDiseno {
  readonly config = productosDiseno;
}
