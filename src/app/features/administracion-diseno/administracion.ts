import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-administracion-diseno',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './administracion.html',
  styleUrl: '../../shared/estilos-revision.css',
})
export class AdministracionDiseno {
  readonly tabs = [
    { path: 'usuarios', label: 'Usuarios y roles' },
    { path: 'categorias', label: 'Categorías' },
    { path: 'metodos', label: 'Métodos de pago' },
    { path: 'equipos', label: 'Equipos de cómputo' },
  ];
}
