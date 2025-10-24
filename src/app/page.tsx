import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-vintage-tan to-vintage-cream py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <span className="text-8xl">🎵</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-vintage-brown mb-6 leading-tight">
            Vinyl Vault
          </h1>
          <p className="text-2xl text-vintage-brown/80 mb-8 max-w-2xl mx-auto">
            Descubre las mejores colecciones de vinilos clásicos de{" "}
            <span className="font-bold text-vintage-orange">Rap</span>,{" "}
            <span className="font-bold text-vintage-orange">Hip-Hop</span>,{" "}
            <span className="font-bold text-vintage-orange">Rock</span> y{" "}
            <span className="font-bold text-vintage-orange">Salsa</span>
          </p>
          <Link
            href="/catalog"
            className="inline-block bg-vintage-orange text-vintage-cream px-10 py-4 rounded-full text-xl font-bold hover:bg-vintage-brown transition-all shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Explorar Catálogo 🛒
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-vintage-brown mb-12">
            ¿Por qué elegir Vinyl Vault?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-vintage-cream p-8 rounded-lg shadow-lg text-center border-2 border-vintage-brown/20 hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">📀</div>
              <h3 className="text-2xl font-bold text-vintage-brown mb-3">
                Calidad Premium
              </h3>
              <p className="text-vintage-brown/70">
                Vinilos originales y en excelente estado, cuidadosamente
                seleccionados para coleccionistas.
              </p>
            </div>

            <div className="bg-vintage-cream p-8 rounded-lg shadow-lg text-center border-2 border-vintage-brown/20 hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">🎸</div>
              <h3 className="text-2xl font-bold text-vintage-brown mb-3">
                Variedad de Géneros
              </h3>
              <p className="text-vintage-brown/70">
                Desde los clásicos del rock hasta los mejores ritmos de salsa,
                hip-hop y rap.
              </p>
            </div>

            <div className="bg-vintage-cream p-8 rounded-lg shadow-lg text-center border-2 border-vintage-brown/20 hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">🚚</div>
              <h3 className="text-2xl font-bold text-vintage-brown mb-3">
                Envío Seguro
              </h3>
              <p className="text-vintage-brown/70">
                Empaque especial para proteger tus vinilos durante el envío a
                cualquier parte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Genres Section */}
      <section className="py-16 px-4 bg-vintage-cream">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-vintage-brown mb-12">
            Explora por Género
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href="/catalog?genre=rap" className="group">
              <div className="bg-vintage-beige p-8 rounded-lg shadow-lg text-center border-2 border-vintage-orange/30 hover:border-vintage-orange hover:shadow-xl transition-all hover:scale-105">
                <div className="text-6xl mb-3">🎤</div>
                <h3 className="text-2xl font-bold text-vintage-brown group-hover:text-vintage-orange transition-colors">
                  Rap
                </h3>
              </div>
            </Link>

            <Link href="/catalog?genre=hip-hop" className="group">
              <div className="bg-vintage-beige p-8 rounded-lg shadow-lg text-center border-2 border-vintage-orange/30 hover:border-vintage-orange hover:shadow-xl transition-all hover:scale-105">
                <div className="text-6xl mb-3">🎧</div>
                <h3 className="text-2xl font-bold text-vintage-brown group-hover:text-vintage-orange transition-colors">
                  Hip-Hop
                </h3>
              </div>
            </Link>

            <Link href="/catalog?genre=rock" className="group">
              <div className="bg-vintage-beige p-8 rounded-lg shadow-lg text-center border-2 border-vintage-orange/30 hover:border-vintage-orange hover:shadow-xl transition-all hover:scale-105">
                <div className="text-6xl mb-3">🎸</div>
                <h3 className="text-2xl font-bold text-vintage-brown group-hover:text-vintage-orange transition-colors">
                  Rock
                </h3>
              </div>
            </Link>

            <Link href="/catalog?genre=salsa" className="group">
              <div className="bg-vintage-beige p-8 rounded-lg shadow-lg text-center border-2 border-vintage-orange/30 hover:border-vintage-orange hover:shadow-xl transition-all hover:scale-105">
                <div className="text-6xl mb-3">🎺</div>
                <h3 className="text-2xl font-bold text-vintage-brown group-hover:text-vintage-orange transition-colors">
                  Salsa
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-vintage-brown to-vintage-orange text-vintage-cream">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para comenzar tu colección?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Miles de vinilos clásicos esperándote
          </p>
          <Link
            href="/catalog"
            className="inline-block bg-vintage-cream text-vintage-brown px-10 py-4 rounded-full text-xl font-bold hover:bg-vintage-beige transition-all shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Ver Catálogo Completo
          </Link>
        </div>
      </section>
    </div>
  );
}
