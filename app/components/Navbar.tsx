import Image from "next/image";

export default function HeroSection() {
  return (
    <nav className="sticky top-0 bg-primary-900 shadow z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-3 py-1">
        <div className="text-2xl font-bold">
          <Image 
            src="/images/icon-32x32.png"
            alt="logo icon"
            width="32"
            height="32"
            priority
            className="inline mx-2 rounded-md"
          />
          <span className="text-white text-2xl">Logos </span>
          <span className="text-secondary-300 text-2xl">Botanicals</span>
        </div>
        <div className="space-x-6 md:block">
          <a href="#products" className="text-secondary-300 hover:text-secondary-500">Products</a>
          <a href="#about" className="text-secondary-300 hover:text-secondary-500">About</a>
          <a href="#contact" className="text-secondary-300 hover:text-secondary-500">Contact</a>
        </div>
      </div>
    </nav>
  )
};