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
    // RAP
    {
        id: '1',
        title: 'The Marshall Mathers LP',
        artist: 'Eminem',
        genre: 'rap',
        price: 145000,
        year: 2000,
        coverImage: '/albums/eminem-marshall-mathers.png',
        description: 'Segundo álbum de estudio de Eminem, uno de los más exitosos.',
        stock: 12
    },
    {
        id: '2',
        title: 'Ready to Die',
        artist: 'The Notorious B.I.G.',
        genre: 'rap',
        price: 136000,
        year: 1994,
        coverImage: '/albums/biggie-ready-to-die.png',
        description: 'Debut de Biggie, un clásico del rap de los 90.',
        stock: 14
    },
    {
        id: '3',
        title: 'Doggystyle',
        artist: 'Snoop Dogg',
        genre: 'rap',
        price: 142000,
        year: 1993,
        coverImage: '/albums/snoop-dogg-doggystyle.png',
        description: 'Debut icónico de Snoop Dogg, productor de Dr. Dre.',
        stock: 11
    },
    {
        id: '4',
        title: 'The Chronic',
        artist: 'Dr. Dre',
        genre: 'rap',
        price: 138000,
        year: 1992,
        coverImage: '/albums/dre-the-chronic.png',
        description: 'Álbum revolucionario que definió el sonido del rap de los 90.',
        stock: 13
    },
    {
        id: '5',
        title: '2Pacalypse Now',
        artist: '2Pac',
        genre: 'rap',
        price: 140000,
        year: 1991,
        coverImage: '/albums/tupac-2pacalypse-now.png',
        description: 'Álbum debut de Tupac Shakur, crudo y poderoso.',
        stock: 10
    },
    {
        id: '5b',
        title: 'All Eyez on Me',
        artist: '2Pac',
        genre: 'rap',
        price: 148000,
        year: 1996,
        coverImage: '/albums/tupac-all-eyez-on-me.png',
        description: 'Doble álbum de 2Pac, uno de los más vendidos en la historia del rap.',
        stock: 9
    },
    {
        id: '5c',
        title: 'Tha Doggfather',
        artist: 'Snoop Dogg',
        genre: 'rap',
        price: 144000,
        year: 1997,
        coverImage: '/albums/snoop-dogg-tha-doggfather.png',
        description: 'Segundo álbum de estudio de Snoop Dogg con producción de Dr. Dre.',
        stock: 10
    },
    {
        id: '5d',
        title: 'Tha Last Meal',
        artist: 'Snoop Dogg',
        genre: 'rap',
        price: 139000,
        year: 2000,
        coverImage: '/albums/snoop-dogg-tha-last-meal.png',
        description: 'Tercer álbum de estudio de Snoop Dogg lleno de colaboraciones.',
        stock: 8
    },
    // HIP-HOP
    {
        id: '6',
        title: 'Illmatic',
        artist: 'Nas',
        genre: 'hip-hop',
        price: 125000,
        year: 1994,
        coverImage: '/albums/nas-illmatic.png',
        description: 'Album clásico de hip-hop, considerado una obra maestra del género.',
        stock: 15
    },
    {
        id: '7',
        title: 'Liquid Swords',
        artist: 'GZA',
        genre: 'hip-hop',
        price: 130000,
        year: 1995,
        coverImage: '/albums/gza-liquid-swords.png',
        description: 'Obra maestra del Wu-Tang Clan con producción magistral.',
        stock: 12
    },
    {
        id: '8',
        title: 'Enter the Wu-Tang (36 Chambers)',
        artist: 'Wu-Tang Clan',
        genre: 'hip-hop',
        price: 128000,
        year: 1993,
        coverImage: '/albums/wu-tang-36-chambers.png',
        description: 'Álbum revolucionario que cambió el hip-hop para siempre.',
        stock: 18
    },
    {
        id: '9',
        title: 'Midnight Marauders',
        artist: 'A Tribe Called Quest',
        genre: 'hip-hop',
        price: 127000,
        year: 1993,
        coverImage: '/albums/atcq-midnight-marauders.png',
        description: 'Álbum de hip-hop jazz con rimas reflexivas.',
        stock: 14
    },
    {
        id: '10',
        title: 'Low End Theory',
        artist: 'A Tribe Called Quest',
        genre: 'hip-hop',
        price: 126000,
        year: 1991,
        coverImage: '/albums/atcq-low-end-theory.png',
        description: 'Segundo álbum innovador de A Tribe Called Quest.',
        stock: 11
    },
    {
        id: '10b',
        title: 'Aquemini',
        artist: 'OutKast',
        genre: 'hip-hop',
        price: 132000,
        year: 1998,
        coverImage: '/albums/outkast-aquemini.png',
        description: 'Tercer álbum de OutKast con producción innovadora y líricas profundas.',
        stock: 13
    },
    {
        id: '10c',
        title: 'Stankonia',
        artist: 'OutKast',
        genre: 'hip-hop',
        price: 134000,
        year: 2000,
        coverImage: '/albums/outkast-stankonia.png',
        description: 'Cuarto álbum de estudio de OutKast ganador de múltiples Grammy.',
        stock: 12
    },
    {
        id: '10d',
        title: 'The Infamous',
        artist: 'Mobb Deep',
        genre: 'hip-hop',
        price: 128000,
        year: 1995,
        coverImage: '/albums/mobb-deep-the-infamous.png',
        description: 'Álbum debut de Mobb Deep que define el sonido dark de Nueva York.',
        stock: 11
    },
    // ROCK
    {
        id: '11',
        title: 'Led Zeppelin IV',
        artist: 'Led Zeppelin',
        genre: 'rock',
        price: 165000,
        year: 1971,
        coverImage: '/albums/led-zeppelin-iv.png',
        description: 'Cuarto álbum de estudio, incluye "Stairway to Heaven".',
        stock: 8
    },
    {
        id: '12',
        title: 'The Dark Side of the Moon',
        artist: 'Pink Floyd',
        genre: 'rock',
        price: 178000,
        year: 1973,
        coverImage: '/albums/pink-floyd-dark-side.png',
        description: 'Obra maestra del rock progresivo.',
        stock: 20
    },
    {
        id: '13',
        title: 'Appetite for Destruction',
        artist: "Guns N' Roses",
        genre: 'rock',
        price: 149000,
        year: 1987,
        coverImage: '/albums/guns-roses-appetite.png',
        description: 'Álbum debut, incluye "Sweet Child O Mine".',
        stock: 18
    },
    {
        id: '14',
        title: 'The Wall',
        artist: 'Pink Floyd',
        genre: 'rock',
        price: 175000,
        year: 1979,
        coverImage: '/albums/pink-floyd-the-wall.png',
        description: 'Álbum conceptual épico, una de las mejores obras del rock.',
        stock: 16
    },
    {
        id: '15',
        title: 'Abbey Road',
        artist: 'The Beatles',
        genre: 'rock',
        price: 155000,
        year: 1969,
        coverImage: '/albums/beatles-abbey-road.png',
        description: 'Penúltimo álbum de The Beatles, con grandes clásicos.',
        stock: 22
    },
    {
        id: '15b',
        title: 'Back in Black',
        artist: 'AC/DC',
        genre: 'rock',
        price: 152000,
        year: 1980,
        coverImage: '/albums/acdc-back-in-black.png',
        description: 'Álbum icónico de AC/DC con el clásico "Back in Black".',
        stock: 19
    },
    {
        id: '15c',
        title: 'Highway to Hell',
        artist: 'AC/DC',
        genre: 'rock',
        price: 150000,
        year: 1979,
        coverImage: '/albums/acdc-highway-to-hell.png',
        description: 'Penúltimo álbum de AC/DC con Bon Scott antes de su muerte.',
        stock: 17
    },
    {
        id: '15d',
        title: 'The Wall (Pink Floyd)',
        artist: 'Pink Floyd',
        genre: 'rock',
        price: 180000,
        year: 1979,
        coverImage: '/albums/pink-floyd-the-wall-v2.png',
        description: 'Álbum doble conceptual, una de las obras maestras del rock progresivo.',
        stock: 14
    },
    // SALSA
    {
        id: '16',
        title: 'Siembra',
        artist: 'Willie Colón & Rubén Blades',
        genre: 'salsa',
        price: 115000,
        year: 1978,
        coverImage: '/albums/willie-colon-siembra.png',
        description: 'Álbum icónico de salsa, con Pedro Navaja.',
        stock: 10
    },
    {
        id: '17',
        title: 'De Ti Depende',
        artist: 'Oscar D\'León',
        genre: 'salsa',
        price: 112000,
        year: 1983,
        coverImage: '/albums/oscar-de-leon-de-ti-depende.png',
        description: 'Clásico de la salsa venezolana.',
        stock: 9
    },
    {
        id: '18',
        title: 'El Cantante',
        artist: 'Héctor Lavoe',
        genre: 'salsa',
        price: 118000,
        year: 1978,
        coverImage: '/albums/hector-lavoe-el-cantante.png',
        description: 'Álbum solo de Héctor Lavoe, expresión de su alma.',
        stock: 8
    },
    {
        id: '19',
        title: 'Boleros',
        artist: 'Celia Cruz',
        genre: 'salsa',
        price: 120000,
        year: 1980,
        coverImage: '/albums/celia-cruz-boleros.png',
        description: 'Álbum de boleros de Celia Cruz, la reina de la salsa, con sus mejores interpretaciones.',
        stock: 13
    },
    {
        id: '20',
        title: 'Salsa Baúl',
        artist: 'Eddie Santiago',
        genre: 'salsa',
        price: 114000,
        year: 1984,
        coverImage: '/albums/eddie-santiago-salsa-baul.png',
        description: 'Colección especial de Eddie Santiago con lo mejor de su repertorio salsero.',
        stock: 11
    },
    {
        id: '20b',
        title: 'La Llave de mi Corazón',
        artist: 'Juan Luis Guerra',
        genre: 'salsa',
        price: 116000,
        year: 1989,
        coverImage: '/albums/juan-luis-guerra-la-llave-de-mi-corazon.png',
        description: 'Álbum romántico de Juan Luis Guerra con sus baladas salseras más emotivas.',
        stock: 12
    },
    {
        id: '20d',
        title: 'Buscando América',
        artist: 'Rubén Blades',
        genre: 'salsa',
        price: 117000,
        year: 1984,
        coverImage: '/albums/ruben-blades-buscando-america.png',
        description: 'Álbum de protesta social de Rubén Blades, tocando temas políticos.',
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
