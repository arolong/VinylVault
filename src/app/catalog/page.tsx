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
      const url = selectedGenre === "all" 
        ? "http://localhost:3001/api/vinyls"
        : `http://localhost:3001/api/vinyls?genre=${selectedGenre}`;
      
      const response = await fetch(url);
      const data = await response.json();
      setVinyls(data);
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
