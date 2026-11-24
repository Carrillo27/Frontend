import { Component, OnInit, inject, signal, viewChild } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Api, EstadoCaja, Resultado, mensajeError } from '../../core/api';
import { Auth } from '../../core/auth';
import { Modal } from '../../shared/modal';
type Operacion = 'aperturas' | 'entradas' | 'retiros' | 'cierres';
@Component({
  imports: [CurrencyPipe, FormsModule, RouterLink, Modal],
  templateUrl: './reportes.html',
  styleUrl: './reportes.css',
})
export class Reportes implements OnInit {
  api = inject(Api);
  auth = inject(Auth);
  modal = viewChild.required<Modal>('operacionModal');
  caja = signal<EstadoCaja | null>(null);
  cargando = signal(false);
  ocupado = signal(false);
  error = signal('');
  errorModal = signal('');
  resultado = signal<Resultado | null>(null);
  operacion: Operacion = 'aperturas';
  monto: number | null = null;
  motivo = '';
  turno?: number;
  titulos = {
    aperturas: 'Iniciar caja',
    entradas: 'Registrar entrada',
    retiros: 'Registrar retiro',
    cierres: 'Cierre de caja',
  };
  ngOnInit() {
    void this.actualizar();
  }
  async actualizar() {
    if (this.auth.demo()) {
      this.caja.set({ abierta: false, efectivoEsperado: 0 });
      return;
    }
    this.cargando.set(true);
    this.error.set('');
    try {
      this.caja.set(await this.api.get<EstadoCaja>('caja/actual'));
    } catch (e) {
      this.caja.set(null);
      this.error.set(mensajeError(e));
    } finally {
      this.cargando.set(false);
    }
  }
  abrir(tipo: Operacion) {
    this.operacion = tipo;
    this.monto = null;
    this.motivo = '';
    this.turno = this.caja()?.idTurno;
    this.errorModal.set('');
    this.modal().abrir();
  }
  diferencia() {
    return Math.round(((this.monto || 0) - (this.caja()?.efectivoEsperado || 0)) * 100) / 100;
  }
  async guardar() {
    if (this.ocupado() || this.auth.demo()) return;
    if (this.operacion === 'cierres' && !confirm('¿Confirmar el cierre definitivo de este turno?'))
      return;
    this.ocupado.set(true);
    this.errorModal.set('');
    const body =
      this.operacion === 'aperturas'
        ? { fondoInicial: this.monto }
        : this.operacion === 'cierres'
          ? { idTurno: this.turno, efectivoContado: this.monto }
          : { idTurno: this.turno, monto: this.monto, motivo: this.motivo.trim() };
    try {
      this.resultado.set(await this.api.post<Resultado>('caja/' + this.operacion, body));
      this.ocupado.set(false);
      this.modal().cerrar(true);
      await this.actualizar();
    } catch (e) {
      this.errorModal.set(mensajeError(e));
    } finally {
      this.ocupado.set(false);
    }
  }
}
