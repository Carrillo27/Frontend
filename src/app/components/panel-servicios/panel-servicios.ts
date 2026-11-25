import { Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

export interface ServicioCaja {
  nombre: string;
  etiqueta: string;
  color?: boolean;
  detalle: string;
  precio: number;
}

/** Lista de servicios rápidos (copias, impresiones…) que se muestra en la caja. */
@Component({
  selector: 'app-panel-servicios',
  imports: [CurrencyPipe],
  templateUrl: './panel-servicios.html',
  styleUrl: './panel-servicios.css',
})
export class PanelServicios {
  servicios = input.required<ServicioCaja[]>();
  descripcion = input('Servicios de ejemplo · Próximamente');
  nota = input('El cobro de servicios se habilitará con su catálogo.');
}
