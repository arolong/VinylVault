"use client";

import { useState, useEffect } from "react";
import VinylCard from "@/components/VinylCard";
import GenreFilter from "@/components/GenreFilter";
import { Vinyl, Genre } from "@/types";

export default function CatalogPage() {
  const [vinyls, setVinyls] = useState<Vinyl[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<Genre | "all">("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchVinyls();
  }, [selectedGenre]);

  async function fetchVinyls() {
    try {
      setLoading(true);
      setError(null);

      const url = selectedGenre === "all" 
        ? "/api/vinyls"
        : `/api/vinyls?genre=${selectedGenre.toUpperCase()}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Error al cargar vinilos");
      }

      const data: Vinyl[] = await response.json();
      
      const normalizedData = data.map(vinyl => ({
        ...vinyl,
        genre: vinyl.genre.toLowerCase() as Genre
      }));

      setVinyls(normalizedData);
    } catch (err) {
      console.error("Error fetching vinyls:", err);
      setError("No se pudieron cargar los vinilos");
      setVinyls([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FFF8E7] via-[#F5E6D3] to-[#FFE6CC] py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-5xl font-black text-[#5D4037] mb-2">
            Catalogo de Vinilos
          </h1>
          <p className="text-xl text-[#8D6E63]">
            Descubre nuestra coleccion exclusiva de vinilos
          </p>
        </div>

        <GenreFilter 
          selectedGenre={selectedGenre} 
          onGenreChange={setSelectedGenre}
        />

        {loading && (
          <div className="flex justify-center items-center min-h-96">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D84315]"></div>
          </div>
        )}

        {error && !loading && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {!loading && vinyls.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {vinyls.map((vinyl) => (
              <VinylCard key={vinyl.id} vinyl={vinyl} />
            ))}
          </div>
        )}

        {!loading && vinyls.length === 0 && !error && (
          <div className="text-center py-12">
            <p className="text-xl text-[#8D6E63]">
              No hay vinilos disponibles en esta categoria
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
