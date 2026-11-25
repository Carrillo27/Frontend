import { Component, ElementRef, input, viewChild } from '@angular/core';

/** Ventana modal reutilizable basada en <dialog>. */
@Component({
  selector: 'app-modal',
  templateUrl: './modal.html',
  styleUrl: './modal.css',
  host: { '(document:keydown.escape)': 'escape($event)' },
})
export class Modal {
  titulo = input('');
  bloqueado = input(false);
  private dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');
  abrir() {
    this.dialog().nativeElement.showModal();
  }
  cerrar(confirmado = false) {
    if (confirmado || !this.bloqueado()) this.dialog().nativeElement.close();
  }
  fuera(e: MouseEvent) {
    if (e.target === this.dialog().nativeElement) {
      const r = this.dialog().nativeElement.getBoundingClientRect();
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom)
        this.cerrar();
    }
  }
  escape(e: Event) {
    if (this.bloqueado()) e.preventDefault();
  }
}
