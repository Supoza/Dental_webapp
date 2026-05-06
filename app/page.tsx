import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { AboutDoctor } from '@/components/AboutDoctor';
import { SmileGallery } from '@/components/SmileGallery';
import { Testimonials } from '@/components/Testimonials';
import { ConvenienceAndBooking } from '@/components/ConvenienceAndBooking';
import { TrustEducation } from '@/components/TrustEducation';
import { LocationContact } from '@/components/LocationContact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-surface-light text-text-dark selection:bg-accent-teal selection:text-white">
      <Navbar />
      <div className="pt-20"> {/* Offset for sticky navbar */}
        <Hero />
        <Services />
        <AboutDoctor />
        <SmileGallery />
        <Testimonials />
        <ConvenienceAndBooking />
        <TrustEducation />
        <LocationContact />
      </div>
      <Footer />
    </main>
  );
}
