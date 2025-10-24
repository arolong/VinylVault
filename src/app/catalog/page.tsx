"use client";

import { useState, useEffect } from "react";
import VinylCard from "@/components/VinylCard";
import GenreFilter from "@/components/GenreFilter";
import { Vinyl, Genre } from "@/types";

export default function CatalogPage() {
  const [vinyls, setVinyls] = useState<Vinyl[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<Genre | "all">("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVinyls();
  }, [selectedGenre]);

  const fetchVinyls = async () => {
    setLoading(true);
    try {
      // Por ahora usamos datos mock, luego conectarás con el backend
      const mockVinyls: Vinyl[] = [
        {
          id: "1",
          title: "Illmatic",
          artist: "Nas",
          genre: "hip-hop",
          price: 125000,
          year: 1994,
          coverImage: "https://picsum.photos/seed/illmatic/400/400",
          description:
            "Album clásico de hip-hop, considerado una obra maestra del género.",
          stock: 15,
        },
        {
          id: "2",
          title: "The Marshall Mathers LP",
          artist: "Eminem",
          genre: "rap",
          price: 145000,
          year: 2000,
          coverImage: "https://picsum.photos/seed/eminem/400/400",
          description:
            "Segundo álbum de estudio de Eminem, uno de los más exitosos.",
          stock: 12,
        },
        {
          id: "3",
          title: "Led Zeppelin IV",
          artist: "Led Zeppelin",
          genre: "rock",
          price: 165000,
          year: 1971,
          coverImage: "https://picsum.photos/seed/ledzeppelin/400/400",
          description: 'Cuarto álbum de estudio, incluye "Stairway to Heaven".',
          stock: 8,
        },
        {
          id: "4",
          title: "Siembra",
          artist: "Willie Colón & Rubén Blades",
          genre: "salsa",
          price: 115000,
          year: 1978,
          coverImage: "https://picsum.photos/seed/siembra/400/400",
          description: "Álbum icónico de salsa, con Pedro Navaja.",
          stock: 10,
        },
        {
          id: "5",
          title: "The Dark Side of the Moon",
          artist: "Pink Floyd",
          genre: "rock",
          price: 178000,
          year: 1973,
          coverImage: "https://picsum.photos/seed/pinkfloyd/400/400",
          description: "Obra maestra del rock progresivo.",
          stock: 20,
        },
        {
          id: "6",
          title: "Ready to Die",
          artist: "The Notorious B.I.G.",
          genre: "rap",
          price: 136000,
          year: 1994,
          coverImage: "https://picsum.photos/seed/biggie/400/400",
          description: "Debut de Biggie, un clásico del rap de los 90.",
          stock: 14,
        },
        {
          id: "7",
          title: "Appetite for Destruction",
          artist: "Guns N' Roses",
          genre: "rock",
          price: 149000,
          year: 1987,
          coverImage: "https://picsum.photos/seed/gnr/400/400",
          description: 'Álbum debut, incluye "Sweet Child O Mine".',
          stock: 18,
        },
        {
          id: "8",
          title: "De Ti Depende",
          artist: "Oscar D'León",
          genre: "salsa",
          price: 112000,
          year: 1983,
          coverImage: "https://picsum.photos/seed/oscar/400/400",
          description: "Clásico de la salsa venezolana.",
          stock: 9,
        },
        {
          id: "9",
          title: "The Chronic",
          artist: "Dr. Dre",
          genre: "hip-hop",
          price: 132000,
          year: 1992,
          coverImage: "https://picsum.photos/seed/drdre/400/400",
          description: "Álbum debut en solitario que definió el G-funk.",
          stock: 11,
        },
        {
          id: "10",
          title: "Nevermind",
          artist: "Nirvana",
          genre: "rock",
          price: 161000,
          year: 1991,
          coverImage: "https://picsum.photos/seed/nirvana/400/400",
          description: "Álbum revolucionario del grunge.",
          stock: 16,
        },
        {
          id: "11",
          title: "Siembra Vol. 2",
          artist: "Héctor Lavoe",
          genre: "salsa",
          price: 120000,
          year: 1980,
          coverImage: "https://picsum.photos/seed/lavoe/400/400",
          description: "Continuación del clásico de salsa.",
          stock: 7,
        },
        {
          id: "12",
          title: "Enter the Wu-Tang",
          artist: "Wu-Tang Clan",
          genre: "hip-hop",
          price: 140000,
          year: 1993,
          coverImage: "https://picsum.photos/seed/wutang/400/400",
          description: "Álbum debut del legendario colectivo.",
          stock: 13,
        },
      ];

      const filtered =
        selectedGenre === "all"
          ? mockVinyls
          : mockVinyls.filter((v) => v.genre === selectedGenre);

      setVinyls(filtered);
    } catch (error) {
      console.error("Error fetching vinyls:", error);
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
