import { HotelHeader } from '../header/Header';
import { HotelFooter } from '../footer/Footer';
import HotelAbout from '../about/AboutUse';

export const metadata = {
  title: 'LuxeStay - Book Your Perfect Hotel',
  description: 'Discover and book luxury hotels worldwide with LuxeStay',
};

export default function Home() {
  return (
    <>
      <HotelHeader />
      <HotelAbout />

      <HotelFooter />
    </>
  );
}
