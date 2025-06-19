import Image from 'next/image';
export default function Products() {
  const products = [
    { name: "CBD", category: "Isolate", href: "#" },
    { name: "CBN", category: "Isolate", href: "#" },
    { name: "CBG", category: "Isolate", href: "#" },
    { name: "CBC", category: "Isolate", href: "#" },
    { name: "THCV", category: "Isolate", href: "#" },
    { name: "CBT", category: "Distillate", href: "#" },
  ];
  return (
    <>
      <section id="products" className="max-w-screen-xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Product <span className="text-secondary-700">Categories</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.name} className="bg-gray-100 flex-col justify-items-end relative align-middle rounded-lg shadow-md p-6 hover:shadow-lg transition">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="absolute inset-auto"
                src="/images/isolate.webp"
                alt="Product Jar Image"
                width={100}
                height={100}
              />
              <div>
              <h3 className="text-lg font-semibold mb-2 relative"><span className="text-3xl sm:text-4xl lg:text-5xl block">{ p.name }</span>{ p.category }</h3>
              <a href={p.href} className="text-gray-600">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <hr className="m-12 text-gray-300" />

      {/* More Products */}
      <section className="min-h-[600px]">
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
          <div className="p-4 prose prose-gray max-w-screen-md mx-auto backdrop-blur-xl md:p-8 rounded-md">
            <h2 className="text-2xl sm:text-4xl font-semibold text-center mb-8">Custom Cannabinoid Formulas</h2>
            <p className="mb-4 text-xl">
              Looking for a unique cannabinoid blend tailored to your product line? Logos Botanicals offers
              <b> custom formulations</b> based on target ratios, format, and application. <b>Blending services</b> available
              for isolates, distillates, and water-compatible cannabinoids. <a href="#contact" className="text-secondary-950" style={{ textDecoration: 'none' }}>Get in touch</a> to discuss your needs and
              we&apos;ll build to spec.
            </p>
            <h2 className="text-4xl font-semibold text-center mb-8">🔬 Research & Specialty Cannabinoids</h2>
            <p className="mb-4 text-xl">
              We regularly carry or have access to <b>rare and emerging cannabinoids</b> that may not be listed publicly.
              These include—but are not limited to—CBND, CBDP, THCP, and other high-value actives.
            </p>
            <p className="mb-4 text-xl">
              Due to compliance and regulatory factors, please <a href="#contact" className="text-secondary-950" style={{ textDecoration: 'none' }}>inquire directly</a> for availability, documentation,
              and purchase protocols.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};