import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center text-white">
      <Image
        src="/images/hero-banner.jpg"
        alt="Hero Background"
        fill
        className="object-cover brightness-75"
        priority
      />
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Trusted Cannabinoid Source</h1>
        <p className="text-lg md:text-xl mb-6">
          Quality, Compliance, and Transparency — Delivered.
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 px-6 rounded"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
