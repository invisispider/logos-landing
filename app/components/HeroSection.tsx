import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="text-center text-white bg-black py-20 px-4">
      {/* <div className="relative w-full min-h-[200px] rounded-xl flex items-center justify-center bg-green-100">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/lab.webp"
            alt="product boxes"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div> */}
      <h1 className="text-4xl font-bold mb-4">Global Cannabinoid Sourcing Backed by Trust, Scale, and Science</h1>
      <p className="text-lg mb-8">Supplying high-quality cannabinoids to top global brands</p>
      <a href="#contact" className="bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-700 transition">Get a Quote</a>
    </section>
  );
}
