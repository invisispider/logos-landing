import AboutSection from './components/AboutSection';
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import BackToTopButton from './components/BackToTopButton';
import Products from './components/Products';
import ContactForm from './components/ContactForm';
// import SVGDivider from './components/SVGDivider';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <BackToTopButton />
      <Navbar />
      <HeroSection />
      {/* <div className="flex justify-center my-12 relative">
        <SVGDivider />
      </div> */}
      <Products />
      <AboutSection />
      <ContactForm />
      <footer className="bg-primary-900 text-white text-center py-6 text-sm">
        &copy; {new Date().getFullYear()} Logos Botanicals. All rights reserved.
      </footer>
    </main>
  );
}
