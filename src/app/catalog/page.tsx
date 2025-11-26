"use client";

import { useState, useEffect } from "react";
import VinylCard from "@/components/VinylCard";
import GenreFilter from "@/components/GenreFilter";
import { Vinyl, Genre } from "@/types";

// Datos fallback en caso de que la API no esté disponible
const FALLBACK_VINYLS: Vinyl[] = [
  {
    id: '1',
    title: 'The Marshall Mathers LP',
    artist: 'Eminem',
    genre: 'rap',
    price: 145000,
    year: 2000,
    coverImage: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=400&fit=crop',
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
    coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
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
    coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
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
    coverImage: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=400&fit=crop',
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
    coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
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
    coverImage: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=400&fit=crop',
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
    coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
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
    coverImage: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=400&fit=crop',
    description: 'Tercer álbum de estudio de Snoop Dogg lleno de colaboraciones.',
    stock: 8
  },
  {
    id: '6',
    title: 'Illmatic',
    artist: 'Nas',
    genre: 'hip-hop',
    price: 125000,
    year: 1994,
    coverImage: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop',
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
    coverImage: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=400&fit=crop',
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
    coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
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
    coverImage: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop',
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
    coverImage: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=400&fit=crop',
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
    coverImage: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop',
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
    coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
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
    coverImage: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=400&fit=crop',
    description: 'Álbum debut de Mobb Deep que define el sonido dark de Nueva York.',
    stock: 11
  },
  {
    id: '11',
    title: 'Led Zeppelin IV',
    artist: 'Led Zeppelin',
    genre: 'rock',
    price: 165000,
    year: 1971,
    coverImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop',
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
    coverImage: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop',
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
    coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
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
    coverImage: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=400&fit=crop',
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
    coverImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop',
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
    coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
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
    coverImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop',
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
    coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
    description: 'Álbum doble conceptual, una de las obras maestras del rock progresivo.',
    stock: 14
  },
  {
    id: '16',
    title: 'Siembra',
    artist: 'Willie Colón & Rubén Blades',
    genre: 'salsa',
    price: 115000,
    year: 1978,
    coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
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
    coverImage: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=400&fit=crop',
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
    coverImage: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop',
    description: 'Álbum solo de Héctor Lavoe, expresión de su alma.',
    stock: 8
  },
  {
    id: '19',
    title: 'Colección de Oro',
    artist: 'Celia Cruz',
    genre: 'salsa',
    price: 120000,
    year: 1980,
    coverImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop',
    description: 'Lo mejor de Celia Cruz, la reina de la salsa.',
    stock: 13
  },
  {
    id: '20',
    title: 'Vuelvo a Empezar',
    artist: 'Eddie Santiago',
    genre: 'salsa',
    price: 114000,
    year: 1984,
    coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
    description: 'Álbum romántico de Eddie Santiago con balada salsera.',
    stock: 11
  },
  {
    id: '20b',
    title: 'El Sueño del Curro',
    artist: 'Juan Luis Guerra',
    genre: 'salsa',
    price: 116000,
    year: 1989,
    coverImage: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=400&fit=crop',
    description: 'Álbum ganador de Grammy con éxitos internacionales de Juan Luis Guerra.',
    stock: 12
  },
  {
    id: '20c',
    title: 'La Murga de Oro',
    artist: 'Rubén Blades',
    genre: 'salsa',
    price: 113000,
    year: 1980,
    coverImage: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop',
    description: 'Álbum clásico de Rubén Blades con la Fania All-Stars.',
    stock: 10
  },
  {
    id: '20d',
    title: 'Buscando América',
    artist: 'Rubén Blades',
    genre: 'salsa',
    price: 117000,
    year: 1984,
    coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
    description: 'Álbum de protesta social de Rubén Blades, tocando temas políticos.',
    stock: 9
  },
  {
    id: '20e',
    title: 'La Voz Timba',
    artist: 'Isaac Delgado',
    genre: 'salsa',
    price: 111000,
    year: 1990,
    coverImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop',
    description: 'Álbum de timba cubana con rítmos modernos y contagiosos.',
    stock: 11
  }
];

export default function CatalogPage() {
  const [vinyls, setVinyls] = useState<Vinyl[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<Genre | "all">("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchVinyls();
  }, [selectedGenre]);

  const fetchVinyls = async () => {
    setLoading(true);
    setError(null);
    try {
      const url = selectedGenre === "all" 
        ? "http://localhost:3001/api/vinyls"
        : `http://localhost:3001/api/vinyls?genre=${selectedGenre}`;
      
      const response = await fetch(url, { 
        signal: AbortSignal.timeout(5000) 
      });
      
      if (!response.ok) throw new Error("API Error");
      
      const data = await response.json();
      setVinyls(data);
    } catch (error) {
      console.log("Usando datos fallback...", error);
      // Usar datos fallback si la API falla
      if (selectedGenre === "all") {
        setVinyls(FALLBACK_VINYLS);
      } else {
        setVinyls(FALLBACK_VINYLS.filter(v => v.genre === selectedGenre));
      }
      setError(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-vintage-brown mb-4">
          Catálogo de Vinilos
        </h1>
        <p className="text-xl text-vintage-brown/70">
          Explora nuestra colección de vinilos clásicos
        </p>
      </div>

      <GenreFilter
        selectedGenre={selectedGenre}
        onGenreChange={setSelectedGenre}
      />

      {loading ? (
        <div className="text-center py-20">
          <div className="inline-block animate-spin text-6xl">🎵</div>
          <p className="mt-4 text-xl text-vintage-brown">Cargando vinilos...</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {vinyls.map((vinyl) => (
              <VinylCard key={vinyl.id} vinyl={vinyl} />
            ))}
          </div>

          {vinyls.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">😔</div>
              <p className="text-2xl text-vintage-brown">
                No se encontraron vinilos en esta categoría
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
