import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';

export default function Home() {
  return (
    <div className="min-h-screen bg-tactical-gray">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}
