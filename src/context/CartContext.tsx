"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Vinyl, CartItem } from "@/types";

interface CartContextType {
  items: CartItem[];
  addToCart: (vinyl: Vinyl) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Cargar carrito desde localStorage al montar
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("vinylCart");
      if (savedCart) {
        try {
          setItems(JSON.parse(savedCart));
        } catch (error) {
          console.error("Error loading cart from localStorage:", error);
        }
      }
      setIsHydrated(true);
    }
  }, []);

  // Guardar carrito en localStorage cuando cambia
  useEffect(() => {
    if (isHydrated && typeof window !== "undefined") {
      localStorage.setItem("vinylCart", JSON.stringify(items));
    }
  }, [items, isHydrated]);

  const addToCart = (vinyl: Vinyl) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === vinyl.id);

      // Validar que no exceda el stock
      if (existingItem) {
        if (existingItem.quantity >= vinyl.stock) {
          console.warn(`No hay más stock de ${vinyl.title}`);
          return prevItems;
        }
        return prevItems.map((item) =>
          item.id === vinyl.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...prevItems, { ...vinyl, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          // Validar que no exceda el stock
          if (quantity > item.stock) {
            console.warn(`No hay suficiente stock. Máximo disponible: ${item.stock}`);
            return item; // No cambiar cantidad
          }
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
