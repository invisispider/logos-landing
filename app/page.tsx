import AboutSection from './components/AboutSection';
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import BackToTopButton from './components/BackToTopButton';
import Products from './components/Products';
import ContactForm from './components/ContactForm';
// import SVGDivider from './components/SVGDivider';
import { Linkedin, Mail, Phone } from 'lucide-react';

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
      <div className="p-2 ml-3">
        <h2 className="mt-3 text-3xl font-bold">Contact</h2>
        <p className="">6101 Long Prairie Rd., Suite #744</p>
        <p className="">Flower Mound, TX 75028</p>
        {/* <hr /> */}
        <a href="tel:+15555555555" className="">(800)555-5555</a>
        <a href="mailto:stubemail@stubserver.com" className="">sales@logosbotanicals.com</a>
        <div className="flex space-x-2 m-3">
          <div className="w-10 h-10 border-2 border-primary-800 hover:border-primary-500 rounded-full flex items-center justify-center">
            <Mail className="cursor-pointer hover:text-primary-500 text-primary-800 w-6 h-6" />
          </div>
          <div className="w-10 h-10 border-2 border-primary-800 hover:border-primary-500 rounded-full flex items-center justify-center">
            <Linkedin className="cursor-pointer hover:text-primary-500 text-primary-800 w-6 h-6" />
          </div>
          <div className="w-10 h-10 border-2 border-primary-800 hover:border-primary-500 rounded-full flex items-center justify-center">
            <Phone className="cursor-pointer hover:text-primary-500 text-primary-800 w-6 h-6" />
          </div>
        </div>
      </div>
      <div className="m-auto p-4">
        <p className="text-gray-700"><b>FDA Disclosure:</b> Not For Sale to Minors. Keep out of reach of 
        children and pets. Published statements made regarding these products have not been evaluated 
        by the Food and Drug Administration. The efficacy of these products has not been confirmed by 
        FDA-approved research. These products are not intended to diagnose, treat, cure or prevent any 
        disease. All information presented here is not meant as a substitute for or alternative to 
        information from health care practitioners. Please consult your healthcare professional about 
        potential interactions or other possible complications before using any product. The Federal 
        Food, Drug and Cosmetic Act requires this notice.
        </p>
      </div>
      <footer className="border-t border-black bg-primary-900 text-white text-center py-3 text-sm flex justify-around">
        <div>
          <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a>

        </div>
        <div>&copy;{new Date().getFullYear()} Logos Botanicals. All rights reserved.</div>
      </footer>
    </main>
  );
}
