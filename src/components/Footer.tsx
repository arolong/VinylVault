export default function Footer() {
  return (
    <footer className="bg-vintage-brown text-vintage-cream mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              🎵 Vinyl Vault
            </h3>
            <p className="text-vintage-cream/80">
              Tu tienda de confianza para vinilos clásicos de rap, hip-hop, rock
              y salsa.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-vintage-cream/80">
              <li>
                <a
                  href="/"
                  className="hover:text-vintage-orange transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="/catalog"
                  className="hover:text-vintage-orange transition-colors"
                >
                  Catálogo
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-vintage-orange transition-colors"
                >
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-vintage-orange transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Géneros</h4>
            <ul className="space-y-2 text-vintage-cream/80">
              <li>🎤 Rap</li>
              <li>🎧 Hip-Hop</li>
              <li>🎸 Rock</li>
              <li>🎺 Salsa</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-vintage-cream/20 mt-8 pt-8 text-center text-vintage-cream/60">
          <p>&copy; 2025 Vinyl Vault. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
