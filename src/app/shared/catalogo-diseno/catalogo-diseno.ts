import { Component, input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Modal } from '../modal';
import { Catalogo } from './catalogo';
@Component({
  selector: 'app-catalogo-diseno',
  imports: [FormsModule, Modal],
  templateUrl: './catalogo-diseno.html',
  styleUrl: '../estilos-revision.css',
})
export class CatalogoDiseno implements OnInit {
  config = input.required<Catalogo>();
  rows: Record<string, string>[] = [];
  query = '';
  filter = '';
  draft: Record<string, string> = {};
  editing = -1;
  message = '';
  ngOnInit() {
    this.rows = this.config().rows.map((r) => ({ ...r }));
  }
  columns() {
    return this.config().fields.filter((f) => f.kind !== 'password' && f.kind !== 'checkbox');
  }
  visible() {
    return this.rows.filter(
      (r) =>
        Object.values(r).some((v) =>
          String(v).toLocaleLowerCase().includes(this.query.toLocaleLowerCase()),
        ) &&
        (!this.filter || r['categoria'] === this.filter),
    );
  }
  open(modal: Modal, row?: Record<string, string>) {
    this.editing = row ? this.rows.indexOf(row) : -1;
    this.draft = row
      ? { ...row }
      : Object.fromEntries(this.config().fields.map((f) => [f.key, f.options[0] || '']));
    this.message = '';
    modal.abrir();
  }
  save(modal: Modal) {
    const copy = { ...this.draft };
    delete copy['clave'];
    if (this.editing < 0) this.rows = [...this.rows, copy];
    else this.rows = this.rows.map((r, i) => (i === this.editing ? copy : r));
    this.draft = {};
    this.message = 'Cambio aplicado a la vista de muestra. Se restablece al salir de esta página.';
    modal.cerrar();
  }
  toggle(row: Record<string, string>) {
    row['estado'] = row['estado'] === 'Activo' ? 'Inactivo' : 'Activo';
  }
}
