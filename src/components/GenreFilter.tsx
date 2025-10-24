"use client";

import { Genre } from "@/types";

interface GenreFilterProps {
  selectedGenre: Genre | "all";
  onGenreChange: (genre: Genre | "all") => void;
}

export default function GenreFilter({
  selectedGenre,
  onGenreChange,
}: GenreFilterProps) {
  const genres: { value: Genre | "all"; label: string; emoji: string }[] = [
    { value: "all", label: "Todos", emoji: "🎵" },
    { value: "rap", label: "Rap", emoji: "🎤" },
    { value: "hip-hop", label: "Hip-Hop", emoji: "🎧" },
    { value: "rock", label: "Rock", emoji: "🎸" },
    { value: "salsa", label: "Salsa", emoji: "🎺" },
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {genres.map((genre) => (
        <button
          key={genre.value}
          onClick={() => onGenreChange(genre.value)}
          className={`px-6 py-3 rounded-full font-medium transition-all shadow-md hover:shadow-lg ${
            selectedGenre === genre.value
              ? "bg-vintage-orange text-vintage-cream scale-110"
              : "bg-vintage-cream text-vintage-brown hover:bg-vintage-brown hover:text-vintage-cream"
          }`}
        >
          {genre.emoji} {genre.label}
        </button>
      ))}
    </div>
  );
}
