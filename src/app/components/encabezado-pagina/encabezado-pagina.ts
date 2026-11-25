import { Component, input } from '@angular/core';

/** Título y subtítulo de las pantallas de catálogo. */
@Component({
  selector: 'app-encabezado-pagina',
  templateUrl: './encabezado-pagina.html',
  styleUrl: './encabezado-pagina.css',
})
export class EncabezadoPagina {
  titulo = input.required<string>();
  subtitulo = input('');
}
