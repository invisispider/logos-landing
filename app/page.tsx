import AboutSection from './components/AboutSection';
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import BackToTopButton from './components/BackToTopButton';
import Products from './components/Products';
import ContactForm from './components/ContactForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <BackToTopButton />
      <Navbar />
      <HeroSection />
      <Products />
      <AboutSection />
      <ContactForm />
      <footer className="bg-black text-white text-center py-6 text-sm">
        &copy; {new Date().getFullYear()} Logos Botanicals. All rights reserved.
      </footer>
    </main>
  );
}
