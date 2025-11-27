import { prisma } from '../src/lib/prisma';

const vinyls = [
  // RAP - 8 álbumes
  {
    title: 'Marshall Mathers LP',
    artist: 'Eminem',
    genre: 'RAP',
    price: 165000,
    year: 2000,
    stock: 10,
    coverImage: '/albums/eminem-marshall-mathers.png',
    description: 'Clásico del rap, segundo álbum de Eminem con hits como Stan y The Way I Am',
  },
  {
    title: 'The Chronic',
    artist: 'Dr. Dre',
    genre: 'RAP',
    price: 172000,
    year: 1992,
    stock: 8,
    coverImage: '/albums/dre-the-chronic.png',
    description: 'Álbum pionero del G-funk, debut solista de Dr. Dre',
  },
  {
    title: 'Illmatic',
    artist: 'Nas',
    genre: 'RAP',
    price: 158000,
    year: 1994,
    stock: 9,
    coverImage: '/albums/nas-illmatic.png',
    description: 'Masterpiece del hip-hop neoyorquino, uno de los mejores álbumes de rap',
  },
  {
    title: 'Reasonable Doubt',
    artist: 'Jay-Z',
    genre: 'RAP',
    price: 162000,
    year: 1996,
    stock: 10,
    coverImage: '/albums/reasonable-doubt-jay-z.png',
    description: 'Debut de Jay-Z, piedra angular del hip-hop de Nueva York',
  },
  {
    title: '2Pacalypse Now',
    artist: '2Pac',
    genre: 'RAP',
    price: 170000,
    year: 1991,
    stock: 7,
    coverImage: '/albums/tupac-2pacalypse-now.png',
    description: 'Álbum debut de Tupac Shakur, crudo y poderoso',
  },
  {
    title: 'Doggystyle',
    artist: 'Snoop Dogg',
    genre: 'RAP',
    price: 167000,
    year: 1993,
    stock: 8,
    coverImage: '/albums/snoop-dogg-doggystyle.png',
    description: 'Debut de Snoop Dogg producido por Dr. Dre, sonido innovador',
  },
  {
    title: 'Enter the Wu-Tang (36 Chambers)',
    artist: 'Wu-Tang Clan',
    genre: 'RAP',
    price: 175000,
    year: 1993,
    stock: 9,
    coverImage: '/albums/wu-tang-36-chambers.png',
    description: 'Revolucionario grupo de hip-hop de 9 miembros',
  },
  {
    title: 'Ready to Die',
    artist: 'The Notorious B.I.G.',
    genre: 'RAP',
    price: 169000,
    year: 1994,
    stock: 10,
    coverImage: '/albums/biggie-ready-to-die.png',
    description: 'Debut de Biggie, un clásico del rap de los 90',
  },
  // HIP-HOP - 8 álbumes
  {
    title: 'Liquid Swords',
    artist: 'GZA',
    genre: 'HIP-HOP',
    price: 160000,
    year: 1995,
    stock: 9,
    coverImage: '/albums/gza-liquid-swords.png',
    description: 'Obra maestra del Wu-Tang Clan con producción magistral',
  },
  {
    title: 'Midnight Marauders',
    artist: 'A Tribe Called Quest',
    genre: 'HIP-HOP',
    price: 155000,
    year: 1993,
    stock: 10,
    coverImage: '/albums/atcq-midnight-marauders.png',
    description: 'Álbum de hip-hop jazz con rimas reflexivas',
  },
  {
    title: 'Low End Theory',
    artist: 'A Tribe Called Quest',
    genre: 'HIP-HOP',
    price: 157000,
    year: 1991,
    stock: 11,
    coverImage: '/albums/atcq-low-end-theory.png',
    description: 'Segundo álbum innovador de A Tribe Called Quest',
  },
  {
    title: 'The Infamous',
    artist: 'Mobb Deep',
    genre: 'HIP-HOP',
    price: 156000,
    year: 1995,
    stock: 11,
    coverImage: '/albums/mobb-deep-the-infamous.png',
    description: 'Álbum debut de Mobb Deep que define el sonido dark de Nueva York',
  },
  {
    title: 'Aquemini',
    artist: 'OutKast',
    genre: 'HIP-HOP',
    price: 168000,
    year: 1998,
    stock: 13,
    coverImage: '/albums/outkast-aquemini.png',
    description: 'Tercer álbum de OutKast con producción innovadora y líricas profundas',
  },
  {
    title: 'Stankonia',
    artist: 'OutKast',
    genre: 'HIP-HOP',
    price: 171000,
    year: 2000,
    stock: 12,
    coverImage: '/albums/outkast-stankonia.png',
    description: 'Cuarto álbum de estudio de OutKast ganador de múltiples Grammy',
  },
  {
    title: 'Tha Doggfather',
    artist: 'Snoop Dogg',
    genre: 'HIP-HOP',
    price: 164000,
    year: 1997,
    stock: 10,
    coverImage: '/albums/snoop-dogg-tha-doggfather.png',
    description: 'Segundo álbum de estudio de Snoop Dogg con producción de Dr. Dre',
  },
  {
    title: 'Tha Last Meal',
    artist: 'Snoop Dogg',
    genre: 'HIP-HOP',
    price: 159000,
    year: 2000,
    stock: 8,
    coverImage: '/albums/snoop-dogg-tha-last-meal.png',
    description: 'Tercer álbum de estudio de Snoop Dogg lleno de colaboraciones',
  },
  // ROCK - 8 álbumes
  {
    title: 'The Dark Side of the Moon',
    artist: 'Pink Floyd',
    genre: 'ROCK',
    price: 189000,
    year: 1973,
    stock: 6,
    coverImage: '/albums/pink-floyd-dark-side.png',
    description: 'Álbum icónico de Pink Floyd, obra maestra del rock progresivo',
  },
  {
    title: 'Led Zeppelin IV',
    artist: 'Led Zeppelin',
    genre: 'ROCK',
    price: 183000,
    year: 1971,
    stock: 7,
    coverImage: '/albums/led-zeppelin-iv.png',
    description: 'Incluye "Stairway to Heaven", uno de los mejores temas de rock',
  },
  {
    title: 'Abbey Road',
    artist: 'The Beatles',
    genre: 'ROCK',
    price: 195000,
    year: 1969,
    stock: 5,
    coverImage: '/albums/beatles-abbey-road.png',
    description: 'Último álbum del estudio de Los Beatles, icónico',
  },
  {
    title: 'The Wall',
    artist: 'Pink Floyd',
    genre: 'ROCK',
    price: 191000,
    year: 1979,
    stock: 6,
    coverImage: '/albums/pink-floyd-the-wall.png',
    description: 'Ópera rock conceptual de Pink Floyd',
  },
  {
    title: 'Appetite for Destruction',
    artist: 'Guns N\' Roses',
    genre: 'ROCK',
    price: 176000,
    year: 1987,
    stock: 8,
    coverImage: '/albums/guns-roses-appetite.png',
    description: 'Álbum debut, incluye "Sweet Child O\' Mine"',
  },
  {
    title: 'Back in Black',
    artist: 'AC/DC',
    genre: 'ROCK',
    price: 177000,
    year: 1980,
    stock: 9,
    coverImage: '/albums/acdc-back-in-black.png',
    description: 'Álbum icónico de AC/DC con el clásico "Back in Black"',
  },
  {
    title: 'Highway to Hell',
    artist: 'AC/DC',
    genre: 'ROCK',
    price: 175000,
    year: 1979,
    stock: 7,
    coverImage: '/albums/acdc-highway-to-hell.png',
    description: 'Penúltimo álbum de AC/DC con Bon Scott antes de su muerte',
  },
  {
    title: 'The White Album',
    artist: 'The Beatles',
    genre: 'ROCK',
    price: 193000,
    year: 1968,
    stock: 6,
    coverImage: '/albums/the-white-album-the-beatles.png',
    description: 'Doble álbum de los Beatles, variado y experimental',
  },
  // SALSA - 7 álbumes
  {
    title: 'Boleros',
    artist: 'Celia Cruz',
    genre: 'SALSA',
    price: 165000,
    year: 1978,
    stock: 8,
    coverImage: '/albums/celia-cruz-boleros.png',
    description: 'Interpretación magistral de Celia Cruz en boleros',
  },
  {
    title: 'Salsa Baúl',
    artist: 'Eddie Santiago',
    genre: 'SALSA',
    price: 158000,
    year: 1986,
    stock: 9,
    coverImage: '/albums/eddie-santiago-salsa-baul.png',
    description: 'Clásico de la salsa romántica con Eddie Santiago',
  },
  {
    title: 'La Llave de mi Corazón',
    artist: 'Juan Luis Guerra',
    genre: 'SALSA',
    price: 162000,
    year: 1989,
    stock: 8,
    coverImage: '/albums/juan-luis-guerra-la-llave-de-mi-corazon.png',
    description: 'Éxito de Juan Luis Guerra mezclando salsa y bachata',
  },
  {
    title: 'Buscando América',
    artist: 'Rubén Blades',
    genre: 'SALSA',
    price: 164000,
    year: 1984,
    stock: 8,
    coverImage: '/albums/ruben-blades-buscando-america.png',
    description: 'Obra maestra de Rubén Blades, socialmente comprometida',
  },
  {
    title: 'De Ti Depende',
    artist: 'Oscar D\'León',
    genre: 'SALSA',
    price: 159000,
    year: 1983,
    stock: 7,
    coverImage: '/albums/oscar-de-leon-de-ti-depende.png',
    description: 'Clásico de la salsa venezolana con Oscar D\'León',
  },
  {
    title: 'El Cantante',
    artist: 'Héctor Lavoe',
    genre: 'SALSA',
    price: 167000,
    year: 1978,
    stock: 7,
    coverImage: '/albums/hector-lavoe-el-cantante.png',
    description: 'Álbum solo de Héctor Lavoe, expresión de su alma',
  },
  {
    title: 'Siembra',
    artist: 'Willie Colón & Rubén Blades',
    genre: 'SALSA',
    price: 170000,
    year: 1978,
    stock: 7,
    coverImage: '/albums/willie-colon-siembra.png',
    description: 'Álbum icónico de salsa, con Pedro Navaja',
  },
];

async function main() {
  console.log('🌱 Iniciando seed de la base de datos...');

  // Limpiar datos existentes
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.vinyl.deleteMany();
  await prisma.user.deleteMany();

  console.log('✨ Base de datos limpia');

  // Insertar vinilos
  for (const vinyl of vinyls) {
    await prisma.vinyl.create({
      data: vinyl,
    });
  }

  console.log(`✅ ${vinyls.length} vinilos agregados a la base de datos`);

  // Crear usuario de prueba
  const user = await prisma.user.create({
    data: {
      name: 'Usuario Test',
      email: 'test@vinylvault.com',
      phone: '+573001234567',
    },
  });

  console.log('✅ Usuario de prueba creado');
  console.log('🎉 Seed completado exitosamente!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Error en seed:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
