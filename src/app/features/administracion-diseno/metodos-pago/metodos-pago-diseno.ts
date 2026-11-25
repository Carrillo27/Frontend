import { Component } from '@angular/core';
import { CatalogoDiseno, EncabezadoPagina } from '../../../components';
import { metodosPagoDiseno } from './metodos-pago-diseno.datos';

/** Administración de métodos de pago. */
@Component({
  selector: 'app-metodos-pago-diseno',
  imports: [EncabezadoPagina, CatalogoDiseno],
  templateUrl: './metodos-pago-diseno.html',
})
export class MetodosPagoDiseno {
  readonly config = metodosPagoDiseno;
}
