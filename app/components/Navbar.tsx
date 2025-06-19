import Image from "next/image";

export default function HeroSection() {
  return (
    <nav className="sticky top-0 bg-black shadow z-50">
      <div className="max-w-screen-xl mx-auto px-3 py-1 grid grid-cols-1 sm:flex sm:justify-between sm:items-center gap-2">
        {/* Logo */}
        <div className="flex text-center sm:text-left">
          <Image 
            src="/images/emblem.svg"
            alt="logo icon"
            width={28}
            height={28}
            priority
            className="inline mx-2 rounded-sm object-contain"
          />
          <div className="text-center flex flex-col flex-wrap align-around">
            <span className="text-2xl justify-center text-gray-100 uppercase font-bold">Logos </span>
            <span className="relative bottom-1 justify-center text-xs text-secondary-400 font-thin uppercase">Botanicals</span>
          </div>
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