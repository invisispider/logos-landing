import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full items-center justify-center text-center text-gray-100 bg-stone-950 py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/products.webp"
          alt="product boxes"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>
      <div className="relative z-10 max-w-3xl flex-vertical justify-self-center">
        <h1 className="text-4xl font-bold mb-4">Global Cannabinoid Sourcing Backed by Trust, Scale, and Science</h1>
        <p className="text-lg mb-8">Supplying high-quality cannabinoids to top global brands</p>
        <div className="flex align-middle justify-center">
          <a href="#contact" className="font-black bg-secondary-800 text-white px-6 py-3 rounded-full hover:bg-secondary-700 transition">Get a Quote</a>
          <span className="border-l border-secondary-400 h-auto mx-3 font-semibold px-3 my-auto text-secondary-400">Fast Response</span>
        </div>
      </div>
    </section>
  );
}
