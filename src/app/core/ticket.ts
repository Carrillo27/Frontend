import { Injectable, computed, signal } from '@angular/core';
import { Producto } from './api';
export interface Linea {
  producto: Producto;
  cantidad: number;
}
@Injectable({ providedIn: 'root' })
export class Ticket {
  lineas = signal<Linea[]>([]);
  total = computed(
    () =>
      this.lineas().reduce((s, l) => s + Math.round(l.producto.precioVenta * 100) * l.cantidad, 0) /
      100,
  );
  agregar(p: Producto) {
    const actual = this.lineas().find((l) => l.producto.idProducto === p.idProducto);
    if ((actual?.cantidad || 0) + 1 > p.stockActual)
      throw new Error('No hay existencias suficientes.');
    this.lineas.update((ls) =>
      actual
        ? ls.map((l) => (l === actual ? { producto: p, cantidad: l.cantidad + 1 } : l))
        : [...ls, { producto: p, cantidad: 1 }],
    );
  }
  cantidad(id: number, cantidad: number) {
    const linea = this.lineas().find((l) => l.producto.idProducto === id);
    if (
      !linea ||
      !Number.isInteger(cantidad) ||
      cantidad < 1 ||
      cantidad > linea.producto.stockActual
    )
      throw new Error('La cantidad debe ser entera y no superar las existencias.');
    this.lineas.update((ls) => ls.map((l) => (l === linea ? { ...l, cantidad } : l)));
  }
  quitar(id: number) {
    this.lineas.update((ls) => ls.filter((l) => l.producto.idProducto !== id));
  }
  limpiar() {
    this.lineas.set([]);
  }
}
