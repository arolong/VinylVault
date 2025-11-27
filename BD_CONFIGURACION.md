# 📦 Base de Datos Configurada - Supabase + Prisma

## ✅ Completado

### 1. **Supabase (BD en la nube)**
- Proyecto: `VinylVault`
- Host: `dpevweadpwpqotbgtviq.supabase.co`
- BD PostgreSQL real, no SQLite
- Alojada en AWS

### 2. **Prisma ORM**
- Schema definido en `prisma/schema.prisma`
- 4 modelos: `User`, `Vinyl`, `Order`, `OrderItem`
- Migraciones en `prisma/migrations/`
- Client generado automáticamente

### 3. **Base de Datos Poblada**
- ✅ 31 vinilos importados (RAP, HIP-HOP, ROCK, SALSA)
- ✅ Usuario de prueba creado
- ✅ Stock configurado para cada álbum
- ✅ Precios en COP

### 4. **API Routes Creadas**

#### GET `/api/vinyls`
```javascript
// Obtener todos los vinilos
fetch('/api/vinyls')
// O filtrar por género
fetch('/api/vinyls?genre=RAP')
```

#### POST `/api/users`
```javascript
// Crear o buscar usuario
const user = await fetch('/api/users', {
  method: 'POST',
  body: JSON.stringify({
    email: 'usuario@example.com',
    name: 'John Doe',
    phone: '+573001234567'
  })
}).then(r => r.json())
```

#### GET `/api/users?email=...`
```javascript
// Obtener usuario con todas sus órdenes
fetch('/api/users?email=usuario@example.com')
```

#### POST `/api/orders`
```javascript
// Crear nueva orden
const order = await fetch('/api/orders', {
  method: 'POST',
  body: JSON.stringify({
    userId: 'user-id',
    items: [
      { vinylId: 'vinyl-id', quantity: 1, price: 50000 }
    ],
    totalPrice: 50000
  })
}).then(r => r.json())
```

#### GET `/api/orders?userId=...`
```javascript
// Obtener órdenes del usuario
fetch('/api/orders?userId=user-id')
```

## 🗄️ Estructura de la BD

### Tabla: `User`
- `id`: String (único)
- `email`: String (único)
- `phone`: String (opcional)
- `name`: String
- `createdAt`: DateTime
- `updatedAt`: DateTime

### Tabla: `Vinyl`
- `id`: String (único)
- `title`: String
- `artist`: String
- `genre`: String (RAP, HIP-HOP, ROCK, SALSA)
- `price`: Float (COP)
- `year`: Int
- `stock`: Int
- `coverImage`: String (ruta: /albums/nombre.png)
- `description`: String
- `createdAt`: DateTime
- `updatedAt`: DateTime

### Tabla: `Order`
- `id`: String (único)
- `userId`: String (relación con User)
- `totalPrice`: Float
- `status`: String (pending, paid, shipped, delivered, cancelled)
- `paymentMethod`: String (mercadopago, paypal, etc)
- `createdAt`: DateTime
- `updatedAt`: DateTime

### Tabla: `OrderItem`
- `id`: String (único)
- `orderId`: String (relación con Order)
- `vinylId`: String (relación con Vinyl)
- `quantity`: Int
- `price`: Float (precio al momento de la compra)

## 🚀 Comandos Útiles

```bash
# Ver BD visualmente
npm run prisma:studio

# Repoblar BD (borra todo y crea de nuevo)
npm run prisma:seed

# Crear nueva migración después de cambiar schema
npx prisma migrate dev --name nombre_cambio

# Ver migraciones aplicadas
npx prisma migrate status
```

## 📝 Notas Importantes

1. **Las credenciales están en `.env.local`** - NO SE SUBEN A GIT
2. **DATABASE_URL** es privada, nunca la compartas
3. **NEXT_PUBLIC_*** variables sí pueden estar públicas (frontend)
4. **Service Role Key** es SECRETO, solo se usa en backend
5. Los cambios se aplican automáticamente a Supabase

## 🔄 Flujo Actual

```
Frontend (Next.js)
   ↓ (fetch)
API Routes (/api/vinyls, /api/orders, /api/users)
   ↓ (usa)
Prisma Client
   ↓ (conecta a)
PostgreSQL Supabase
```

## 🎯 Próximos Pasos

1. **MercadoPago** - Sistema de pagos
2. **Autenticación** - Login de usuarios
3. **Notificaciones** - Email y SMS de confirmación
4. **Admin Panel** - Gestionar vinilos y órdenes
