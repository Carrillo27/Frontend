import { Component, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Auth } from '../core/auth';
import { Ticket } from '../core/ticket';
import { mensajeError } from '../core/api';
@Component({
  imports: [RouterOutlet, RouterLink, DatePipe],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  auth = inject(Auth);
  private router = inject(Router);
  private ticket = inject(Ticket);
  fecha = new Date();
  error = signal('');
  ocupado = signal(false);
  async salir() {
    if (
      this.ticket.lineas().length &&
      !confirm('Hay un ticket sin cobrar. ¿Cerrar sesión y descartarlo?')
    )
      return;
    this.ocupado.set(true);
    try {
      await this.auth.salir();
      this.ticket.limpiar();
      await this.router.navigateByUrl('/login');
    } catch (e) {
      this.error.set(mensajeError(e));
    } finally {
      this.ocupado.set(false);
    }
  }
  fuera(e: MouseEvent, panel: HTMLDialogElement) {
    if (e.target === panel) {
      const r = panel.getBoundingClientRect();
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom)
        panel.close();
    }
  }
}
