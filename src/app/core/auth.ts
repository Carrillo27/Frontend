import { Injectable, inject, signal } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Api, Usuario } from './api';

@Injectable({ providedIn: 'root' })
export class Auth {
  private api = inject(Api);
  usuario = signal<Usuario | null>(null);
  demo = signal(sessionStorage.getItem('papeleria-demo') === '1');
  private carga?: Promise<void>;
  restaurar() {
    return (this.carga ??= this.api
      .get<Usuario>('auth/me')
      .then((u) => {
        this.usuario.set(u);
      })
      .catch(() => {
        this.usuario.set(null);
      }));
  }
  async ingresar(username: string, password: string) {
    const u = await this.api.post<Usuario>('auth/login', { username, password });
    this.usuario.set(u);
    this.demo.set(false);
    sessionStorage.removeItem('papeleria-demo');
    this.carga = Promise.resolve();
  }
  demostracion() {
    this.demo.set(true);
    this.usuario.set(null);
    sessionStorage.setItem('papeleria-demo', '1');
  }
  async salir() {
    if (!this.demo()) await this.api.post('auth/logout');
    this.usuario.set(null);
    this.demo.set(false);
    sessionStorage.removeItem('papeleria-demo');
    this.carga = undefined;
  }
}
export const sesionGuard: CanActivateFn = async () => {
  const auth = inject(Auth),
    router = inject(Router);
  if (!auth.demo()) await auth.restaurar();
  return !!auth.usuario() || auth.demo() || router.createUrlTree(['/login']);
};
