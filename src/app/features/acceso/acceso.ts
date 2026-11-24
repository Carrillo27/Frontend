import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../core/auth';
import { Ticket } from '../../core/ticket';
import { mensajeError } from '../../core/api';
@Component({
  imports: [FormsModule, RouterLink],
  templateUrl: './acceso.html',
  styleUrl: './acceso.css',
})
export class Acceso {
  auth = inject(Auth);
  router = inject(Router);
  ticket = inject(Ticket);
  recuperacion = this.router.url.startsWith('/recuperacion');
  username = '';
  password = '';
  codigo = '';
  visible = false;
  validado = signal(false);
  error = signal('');
  ocupado = signal(false);
  async ingresar() {
    if (this.ocupado()) return;
    this.error.set('');
    this.ocupado.set(true);
    try {
      if (this.recuperacion) {
        if (!this.validado() || this.codigo !== '123')
          throw new Error('Valida primero el código de demostración.');
        this.auth.demostracion();
      } else await this.auth.ingresar(this.username.trim(), this.password);
      this.ticket.limpiar();
      this.password = '';
      await this.router.navigateByUrl('/caja');
    } catch (e) {
      this.error.set(mensajeError(e));
    } finally {
      this.ocupado.set(false);
    }
  }
  validar() {
    this.validado.set(this.codigo === '123');
    this.error.set(this.validado() ? '' : 'El código de demostración no es correcto.');
  }
}
