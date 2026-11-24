import { Component, ElementRef, input, viewChild } from '@angular/core';
@Component({
  selector: 'app-modal',
  template: `<dialog #dialog [attr.aria-label]="titulo()" (click)="fuera($event)">
    <div class="modal-cabecera">
      <h2>{{ titulo() }}</h2>
      <button type="button" aria-label="Cerrar ventana" [disabled]="bloqueado()" (click)="cerrar()">
        ×
      </button>
    </div>
    <ng-content />
  </dialog>`,
  styles: [
    `
      dialog {
        width: min(460px, calc(100vw - 32px));
        border: 1px solid var(--borde);
        border-radius: 20px;
        padding: 28px;
        color: var(--texto);
        box-shadow: 0 20px 60px #18382b22;
      }
      dialog::backdrop {
        background: #203b3140;
      }
      .modal-cabecera {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 18px;
      }
      h2 {
        margin: 0;
      }
      button {
        border: 0;
        background: transparent;
        font-size: 24px;
        color: var(--muted);
        cursor: pointer;
      }
    `,
  ],
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
