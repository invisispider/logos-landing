import { useState } from "react";
// Primary logic
export default function Home() {
  const [ blank ] = useState('');
  
  const products = [
    { name: "CBD Isolate", href: "#" },
    { name: "CBN Isolate", href: "#" },
    { name: "CBG Isolate", href: "#" },
    { name: "CBC Isolate", href: "#" },
    { name: "THCV Isolate", href: "#" },
    { name: "CBT Distillate", href: "#" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="sticky top-0 bg-white shadow z-50">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-3">
          <div className="text-xl font-bold">Logos Botanicals {blank}</div>
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
        {/* <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">Get a Quote</a> */}
      </section>

      {/* Product Grid */}
      <section id="products" className="max-w-screen-xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Product Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.name} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-2">{p.name}</h3>
              <a href={p.href} className="text-gray-600 hover:underline">Learn More</a>
            </div>
          ))}
        </div>
        <div className="prose prose-gray max-w-screen-md mx-auto mt-16">
          <h2 className="text-xl font-semibold text-center mb-8">Custom Cannabinoid Formulas</h2>
          <p className="mb-4">
            Looking for a unique cannabinoid blend tailored to your product line? Logos Botanicals offers
            custom formulations based on target ratios, format, and application. Blending services available
            for isolates, distillates, and water-compatible cannabinoids. Get in touch to discuss your needs and
            we’ll build to spec.
          </p>

          <h2 className="text-xl font-semibold text-center mb-8">🔬 Research & Specialty Cannabinoids</h2>
          <p className="mb-4">
            We regularly carry or have access to rare and emerging cannabinoids that may not be listed publicly.
            These include—but are not limited to—CBND, CBDP, THCP, and other high-value actives.
          </p>
          <p className="mb-4">
            Due to compliance and regulatory factors, please inquire directly for availability, documentation,
            and purchase protocols.
          </p>

        </div>

      </section>

      {/* About Section */}
      <section id="about" className="bg-white text-center">
        <div className="max-w-screen-md py-16 px-4 mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-8">Why Choose Logos Botanicals?</h2>

          <h3 className="text-xl font-semibold text-center mb-2">Industry Experience</h3>
          <p className="mb-4">
            With over 15 years of sourcing and operational expertise, we understand the cannabis supply chain at every
            level, from seed to sale in each state and country around the globe.
          </p>

          <h3 className="text-xl font-semibold text-center mb-2">Direct Global Sourcing</h3>
          <p className="mb-4">
            We work directly with vetted farms, processors, and manufacturers around the world to ensure product quality,
            pricing transparency, and supply reliability.
          </p>

          <h3 className="text-xl font-semibold text-center mb-2">Full Compliance & Testing</h3>
          <p className="mb-4">
            All cannabinoids are backed by third-party, full-panel COAs. We only work with suppliers who meet GMP, ISO,
            and federally compliant standards and never sell products without a third party COA.
          </p>

          <h3 className="text-xl font-semibold text-center mb-2">Fast & Reliable Fulfillment</h3>
          <p className="mb-4">
            Whether it’s kilos or pallets, we move quickly. Our streamlined logistics ensure consistent delivery timelines
            and repeatable outcomes for your business.
          </p>

          <h3 className="text-xl font-semibold text-center mb-2">Custom Solutions</h3>
          <p className="mb-4">
            Need a rare cannabinoid or a custom blend? We collaborate with brands and manufacturers to build customized
            solutions that scale with your product roadmap.
          </p>

          <h3 className="text-xl font-semibold text-center mb-2">Built on Trust</h3>
          <p className="mb-4">
            We don’t just sell cannabinoids — we build relationships. Our business is built on integrity, accountability,
            and a shared vision for where this industry can go.
          </p>
        </div>
        <div className="max-w-screen-md mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Brand Mission</h2>
          <ul className="space-y-3 text-left list-disc list-inside mb-4">
            <li>To provide trusted, transparent, and scalable cannabinoid sourcing to brands
                across the globe. Combining science, service, and integrity to build the future 
                of plant medicine
            </li>
          </ul>
        {/* </div>
        <div className="max-w-screen-md mx-auto"> */}
          <h2 className="text-2xl font-semibold mb-4">Brand Values</h2>
          <ul className="space-y-3 text-left list-disc list-inside mb-4">
            <li><b>Trust First: </b>Radical transparency and full-panel COAs on every product.</li>
            <li><b>Scale Smart: </b>From 1kg to 1,000kg — we support growth.</li>
            <li><b>Science-Driven: </b>Only well-characterized, lab-verified cannabinoids.</li>
            <li><b>Client-Focused: </b>White label support, custom blends, reliable logistics.</li>
          </ul>
        {/* </div>
        <div className="max-w-screen-md mx-auto"> */}
          <h2 className="text-2xl font-semibold mb-4">About Logos Botanicals</h2>
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
          <p className="mb-4">
          Logos Botanicals is building the cannabinoid supply chain of the future — one rooted in science,
          transparency, and shared success
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="bg-gray-100 py-16 px-4">
        <div className="max-w-screen-sm mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-8">Let&apos;s Build Your Next Best Product</h2>
          <form action="https://formspree.io/f/yourformid" method="POST" className="space-y-4">
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
