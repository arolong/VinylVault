# Proyecto Final - Tienda de Vinilos "Vinyl Vault"
### Materia: Desarrollo Web / Programación Web
### Estudiante: Andrés Rolong
### Fecha: Octubre 2025
Repo: https://github.com/arolong/VinylVault.git
---

## ¿Qué hice en este proyecto?

Básicamente creé una tienda online de vinilos desde cero. La idea era hacer algo que se vea bien pero que no fuera súper complicado de entender. Elegí vinilos porque me gusta la música y quería hacer algo diferente a las típicas tiendas de ropa o electrónicos que todos hacen.

## ¿Qué tecnologías usé y por qué?

### Frontend (la parte que se ve)
- **Next.js 15**: Es como React pero más fácil para hacer páginas web. Lo usé porque ya viene con un montón de cosas configuradas y no tuve que instalar mil librerías diferentes.
- **TypeScript**: Es JavaScript pero con tipos. Al principio me costó, ya después le agarre el truco.
- **Tailwind CSS**: Para los estilos. Es tipo CSS pero escribes las clases directo en el HTML. Me ahorró MUCHO tiempo porque no tuve que escribir mucho CSS .

### Backend (la parte de atrás)
- **Express.js**: Un servidor súper simple para hacer una API. Todavía no está conectado a una base de datos real porque eso lo voy a hacer después.

### Colores (Paleta Vintage)
Quería que se viera retro tipo años 70-80, entonces busqué colores vintage en internet:
- Crema: `#F5E6D3` - Para los fondos de las tarjetas
- Marrón: `#5D4037` - Para textos y botones
- Naranja: `#D84315` - Para los botones importantes
- Beige: `#FFF8E7` - Para el fondo general

## Cómo organicé el proyecto

```
vinil-sales/
├── src/
│   ├── app/                    # Las páginas
│   │   ├── page.tsx            # Página de inicio
│   │   ├── catalog/            # Página del catálogo
│   │   └── layout.tsx          # El diseño general
│   │
│   ├── components/             # Componentes reutilizables
│   │   ├── Header.tsx          # La barra de arriba
│   │   ├── Footer.tsx          # El pie de página
│   │   ├── VinylCard.tsx       # Las tarjetas de vinilos
│   │   ├── GenreFilter.tsx     # Los botones de filtro
│   │   └── CartModal.tsx       # El modal del carrito
│   │
│   ├── context/                # Para manejar el estado global
│   │   └── CartContext.tsx     # Todo lo del carrito
│   │
│   ├── types/                  # Los tipos de TypeScript
│   │   └── index.ts            # Interfaces de Vinyl, CartItem, etc.
│   │
│   └── server/                 # Backend (todavía no lo uso)
│       └── index.ts            # API con Express
│
└── public/                     # Imágenes y archivos públicos
```

## Las páginas que hice

### 1. Página Principal (`/`)
Es la página de bienvenida. Tiene:
- Un título grande con el logo del sitio
- Una descripción de qué se vende (rap, hip-hop, rock, salsa)
- Unas tarjetas que explican por qué comprar aquí
- Botones para ir al catálogo por género
**Lo más complicado:** Hacer el diseño responsive para que se vea bien en el celular. Usé `grid` y `flex` de Tailwind para eso.

### 2. Catálogo (`/catalog`)
Aquí es donde se ven todos los vinilos. Tiene:
- Botones arriba para filtrar por género (Rap, Hip-Hop, Rock, Salsa)
- Una cuadrícula con todas las tarjetas de vinilos
- Cada tarjeta muestra:
  - Una imagen (use placeholders porque todavía no tengo las reales)
  - Título del álbum y artista
  - Precio
  - Stock disponible
  - Un badge con el género
  - Botón para agregar al carrito

**Lo más complicado:** Hacer que el filtro funcione. Usé `useState` para guardar el género seleccionado y filtrar el array de vinilos.

## El Carrito de Compras (Lo más difícil)

Esto me costó bastante pero al final quedó bien. Usé Context API de React porque necesitaba compartir el carrito entre todas las páginas.

### ¿Cómo funciona?

1. **CartContext.tsx**: Creé un "contexto" que guarda:
   - Los productos en el carrito
   - Funciones para agregar, quitar, actualizar cantidad
   - Calcular el total

2. **CartModal.tsx**: Un modal que se abre desde la derecha (como Instagram o WhatsApp) y muestra:
   - Todos los productos agregados
   - Botones + y - para cambiar cantidad
   - Botón de eliminar
   - El precio total
   - Botón de "Proceder al pago" (todavía no hace nada)

