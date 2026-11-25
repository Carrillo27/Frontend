import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Modal } from '../../components';
@Component({
  selector: 'app-historial-ventas-diseno',
  imports: [FormsModule, CurrencyPipe, Modal],
  templateUrl: './historial-ventas.html',
  styleUrl: '../../components/estilos/estilos-revision.css',
})
export class HistorialVentasDiseno {
  inicio = '2026-10-01';
  fin = '2026-10-31';
  error = '';
  selected: any = null;
  ventas = [
    {
      id: 1042,
      fecha: '2026-10-14',
      hora: '14:12',
      usuario: 'mlopez',
      metodo: 'Efectivo',
      total: 103,
      costo: 64,
      items: [
        ['Copias B/N Carta', 50, 1],
        ['Impresión Color Carta', 3, 6],
        ['Cuaderno Profesional Raya', 1, 35],
      ],
    },
    {
      id: 1041,
      fecha: '2026-10-13',
      hora: '11:50',
      usuario: 'cdiaz',
      metodo: 'Tarjeta',
      total: 248,
      costo: 160,
      items: [
        ['Cuaderno', 4, 35],
        ['Pluma azul', 6, 8],
        ['Impresión color', 10, 6],
      ],
    },
    {
      id: 1040,
      fecha: '2026-10-12',
      hora: '11:20',
      usuario: 'cdiaz',
      metodo: 'Efectivo',
      total: 65,
      costo: 38,
      items: [
        ['Cuaderno', 1, 35],
        ['Copias B/N Carta', 30, 1],
      ],
    },
  ];
  resultados = this.ventas;
  buscar() {
    this.error =
      this.inicio && this.fin && this.inicio > this.fin
        ? 'La fecha inicial debe ser anterior a la final.'
        : '';
    if (!this.error)
      this.resultados = this.ventas.filter(
        (v) => (!this.inicio || v.fecha >= this.inicio) && (!this.fin || v.fecha <= this.fin),
      );
  }
  hoy() {
    const d = new Date();
    this.inicio = this.fin =
      d.getFullYear() +
      '-' +
      String(d.getMonth() + 1).padStart(2, '0') +
      '-' +
      String(d.getDate()).padStart(2, '0');
    this.buscar();
  }
  get ingreso() {
    return this.resultados.reduce((s, v) => s + v.total, 0);
  }
  get ganancia() {
    return this.resultados.reduce((s, v) => s + v.total - v.costo, 0);
  }
  detalle(v: any, m: Modal) {
    this.selected = v;
    m.abrir();
  }
}
