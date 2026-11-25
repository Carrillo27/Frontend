import { Component, OnInit, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Api, Producto, mensajeError } from '../../core/api';
import { Auth } from '../../core/auth';
import { Modal } from '../../components';
@Component({
  imports: [CurrencyPipe, FormsModule, RouterLink, Modal],
  templateUrl: './productos.html',
})
export class Productos implements OnInit {
  api = inject(Api);
  auth = inject(Auth);
  busqueda = '';
  productos = signal<Producto[]>([]);
  error = signal('');
  ocupado = signal(false);
  ngOnInit() {
    void this.buscar();
  }
  async buscar() {
    if (this.auth.demo() || this.ocupado()) return;
    this.ocupado.set(true);
    this.error.set('');
    try {
      this.productos.set(await this.api.productos(this.busqueda.trim()));
    } catch (e) {
      this.error.set(mensajeError(e));
    } finally {
      this.ocupado.set(false);
    }
  }
}
