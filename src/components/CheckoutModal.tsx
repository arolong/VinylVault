'use client';

import { useState } from 'react';
import { Vinyl } from '@/types';

interface CheckoutModalProps {
  items: (Vinyl & { quantity: number })[];
  totalPrice: number;
  onClose: () => void;
  onSuccess: () => void;
}

export default function CheckoutModal({ items, totalPrice, onClose, onSuccess }: CheckoutModalProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // 1. Crear o buscar usuario
      const userRes = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
          phone: formData.phone,
        }),
      });

      if (!userRes.ok) throw new Error('Error al crear usuario');
      const user = await userRes.json();

      // 2. Crear orden
      const orderRes = await fetch('/api/orders', {
        method: 'POST',
        body: JSON.stringify({
          userId: user.id,
          items: items.map(item => ({
            vinylId: item.id,
            quantity: item.quantity,
            price: item.price,
          })),
          totalPrice,
        }),
      });

      if (!orderRes.ok) {
        const data = await orderRes.json();
        throw new Error(data.error || 'Error al crear orden');
      }

      const order = await orderRes.json();
      
      // 3. Éxito
      alert(`✅ ¡Orden creada! ID: ${order.id}\n\nTotal: $${totalPrice.toLocaleString('es-CO')} COP`);
      onSuccess();
      onClose();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
      setError(errorMessage);
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-vintage-cream rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto transform transition-all">
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-vintage-brown">
                💳 Finalizar Compra
              </h2>
              <button
                onClick={onClose}
                className="text-vintage-brown hover:text-vintage-orange text-2xl"
              >
                ✕
              </button>
            </div>

            {/* Resumen */}
            <div className="bg-vintage-beige p-4 rounded-lg mb-6 border-2 border-vintage-brown/20">
              <p className="text-sm text-vintage-brown/70 mb-2">Resumen de compra:</p>
              <div className="space-y-1 mb-3">
                {items.map(item => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-vintage-brown">{item.title} x{item.quantity}</span>
                    <span className="font-bold text-vintage-brown">
                      ${(item.price * item.quantity).toLocaleString('es-CO')}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t-2 border-vintage-brown/20 pt-2">
                <div className="flex justify-between">
                  <span className="font-bold text-vintage-brown">Total:</span>
                  <span className="text-xl font-bold text-vintage-orange">
                    ${totalPrice.toLocaleString('es-CO')} COP
                  </span>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-vintage-brown mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Juan Pérez"
                  className="w-full px-4 py-2 rounded-lg border-2 border-vintage-brown/20 focus:border-vintage-orange outline-none text-vintage-brown placeholder-vintage-brown/50"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-vintage-brown mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="juan@example.com"
                  className="w-full px-4 py-2 rounded-lg border-2 border-vintage-brown/20 focus:border-vintage-orange outline-none text-vintage-brown placeholder-vintage-brown/50"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-vintage-brown mb-2">
                  Teléfono (WhatsApp)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+573001234567"
                  className="w-full px-4 py-2 rounded-lg border-2 border-vintage-brown/20 focus:border-vintage-orange outline-none text-vintage-brown placeholder-vintage-brown/50"
                />
              </div>

              {error && (
                <div className="bg-red-100 border-2 border-red-400 text-red-700 p-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <div className="pt-4 space-y-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-vintage-orange text-vintage-cream py-3 rounded-full font-bold hover:bg-vintage-brown transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {loading ? '⏳ Procesando...' : '✓ Confirmar Compra'}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full bg-vintage-beige text-vintage-brown py-2 rounded-full border-2 border-vintage-brown/20 hover:border-vintage-orange transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </form>

            {/* Nota */}
            <p className="text-xs text-vintage-brown/60 mt-4 text-center">
              📝 Al confirmar, aceptas nuestros términos de compra
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
