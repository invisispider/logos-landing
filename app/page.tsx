import Image from 'next/image';
import {
  FileBadge,
  Globe,
  FlaskConical,
  Truck,
  Wrench,
  Handshake,
} from 'lucide-react';
import MissionAndValues from './components/MissionAndValues';

export default function Home() {
  const products = [
    { name: "CBD Isolate", href: "#" },
    { name: "CBN Isolate", href: "#" },
    { name: "CBG Isolate", href: "#" },
    { name: "CBC Isolate", href: "#" },
    { name: "THCV Isolate", href: "#" },
    { name: "CBT Distillate", href: "#" },
  ];

  const features = [
    {
      title: "Industry Experience",
      text: "With over 15 years of sourcing and operational expertise...",
      icon: <FileBadge className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Direct Global Sourcing",
      text: "We work directly with vetted farms, processors, and manufacturers...",
      icon: <Globe className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Full Compliance & Testing",
      text: "All cannabinoids are backed by third-party, full-panel COAs...",
      icon: <FlaskConical className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Fast & Reliable Fulfillment",
      text: "Our streamlined logistics ensure consistent delivery timelines...",
      icon: <Truck className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Custom Solutions",
      text: "We collaborate with brands and manufacturers to build custom solutions...",
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Built on Trust",
      text: "We don’t just sell cannabinoids — we build relationships...",
      icon: <Handshake className="w-8 h-8 text-blue-600" />,
    },
  ];


  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="sticky top-0 bg-white shadow z-50">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-3">
          <div className="text-xl font-bold">Logos Botanicals</div>
          <div className="space-x-6 md:block">
            <a href="#products" className="hover:underline underline-offset-4">Products</a>
            <a href="#about" className="hover:underline underline-offset-4">About</a>
            <a href="#contact" className="hover:underline underline-offset-4">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center text-white bg-black py-20 px-4">
        <h1 className="text-4xl font-bold mb-4">Global Cannabinoid Sourcing Backed by Trust, Scale, and Science</h1>
        <p className="text-lg mb-8">Supplying high-quality cannabinoids to top global brands</p>
        <a href="#contact" className="bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-700 transition">Get a Quote</a>
      </section>

      {/* Product Grid */}
      <section id="products" className="max-w-screen-xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Product Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.name} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <Image className="float-right"
                src="/images/jar.webp"
                alt="Logo"
                width={100}
                height={100}
              />
              <h3 className="text-lg font-semibold mb-2">{p.name}</h3>
              <a href={p.href} className="text-gray-600 hover:underline">Learn More</a>
            </div>
          ))}
        </div>
      </section>
      {/* <hr className="m-12 text-gray-300" /> */}

      {/* More Products */}
      <section className="px-4 min-h-[600px]">
        <div className="relative w-full min-h-[600px] rounded-xl flex items-center justify-center bg-gray-100">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/boxes.webp"
              alt="product boxes"
              fill
              className="object-cover opacity-30 grayscale"
              priority
            />
          </div>
          {/* Foreground Content */}
          <div className="prose prose-gray max-w-screen-md mx-auto backdrop-blur-xs p-8 rounded-md">
            <h2 className="text-2xl font-semibold text-center mb-8">Custom Cannabinoid Formulas</h2>
            <p className="mb-4">
              Looking for a unique cannabinoid blend tailored to your product line? Logos Botanicals offers
              custom formulations based on target ratios, format, and application. Blending services available
              for isolates, distillates, and water-compatible cannabinoids. Get in touch to discuss your needs and
              we’ll build to spec.
            </p>
            <h2 className="text-2xl font-semibold text-center mb-8">🔬 Research & Specialty Cannabinoids</h2>
            <p className="mb-4">
              We regularly carry or have access to rare and emerging cannabinoids that may not be listed publicly.
              These include—but are not limited to—CBND, CBDP, THCP, and other high-value actives.
            </p>
            <p className="mb-4">
              Due to compliance and regulatory factors, please inquire directly for availability, documentation,
              and purchase protocols.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white text-center">
        <div className="bg-gray-50 py-16 px-4" id="why-choose">
          <div className="max-w-screen-xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Logos Botanicals?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
                  <div>{feature.icon}</div>
                  <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
                  <p className="text-gray-700 mt-2">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <MissionAndValues />
        <div className="max-w-screen-md mx-auto">

          <h2 className="text-3xl font-semibold mb-4">About Logos Botanicals</h2>
          <p className="mb-4"><b>Logos Botanicals</b> is owned and operated by Ryan Campbell, a veteran of the legal cannabis
            industry with over 15 years of sourcing and operational experience. Having worked across
            nearly every link in the cannabis supply chain (from cultivation and extraction to global
            distribution) Ryan brings unparalleled insight into one of the industry’s most complex challenges:
            Sourcing.
          </p>
          <p className="mb-4">
            At Logos Botanicals, we bridge the gap between brands, manufacturers, and trusted
            cannabinoid suppliers around the world. With deep relationships and a commitment to radical
            transparency, our goal is simple: build a cleaner, smarter, and more direct cannabinoid supply
            chain.
          </p>
          <p className="mb-4">
            We’re the best strategic partners you can ask for! From regulatory guidance and compliance to
            product development and global logistics, Logos Botanicals supports every stage of your
            growth. Our catalog includes everything from high-purity isolates and rare cannabinoids to
            custom blends! Delivered with consistency, speed, and integrity.
          </p>
          <div className="relative w-full min-h-[200px] rounded-xl flex items-center justify-center bg-green-100">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image 
                src="/images/lab.webp"
                alt="product boxes"
                fill
                className="object-cover opacity-20"
                priority
              />
            </div>
            <h3 className="my-8 text-3xl md:px-8">
              Logos Botanicals is building the cannabinoid supply chain of the future — one rooted in science,
              transparency, and shared success
            </h3>
          </div>
        </div>
        <svg viewBox="0 0 1440 320" className="w-full h-full">
          <path fill="#f3f4f6" d="M0,256L1440,128L1440,320L0,320Z" />
        </svg>
      </section>
      {/* Contact Form */}
      <section id="contact" className="bg-gray-100 py-16 px-4">
        <div className="max-w-screen-sm mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-8">Let&apos;s Build Your Next Best Product</h2>
          <form action="https://formspree.io/f/xkgbbdbb" method="POST" className="space-y-4">
            <input type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-2 rounded border" />
            <input
              type="text"
              name="company"
              placeholder="Your Company"
              required
              className="w-full px-4 py-2 rounded border"
            />
            <input type="email" name="email" placeholder="Your Email" required className="w-full px-4 py-2 rounded border" />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone (optional)"
              className="w-full px-4 py-2 rounded border"
            />
            <input
              type="text"
              name="product-interest"
              placeholder="Product Interest"
              required
              className="w-full px-4 py-2 rounded border"
            />
            <textarea name="message" placeholder="Your Message" rows={4} required className="w-full px-4 py-2 rounded border"></textarea>
            <button type="submit" className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700 transition">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6 text-sm">
        &copy; {new Date().getFullYear()} Logos Botanicals. All rights reserved.
      </footer>
    </main>
  );
}
