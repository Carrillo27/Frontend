import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-disenos',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './disenos.html',
  styleUrl: '../../shared/estilos-revision.css',
})
export class Disenos {
  readonly links = [
    { path: 'servicios', label: 'Servicios' },
    { path: 'ventas', label: 'Historial de ventas' },
    { path: 'productos', label: 'Productos' },
    { path: 'proveedores', label: 'Proveedores' },
    { path: 'administracion', label: 'Administración' },
  ];
}
