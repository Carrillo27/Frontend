import { Component } from '@angular/core';
import { CatalogoDiseno, EncabezadoPagina } from '../../components';
import { serviciosDiseno } from './servicios-diseno.datos';

/** Configuración de servicios: copias, impresiones y engargolados. */
@Component({
  selector: 'app-servicios-diseno',
  imports: [EncabezadoPagina, CatalogoDiseno],
  templateUrl: './servicios-diseno.html',
})
export class ServiciosDiseno {
  readonly config = serviciosDiseno;
}
