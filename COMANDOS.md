# Comandos Útiles

## Para empezar a trabajar

```bash
npm install
npm run dev
```

Abre: http://localhost:3000

## Si algo no funciona

### El puerto 3000 está ocupado

```bash
# En PowerShell
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process
```

### Borrar caché y reinstalar

```bash
Remove-Item .next -Recurse -Force
Remove-Item node_modules -Recurse -Force
npm install
npm run dev
```

## Scripts disponibles

- `npm run dev` - Corre el frontend
- `npm run dev:server` - Corre solo el backend (no está conectado aún)
- `npm run dev:all` - Corre ambos
- `npm run build` - Compila para producción
- `npm run lint` - Revisa errores de código

## Archivos importantes

- `src/app/page.tsx` - Página principal
- `src/app/catalog/page.tsx` - Catálogo de vinilos
- `src/components/` - Componentes reutilizables
- `src/context/CartContext.tsx` - Lógica del carrito
- `src/app/globals.css` - Estilos globales (colores vintage)

## Personalizar colores

Edita `src/app/globals.css`:

```css
--vintage-cream: #f5e6d3; /* Cambia estos valores */
--vintage-brown: #5d4037;
--vintage-orange: #d84315;
```

## Agregar un vinilo nuevo

Edita `src/app/catalog/page.tsx`, busca el array `mockVinyls` y agrega:

```typescript
{
  id: '13',
  title: 'Tu Álbum',
  artist: 'Tu Artista',
  genre: 'rock',  // 'rap' | 'hip-hop' | 'rock' | 'salsa'
  price: 120000,  // En pesos colombianos
  year: 2020,
  coverImage: 'https://picsum.photos/seed/tualbum/400/400',
  description: 'Descripción del álbum',
  stock: 10
}
```

## Problemas comunes

**Error: "useCart must be used within a CartProvider"**

- Asegúrate que `<CartProvider>` esté en `layout.tsx`

**Las imágenes no cargan**

- Revisa que `next.config.ts` tenga `picsum.photos` configurado

**El carrito no abre**

- Verifica que el estado `isCartOpen` esté funcionando en `layout.tsx`

---

¿Dudas? Lee **EXPLICACION_PROYECTO.md** para más detalles
