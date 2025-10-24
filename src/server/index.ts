import express, { Request, Response } from 'express';
import cors from 'cors';
import { Vinyl } from '../types';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Datos de ejemplo - Aquí luego conectarás con Supabase/Prisma
const vinyls: Vinyl[] = [
    {
        id: '1',
        title: 'Illmatic',
        artist: 'Nas',
        genre: 'hip-hop',
        price: 125000,
        year: 1994,
        coverImage: 'https://picsum.photos/seed/illmatic/400/400',
        description: 'Album clásico de hip-hop, considerado una obra maestra del género.',
        stock: 15
    },
    {
        id: '2',
        title: 'The Marshall Mathers LP',
        artist: 'Eminem',
        genre: 'rap',
        price: 145000,
        year: 2000,
        coverImage: 'https://picsum.photos/seed/eminem/400/400',
        description: 'Segundo álbum de estudio de Eminem, uno de los más exitosos.',
        stock: 12
    },
    {
        id: '3',
        title: 'Led Zeppelin IV',
        artist: 'Led Zeppelin',
        genre: 'rock',
        price: 165000,
        year: 1971,
        coverImage: 'https://picsum.photos/seed/ledzeppelin/400/400',
        description: 'Cuarto álbum de estudio, incluye "Stairway to Heaven".',
        stock: 8
    },
    {
        id: '4',
        title: 'Siembra',
        artist: 'Willie Colón & Rubén Blades',
        genre: 'salsa',
        price: 115000,
        year: 1978,
        coverImage: 'https://picsum.photos/seed/siembra/400/400',
        description: 'Álbum icónico de salsa, con Pedro Navaja.',
        stock: 10
    },
    {
        id: '5',
        title: 'The Dark Side of the Moon',
        artist: 'Pink Floyd',
        genre: 'rock',
        price: 178000,
        year: 1973,
        coverImage: 'https://picsum.photos/seed/pinkfloyd/400/400',
        description: 'Obra maestra del rock progresivo.',
        stock: 20
    },
    {
        id: '6',
        title: 'Ready to Die',
        artist: 'The Notorious B.I.G.',
        genre: 'rap',
        price: 136000,
        year: 1994,
        coverImage: 'https://picsum.photos/seed/biggie/400/400',
        description: 'Debut de Biggie, un clásico del rap de los 90.',
        stock: 14
    },
    {
        id: '7',
        title: 'Appetite for Destruction',
        artist: "Guns N' Roses",
        genre: 'rock',
        price: 149000,
        year: 1987,
        coverImage: 'https://picsum.photos/seed/gnr/400/400',
        description: 'Álbum debut, incluye "Sweet Child O Mine".',
        stock: 18
    },
    {
        id: '8',
        title: 'De Ti Depende',
        artist: 'Oscar D\'León',
        genre: 'salsa',
        price: 112000,
        year: 1983,
        coverImage: 'https://picsum.photos/seed/oscar/400/400',
        description: 'Clásico de la salsa venezolana.',
        stock: 9
    }
];

// Routes
app.get('/api/vinyls', (req: Request, res: Response) => {
    const { genre } = req.query;

    if (genre && typeof genre === 'string') {
        const filtered = vinyls.filter(v => v.genre === genre);
        return res.json(filtered);
    }

    res.json(vinyls);
});

app.get('/api/vinyls/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const vinyl = vinyls.find(v => v.id === id);

    if (!vinyl) {
        return res.status(404).json({ error: 'Vinyl not found' });
    }

    res.json(vinyl);
});

app.get('/api/genres', (req: Request, res: Response) => {
    res.json(['rap', 'hip-hop', 'rock', 'salsa']);
});

// Preparado para Supabase/Prisma
// TODO: Conectar con base de datos real
app.post('/api/vinyls', (req: Request, res: Response) => {
    // Aquí irá la lógica para crear vinilos con Prisma
    res.status(501).json({ message: 'Not implemented yet - will use Prisma/Supabase' });
});

app.put('/api/vinyls/:id', (req: Request, res: Response) => {
    // Aquí irá la lógica para actualizar vinilos con Prisma
    res.status(501).json({ message: 'Not implemented yet - will use Prisma/Supabase' });
});

app.delete('/api/vinyls/:id', (req: Request, res: Response) => {
    // Aquí irá la lógica para eliminar vinilos con Prisma
    res.status(501).json({ message: 'Not implemented yet - will use Prisma/Supabase' });
});

app.listen(PORT, () => {
    console.log(`🎵 Vinyl Shop API running on http://localhost:${PORT}`);
});

export default app;
