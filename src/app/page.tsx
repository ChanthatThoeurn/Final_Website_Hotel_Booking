import { HotelHeader } from '../header/Header';
import { HotelFooter } from '../footer/Footer';

export const metadata = {
  title: 'LuxeStay - Book Your Perfect Hotel',
  description: 'Discover and book luxury hotels worldwide with LuxeStay',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-secondary font-English">
      <HotelHeader />
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-4">
            Find Your Perfect <span className="text-primary">Escape</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-primary mb-6">
            Explore exceptional hotels and resorts around the world. Book with confidence and enjoy unforgettable stays.
          </p>
        </div>
      </section>

      {/* Featured Section */}
      <section className="bg-secondary py-16 shadow-black/10 shadow-inner hover:shadow-lg transition-shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-english font-bold text-primary mb-8">
            Featured Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-lg overflow-hidden bg-card shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-accent to-primary" />
                <div className="p-6">
                  <h3 className="text-lg font-english font-bold text-primary mb-2">
                    Luxury Hotel {i}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 text-primary">
                    Experience world-class amenities and exceptional service
                  </p>
                  <button className="text-primary font-medium hover:underline">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <HotelFooter />
    </main>
  );
}
