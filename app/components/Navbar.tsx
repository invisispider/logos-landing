import Image from "next/image";

export default function HeroSection() {
  return (
    <nav className="sticky top-0 bg-black shadow z-50">
      <div className="max-w-screen-xl mx-auto px-3 py-1 grid grid-cols-1 sm:flex sm:justify-between sm:items-center gap-2">
        {/* Logo */}
        <div className="text-2xl font-bold text-center sm:text-left">
          <Image 
            src="/images/icon.svg"
            alt="logo icon"
            width="32"
            height="32"
            priority
            className="inline mx-2 rounded-md"
          />
          <span className="text-white">Logos </span>
          <span className="text-secondary-300">Botanicals</span>
        </div>

        {/* Nav Links */}
        <div className="flex justify-center sm:justify-end space-x-6 flex-wrap">
          <a href="#products" className="text-white hover:text-secondary-200">Products</a>
          <a href="#about" className="text-white hover:text-secondary-200">About</a>
          <a href="#contact" className="text-white hover:text-secondary-200">Contact</a>
        </div>
      </div>
    </nav>
  )
};