import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Battlegrounds from '@/app/components/Battlegrounds';
import Arsenal from '@/app/components/Arsenal';
import Services from '@/app/components/Services';
import Gallery from '@/app/components/Gallery';
import Booking from '@/app/components/Booking';
import Safety from '@/app/components/Safety';

export default function Home() {
  return (
    <div className="min-h-screen bg-tactical-gray">
      <Navbar />
      <Hero />
      <About />
      <Battlegrounds />
      <Arsenal />
      <Services />
      <Gallery />
      <Booking />
      <Safety />
    </div>
  );
}
