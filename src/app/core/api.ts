import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export interface Usuario {
  idUsuario: number;
  idSucursal: number;
  nombres: string;
  apellidoPaterno: string;
  username: string;
}
export interface Producto {
  idProducto: number;
  codigoBarras: string;
  nombre: string;
  categoria: string;
  precioCompra: number;
  precioVenta: number;
  stockActual: number;
  stockMinimo: number;
}
export interface EstadoCaja {
  abierta: boolean;
  idTurno?: number;
  efectivoEsperado: number;
}
export interface Resultado {
  mensaje: string;
  idVenta?: number;
  total?: number;
  recibido?: number;
  cambio?: number;
  diferencia?: number;
}

@Injectable({ providedIn: 'root' })
export class Api {
  private http = inject(HttpClient);
  private base = '/papeleria-api/api/';
  get<T>(ruta: string) {
    return firstValueFrom(this.http.get<T>(this.base + ruta));
  }
  post<T>(ruta: string, body: unknown = {}) {
    return firstValueFrom(
      this.http.post<T>(this.base + ruta, body, { headers: { 'X-POS-Request': '1' } }),
    );
  }
  productos(busqueda: string) {
    return this.get<Producto[]>('productos?busqueda=' + encodeURIComponent(busqueda));
  }
}
export function mensajeError(error: unknown): string {
  if (error instanceof HttpErrorResponse) {
    if (error.status === 0 || error.status === 504)
      return 'No se pudo confirmar la respuesta del servidor. Si estabas cobrando o moviendo dinero, verifica la operación antes de repetirla.';
    if (error.status === 401)
      return 'La sesión terminó o las credenciales son incorrectas. Vuelve a iniciar sesión.';
    return error.error?.mensaje || 'No se pudo completar la operación.';
  }
  return error instanceof Error ? error.message : 'No se pudo completar la operación.';
}
