'use client';

import { useCart } from '@/context/CartContext';

interface CartModalProps {
  onClose: () => void;
}

export default function CartModal({ onClose }: CartModalProps) {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-vintage-cream z-50 shadow-2xl overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-vintage-brown">
              🛒 Carrito
            </h2>
            <button
              onClick={onClose}
              className="text-vintage-brown hover:text-vintage-orange text-2xl"
            >
              ✕
            </button>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🎵</div>
              <p className="text-vintage-brown/70">Tu carrito está vacío</p>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {items.map(item => (
                  <div key={item.id} className="bg-vintage-beige p-4 rounded-lg border-2 border-vintage-brown/20">
                    <div className="flex gap-4">
                      <img 
                        src={item.coverImage} 
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-vintage-brown mb-1">{item.title}</h3>
                        <p className="text-sm text-vintage-brown/70 mb-2">{item.artist}</p>
                        <p className="font-bold text-vintage-orange">${item.price.toLocaleString('es-CO')} COP</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="bg-vintage-brown text-vintage-cream w-8 h-8 rounded-full hover:bg-vintage-orange transition-colors"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-bold text-vintage-brown">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="bg-vintage-brown text-vintage-cream w-8 h-8 rounded-full hover:bg-vintage-orange transition-colors"
                        >
                          +
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        🗑️ Eliminar
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t-2 border-vintage-brown/20 pt-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-vintage-brown">Subtotal:</span>
                  <span className="font-bold text-vintage-brown">${getTotalPrice().toLocaleString('es-CO')} COP</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-vintage-brown">Total:</span>
                  <span className="text-2xl font-bold text-vintage-orange">${getTotalPrice().toLocaleString('es-CO')} COP</span>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-vintage-orange text-vintage-cream py-3 rounded-full font-bold hover:bg-vintage-brown transition-colors">
                  Proceder al Pago 💳
                </button>
                <button
                  onClick={clearCart}
                  className="w-full bg-vintage-beige text-vintage-brown py-2 rounded-full border-2 border-vintage-brown/20 hover:border-vintage-orange transition-colors"
                >
                  Vaciar Carrito
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
