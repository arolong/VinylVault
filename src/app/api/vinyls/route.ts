import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const genre = searchParams.get('genre');

    const vinyls = await prisma.vinyl.findMany({
      where: genre ? { genre: genre.toUpperCase() } : {},
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(vinyls);
  } catch (error) {
    console.error('Error fetching vinyls:', error);
    return NextResponse.json(
      { error: 'Error fetching vinyls' },
      { status: 500 }
    );
  }
}
