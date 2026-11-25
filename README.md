# Papelería Sol — frontend Angular

Repositorio independiente de la interfaz de Papelería Sol. Incluye las pantallas, estilos, navegación, componentes y datos de muestra. Para recorrer la demostración no se necesita instalar Java, GlassFish, PostgreSQL ni descargar el proyecto original.

## Requisitos

- Node.js 24.15 o superior dentro de la versión 24. El proyecto se verificó con Node.js 24.17.0 y npm 11.13.0.
- npm y acceso a internet para instalar las dependencias por primera vez.

Angular CLI se instala como dependencia del proyecto; no hace falta instalarlo globalmente.

## Ejecutar después de descargar o clonar

Abre una terminal en la carpeta que contiene este `package.json` y ejecuta:

```sh
npm ci
npm start
```

Abre [http://localhost:4200](http://localhost:4200). Mantén la terminal abierta mientras uses la aplicación. Para detenerla, pulsa `Ctrl+C`.

Si el puerto está ocupado, ejecuta `npm start -- --port 4300` y abre [http://localhost:4300](http://localhost:4300).

## Recorrer todas las pantallas sin backend

1. En el acceso, pulsa **Obtener código**.
2. Escribe **123** y pulsa **Validar**.
3. Pulsa **Iniciar sesión** para entrar en modo de demostración.
4. Desde caja, abre **Diseños en revisión** para recorrer los catálogos y administración. El menú **Usuario** también permite abrir caja, reportes y productos.

El código `123` habilita la demostración en el navegador; no es la contraseña de una cuenta real. La sesión de demostración se mantiene al recargar la misma pestaña y se elimina al cerrar sesión.

Pantallas incluidas:

| Pantalla | Ruta |
| --- | --- |
| Acceso | `/login` |
| Acceso de demostración | `/recuperacion` |
| Caja | `/caja` |
| Reportes y operaciones de caja | `/reportes` |
| Consulta de productos | `/productos` |
| Servicios con datos de muestra | `/disenos/servicios` |
| Historial de ventas con datos de muestra | `/disenos/ventas` |
| Productos con datos de muestra | `/disenos/productos` |
| Proveedores con datos de muestra | `/disenos/proveedores` |
| Usuarios y roles | `/disenos/administracion/usuarios` |
| Categorías | `/disenos/administracion/categorias` |
| Métodos de pago | `/disenos/administracion/metodos` |
| Equipos de cómputo | `/disenos/administracion/equipos` |

En demostración puedes navegar, abrir ventanas y probar las interacciones de las vistas. Los catálogos de **Diseños en revisión** contienen datos de ejemplo. Las consultas de productos de caja y del módulo `/productos` no cargan inventario real; los reportes tampoco consultan ventas reales. El cobro y las operaciones que guardan datos en el sistema están deshabilitados.

## Estructura

```text
src/app/features/   Pantallas y módulos (cada pantalla con su .ts, .html y datos .datos.ts)
src/app/components/ Todos los componentes reutilizables, uno por carpeta (.ts, .html, .css)
src/app/core/       Estado del navegador y cliente de la API
public/            Recursos estáticos
angular.json       Configuración de Angular
package.json       Scripts y dependencias
package-lock.json  Versiones exactas de las dependencias
proxy.conf.json    Configuración de conexión opcional a la API
```

### Componentes (`src/app/components`)

Se importan desde un solo punto: `import { Modal, PanelEquipos } from '../../components';`

| Carpeta | Componente | Uso |
| --- | --- | --- |
| `layout/` | `Layout` | Barra superior, menú de perfil y pie |
| `modal/` | `Modal` | Ventanas emergentes |
| `encabezado-pagina/` | `EncabezadoPagina` | Título y subtítulo de pantallas |
| `catalogo/` | `CatalogoDiseno` | Tabla, búsqueda y formulario de catálogos |
| `panel-equipos/` | `PanelEquipos` | Computadoras de la caja y de administración |
| `panel-servicios/` | `PanelServicios` | Servicios rápidos de la caja |
| `estilos/` | — | Estilos compartidos de las pantallas de diseño |

### Responsive

La interfaz se adapta a escritorio, tablet y celular. La caja pasa de tres columnas a computadoras arriba con ticket y cobro abajo (≤ 1050 px) y a una sola columna (≤ 650 px). El panel de computadoras ajusta sus columnas según el espacio que tiene (2 en la barra lateral, 4 u 8 a lo ancho y tarjetas compactas en celular).

## Compilar

```sh
npm run build
```

Los archivos compilados se generan en `dist/frontend/browser`. Para publicarlos se necesita un servidor web que redirija las rutas de Angular a `index.html`.

## Conexión opcional con el backend

El acceso con usuario y contraseña reales, las consultas de inventario y el registro de ventas requieren la API del sistema. Esa API y su base de datos no están incluidas en este repositorio.

`proxy.conf.json` reenvía las solicitudes de `/papeleria-api/**` a `http://localhost:9080` cuando se usa `npm start`. Es solo configuración del frontend: no instala ni inicia el backend. Para revisar las pantallas sin esa API, utiliza el modo de demostración.

## Archivos del repositorio

Sube el contenido de esta carpeta como raíz del repositorio, incluido `package-lock.json` y los archivos de configuración. `.gitignore` excluye `node_modules`, `dist` y la caché de Angular. Quien descargue el repositorio reconstruye las dependencias con `npm ci`.
