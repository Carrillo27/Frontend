import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { CatalogoDiseno } from './catalogo-diseno';
import { Catalogo } from './catalogo';

@Component({
  selector: 'app-pagina-catalogo',
  imports: [CatalogoDiseno],
  templateUrl: './pagina-catalogo.html',
  styleUrl: '../estilos-revision.css',
})
export class PaginaCatalogo {
  readonly config: Catalogo;
  readonly secundario?: Catalogo;

  constructor(route: ActivatedRoute) {
    this.config = route.snapshot.data['catalogo'];
    this.secundario = route.snapshot.data['secundario'];
  }
}

export function rutaCatalogo(path: string, catalogo: Catalogo, secundario?: Catalogo): Route {
  return { path, component: PaginaCatalogo, data: { catalogo, secundario } };
}
