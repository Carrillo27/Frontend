import { Component, computed, input } from '@angular/core';

export type EstadoEquipo = 'Disponible' | 'En uso' | 'Sin servicio';

export interface EquipoComputo {
  nombre: string;
  estado: EstadoEquipo;
}

/**
 * Panel de computadoras de la caja.
 * Se adapta al ancho que tenga disponible (container queries), no solo al de la ventana:
 * 2 columnas en la barra lateral, 4–8 columnas cuando ocupa todo el ancho y
 * tarjetas compactas en pantallas pequeñas.
 */
@Component({
  selector: 'app-panel-equipos',
  templateUrl: './panel-equipos.html',
  styleUrl: './panel-equipos.css',
})
export class PanelEquipos {
  equipos = input.required<EquipoComputo[]>();
  titulo = input('Equipo');
  descripcion = input('Vista de referencia · Rentas pendientes');
  nota = input('La asignación de equipos se implementará en el módulo de rentas.');

  readonly disponibles = computed(
    () => this.equipos().filter((e) => e.estado === 'Disponible').length,
  );
  readonly enUso = computed(() => this.equipos().filter((e) => e.estado === 'En uso').length);
}
