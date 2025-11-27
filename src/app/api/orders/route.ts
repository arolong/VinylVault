import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { userId, email, name, phone, items, totalPrice } = await req.json();

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: 'Carrito vacío' },
        { status: 400 }
      );
    }

    // Validar stock antes de crear la orden
    for (const item of items) {
      const vinyl = await prisma.vinyl.findUnique({
        where: { id: item.vinylId },
      });

      if (!vinyl || vinyl.stock < item.quantity) {
        return NextResponse.json(
          { error: `Stock insuficiente para ${vinyl?.title || 'producto'}` },
          { status: 400 }
        );
      }
    }

    // Crear o buscar usuario
    let user;
    if (userId) {
      user = await prisma.user.findUnique({ where: { id: userId } });
    } else if (email) {
      // Buscar usuario por email o crear uno nuevo
      user = await prisma.user.upsert({
        where: { email },
        update: {},
        create: {
          email,
          name: name || 'Guest',
          phone: phone || null,
        },
      });
    } else {
      return NextResponse.json(
        { error: 'Se requiere userId o email' },
        { status: 400 }
      );
    }

    // Crear la orden
    const order = await prisma.order.create({
      data: {
        userId: user.id,
        totalPrice,
        status: 'pending',
        paymentMethod: 'mercadopago',
        orderItems: {
          createMany: {
            data: items.map((item: any) => ({
              vinylId: item.vinylId,
              quantity: item.quantity,
              price: item.price,
            })),
          },
        },
      },
      include: {
        orderItems: {
          include: { vinyl: true },
        },
      },
    });

    // Decrementar stock
    for (const item of items) {
      await prisma.vinyl.update({
        where: { id: item.vinylId },
        data: {
          stock: {
            decrement: item.quantity,
          },
        },
      });
    }

    return NextResponse.json(order, { status: 201 });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { error: 'Error al crear la orden' },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { error: 'userId requerido' },
        { status: 400 }
      );
    }

    const orders = await prisma.order.findMany({
      where: { userId },
      include: {
        orderItems: {
          include: { vinyl: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      { error: 'Error al obtener órdenes' },
      { status: 500 }
    );
  }
}