3. **Header.tsx**: El botón del carrito muestra cuántos productos hay con un numerito rojo

**Lo que aprendí:** Usar Context no es tan difícil como pensaba. Es tipo crear una "caja" de datos que todos pueden ver y modificar.

## Los Datos de los Vinilos

Por ahora son datos "quemados" en el código (mock data). Creé 12 vinilos de ejemplo:

**Hip-Hop:**
- Illmatic - Nas
- The Chronic - Dr. Dre
- Enter the Wu-Tang - Wu-Tang Clan

**Rap:**
- The Marshall Mathers LP - Eminem
- Ready to Die - Biggie

**Rock:**
- Led Zeppelin IV
- Dark Side of the Moon - Pink Floyd
- Appetite for Destruction - Guns N' Roses
- Nevermind - Nirvana

**Salsa:**
- Siembra - Willie Colón
- De Ti Depende - Oscar D'León
- Siembra Vol. 2 - Héctor Lavoe

Cada uno tiene:
```typescript
{
  id: '1',
  title: 'Nombre del álbum',
  artist: 'Artista',
  genre: 'rap' | 'hip-hop' | 'rock' | 'salsa',
  price: 29.99,
  year: 1994,
  coverImage: 'url',
  description: 'Descripción',
  stock: 15
}
```

## Problemas que tuve y cómo los resolví

### Problema 1: Las imágenes no cargaban
**Error:** Next.js no dejaba usar imágenes de internet directamente
**Solución:** Tuve que configurar `next.config.ts` para permitir el dominio `picsum.photos`

### Problema 2: El carrito no funcionaba
**Error:** "useCart must be used within a CartProvider"
**Solución:** Me olvidé de poner el `<CartProvider>` envolviendo todo en `layout.tsx`

### Problema 3: El filtro no actualizaba las tarjetas
**Solución:** Tenía que usar `useEffect` para que cuando cambie el género, se vuelvan a cargar los vinilos

### Problema 4: El modal no se cerraba
**Solución:** Puse un `onClick` en el fondo oscuro para que al hacer clic se cierre

## Cosas interesantes que aprendí

1. **Client vs Server Components**: En Next.js 15, los componentes son del servidor por defecto. Si quieres usar `useState` o `useEffect`, tienes que poner `'use client'` arriba del archivo.

2. **TypeScript ayuda mucho**: Al principio me daba flojera poner los tipos, pero después me di cuenta que me evitaba errores tontos.

3. **Context API es útil**: Antes pasaba props por todos lados. Con Context es mucho más limpio.

4. **Tailwind es rápido**: Poner clases directo en el JSX es más rápido que escribir CSS separado.

5. **Los detalles visuales ayudan**: En vez de usar iconos complicados, usé recursos simples que se integran bien sin necesidad de instalar librerías adicionales.

## Cómo correr el proyecto

```bash
# 1. Instalar las cosas
npm install

# 2. Correr en modo desarrollo
npm run dev

# 3. Abrir en el navegador
# http://localhost:3000
```

## Lo que me falta hacer (TODOs)

- [ ] Conectar con una base de datos real (Supabase o Prisma)
- [ ] Hacer login/registro de usuarios
- [ ] Que el botón de "Proceder al pago" funcione de verdad
- [ ] Agregar búsqueda de vinilos
- [ ] Hacer que se pueda ver el detalle de cada vinilo
- [ ] Agregar reseñas/comentarios
- [ ] Hacer el panel de administrador

## Conclusión

Este proyecto me sirvió para practicar:
- React/Next.js
- TypeScript
- Manejo de estado con Context
- CSS con Tailwind
- Componentes reutilizables
- Pensar en la experiencia del usuario

Lo más difícil fue el carrito, pero al final lo hice funcionar. También aprendí que es importante planear antes de empezar a codear, porque al principio estaba haciendo todo sin saber que hacer después y tuve que reorganizar varias cosas.

La parte del diseño vintage fue divertida. Busqué referencias de diseños retro y traté de copiar esa onda. Creo que quedó bien para ser mi primer proyecto así.

---

## Recursos que usé para aprender

- Documentación oficial de Next.js
- Videos de YouTube sobre Context API
- Stack Overflow 
- ChatGPT para explicarme conceptos que no entendía
- Tailwind CSS docs para ver qué clases usar


