import { Component } from '@angular/core';
import { CatalogoDiseno, EncabezadoPagina } from '../../components';
import { proveedoresDiseno } from './proveedores-diseno.datos';

/** Gestión de proveedores. */
@Component({
  selector: 'app-proveedores-diseno',
  imports: [EncabezadoPagina, CatalogoDiseno],
  templateUrl: './proveedores-diseno.html',
})
export class ProveedoresDiseno {
  readonly config = proveedoresDiseno;
}
