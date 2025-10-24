"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

interface HeaderProps {
  onCartClick: () => void;
}

export default function Header({ onCartClick }: HeaderProps) {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="bg-vintage-cream border-b-4 border-vintage-brown shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="text-5xl">🎵</div>
            <div>
              <h1 className="text-4xl font-bold text-vintage-brown tracking-tight group-hover:text-vintage-orange transition-colors">
                Vinyl Vault
              </h1>
              <p className="text-sm text-vintage-brown/70 italic">
                Colecciones clásicas en vinilo
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-vintage-brown hover:text-vintage-orange transition-colors font-medium"
            >
              Inicio
            </Link>
            <Link
              href="/catalog"
              className="text-vintage-brown hover:text-vintage-orange transition-colors font-medium"
            >
              Catálogo
            </Link>
            <button
              onClick={onCartClick}
              className="bg-vintage-orange text-vintage-cream px-6 py-2 rounded-full hover:bg-vintage-brown transition-all shadow-md hover:shadow-lg relative"
            >
              🛒 Carrito
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-vintage-brown text-vintage-cream w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                  {totalItems}
                </span>
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
