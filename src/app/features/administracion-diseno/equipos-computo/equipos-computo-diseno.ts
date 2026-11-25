import { Component } from '@angular/core';
import { CatalogoDiseno, EncabezadoPagina, EquipoComputo, PanelEquipos } from '../../../components';
import { equiposComputoDiseno } from './equipos-computo-diseno.datos';

/** Administración de equipos de cómputo: vista rápida de computadoras + catálogo. */
@Component({
  selector: 'app-equipos-computo-diseno',
  imports: [EncabezadoPagina, PanelEquipos, CatalogoDiseno],
  templateUrl: './equipos-computo-diseno.html',
  styleUrl: './equipos-computo-diseno.css',
})
export class EquiposComputoDiseno {
  readonly config = equiposComputoDiseno;
  readonly computadoras: EquipoComputo[] = equiposComputoDiseno.rows.map(
    (r): EquipoComputo => ({
      nombre: r['codigo'],
      estado: 'Disponible',
    }),
  );
}
