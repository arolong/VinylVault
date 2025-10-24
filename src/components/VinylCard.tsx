"use client";

import { Vinyl } from "@/types";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

interface VinylCardProps {
  vinyl: Vinyl;
}

export default function VinylCard({ vinyl }: VinylCardProps) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(vinyl);

    setTimeout(() => {
      setIsAdding(false);
    }, 500);
  };

  const genreEmoji = {
    rap: "🎤",
    "hip-hop": "🎧",
    rock: "🎸",
    salsa: "🎺",
  };

  const genreColors = {
    rap: "bg-vintage-orange/20 text-vintage-orange border-vintage-orange",
    "hip-hop": "bg-vintage-brown/20 text-vintage-brown border-vintage-brown",
    rock: "bg-red-800/20 text-red-800 border-red-800",
    salsa: "bg-yellow-700/20 text-yellow-700 border-yellow-700",
  };

  return (
    <div className="bg-vintage-cream rounded-lg shadow-lg overflow-hidden border-2 border-vintage-brown/20 hover:shadow-xl hover:scale-105 transition-all duration-300">
      <div className="relative h-64 bg-vintage-brown/10">
        <Image
          src={vinyl.coverImage}
          alt={vinyl.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 right-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold border-2 backdrop-blur-sm ${
              genreColors[vinyl.genre]
            }`}
          >
            {genreEmoji[vinyl.genre]} {vinyl.genre.toUpperCase()}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-vintage-brown mb-1 truncate">
          {vinyl.title}
        </h3>
        <p className="text-vintage-brown/70 mb-3 text-sm">{vinyl.artist}</p>

        <div className="flex items-center justify-between mb-4 text-sm text-vintage-brown/60">
          <span>📅 {vinyl.year}</span>
          <span>📦 Stock: {vinyl.stock}</span>
        </div>

        <p className="text-vintage-brown/80 text-sm mb-4 line-clamp-2">
          {vinyl.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-vintage-orange">
            ${vinyl.price.toLocaleString("es-CO")} COP
          </span>
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`px-4 py-2 rounded-full transition-all text-sm font-medium ${
              isAdding
                ? "bg-green-600 text-white scale-110"
                : "bg-vintage-brown text-vintage-cream hover:bg-vintage-orange"
            }`}
          >
            {isAdding ? "✓ Agregado!" : "Agregar 🛒"}
          </button>
        </div>
      </div>
    </div>
  );
}
