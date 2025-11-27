import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email, name, phone } = await req.json();

    if (!email || !name) {
      return NextResponse.json(
        { error: 'Email y nombre requeridos' },
        { status: 400 }
      );
    }

    // Buscar o crear usuario
    let user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          name,
          phone: phone || null,
        },
      });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error creating/fetching user:', error);
    return NextResponse.json(
      { error: 'Error al procesar usuario' },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json(
        { error: 'Email requerido' },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        orders: {
          include: {
            orderItems: {
              include: { vinyl: true },
            },
          },
        },
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'Usuario no encontrado' },
        { status: 404 }
      );
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json(
      { error: 'Error al obtener usuario' },
      { status: 500 }
    );
  }
}
