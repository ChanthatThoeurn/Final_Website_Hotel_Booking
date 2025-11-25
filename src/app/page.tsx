import { HotelHeader } from '../header/Header';
import { HotelFooter } from '../footer/Footer';
import { HotelHome } from '../homePage/Homes';

export const metadata = {
  title: 'LuxeStay - Book Your Perfect Hotel',
  description: 'Discover and book luxury hotels worldwide with LuxeStay',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-secondary font-English">
      <HotelHeader />
      <HotelHome/>
      <HotelFooter />
    </main>
  );
}
