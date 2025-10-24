"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import CartModal from "@/components/CartModal";
import { useState } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <html lang="es">
      <body
        className={`${inter.variable} antialiased bg-vintage-beige min-h-screen flex flex-col`}
      >
        <CartProvider>
          <Header onCartClick={() => setIsCartOpen(true)} />
          <main className="flex-grow">{children}</main>
          <Footer />

          {isCartOpen && <CartModal onClose={() => setIsCartOpen(false)} />}
        </CartProvider>
      </body>
    </html>
  );
}
