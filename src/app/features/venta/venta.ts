import { Component, OnDestroy, inject, signal, viewChild } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Api, Producto, Resultado, mensajeError } from '../../core/api';
import { Auth } from '../../core/auth';
import { Ticket } from '../../core/ticket';
import { Modal } from '../../shared/modal';
@Component({
  imports: [CurrencyPipe, FormsModule, Modal, RouterLink],
  templateUrl: './venta.html',
  styleUrl: './venta.css',
})
export class Venta implements OnDestroy {
  api = inject(Api);
  auth = inject(Auth);
  ticket = inject(Ticket);
  modal = viewChild.required<Modal>('cobro');
  busqueda = '';
  recibido: number | null = null;
  resultados = signal<Producto[]>([]);
  error = signal('');
  errorCobro = signal('');
  buscando = signal(false);
  ocupado = signal(false);
  recibo = signal<Resultado | null>(null);
  equipos = [1, 2, 3, 4, 5, 6, 7, 8];
  private timer?: ReturnType<typeof setTimeout>;
  private secuencia = 0;
  programar() {
    clearTimeout(this.timer);
    this.secuencia++;
    if (!this.busqueda.trim()) {
      this.resultados.set([]);
      this.buscando.set(false);
      return;
    }
    this.timer = setTimeout(() => void this.buscar(), 250);
  }
  async buscar(exacto = false) {
    if (this.auth.demo()) return;
    clearTimeout(this.timer);
    const secuencia = ++this.secuencia,
      texto = this.busqueda.trim();
    this.error.set('');
    this.buscando.set(true);
    try {
      const ps = await this.api.productos(texto);
      if (secuencia !== this.secuencia) return;
      const encontrado = exacto ? ps.find((p) => p.codigoBarras === texto) : undefined;
      if (encontrado) this.agregar(encontrado);
      else this.resultados.set(ps.slice(0, 8));
    } catch (e) {
      if (secuencia === this.secuencia) this.error.set(mensajeError(e));
    } finally {
      if (secuencia === this.secuencia) this.buscando.set(false);
    }
  }
  agregar(p: Producto) {
    try {
      this.ticket.agregar(p);
      this.resultados.set([]);
      this.busqueda = '';
      this.error.set('');
    } catch (e) {
      this.error.set(mensajeError(e));
    }
  }
  cantidad(id: number, event: Event) {
    const input = event.target as HTMLInputElement;
    try {
      this.ticket.cantidad(id, input.valueAsNumber);
      this.error.set('');
    } catch (e) {
      this.error.set(mensajeError(e));
      input.value = String(
        this.ticket.lineas().find((l) => l.producto.idProducto === id)?.cantidad || 1,
      );
    }
  }
  cancelar() {
    if (confirm('¿Vaciar el ticket sin cobrar?')) this.ticket.limpiar();
  }
  abrirCobro() {
    this.recibido = null;
    this.errorCobro.set('');
    this.modal().abrir();
  }
  cambio() {
    return Math.round(((this.recibido || 0) - this.ticket.total()) * 100) / 100;
  }
  async cobrar() {
    if (this.ocupado() || this.auth.demo() || !this.ticket.lineas().length) return;
    if (this.recibido == null || !Number.isFinite(this.recibido) || this.cambio() < 0) {
      this.errorCobro.set('El importe recibido no cubre el total.');
      return;
    }
    this.ocupado.set(true);
    this.errorCobro.set('');
    try {
      const respuesta = await this.api.post<Resultado>('ventas', {
        lineas: this.ticket
          .lineas()
          .map((l) => ({ idProducto: l.producto.idProducto, cantidad: l.cantidad })),
        recibido: this.recibido,
        totalEsperado: this.ticket.total(),
      });
      this.recibo.set(respuesta);
      this.ticket.limpiar();
      this.resultados.set([]);
      this.ocupado.set(false);
      this.modal().cerrar(true);
    } catch (e) {
      this.errorCobro.set(mensajeError(e));
    } finally {
      this.ocupado.set(false);
    }
  }
  ngOnDestroy() {
    clearTimeout(this.timer);
    this.secuencia++;
  }
}
