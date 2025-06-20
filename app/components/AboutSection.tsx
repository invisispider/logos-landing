import Image from 'next/image';
import {
  ShieldCheck,
  TrendingUp,
  Microscope,
  FileBadge,
  Globe,
  FlaskConical,
  Truck,
  Wrench,
  Handshake,
} from 'lucide-react';

export default function AboutSection() {
  const features = [
    {
      title: "Industry Experience",
      text: "With over 15 years of sourcing and operational expertise...",
      icon: <FileBadge className="w-8 h-8 text-primary-300" />,
    },
    {
      title: "Direct Global Sourcing",
      text: "We work directly with vetted farms, processors, and manufacturers...",
      icon: <Globe className="w-8 h-8 text-primary-300" />,
    },
    {
      title: "Full Compliance & Testing",
      text: "All cannabinoids are backed by third-party, full-panel COAs...",
      icon: <FlaskConical className="w-8 h-8 text-primary-300" />,
    },
    {
      title: "Fast & Reliable Fulfillment",
      text: "Our streamlined logistics ensure consistent delivery timelines...",
      icon: <Truck className="w-8 h-8 text-primary-300" />,
    },
    {
      title: "Custom Solutions",
      text: "We collaborate with brands and manufacturers to build custom solutions...",
      icon: <Wrench className="w-8 h-8 text-primary-300" />,
    },
    {
      title: "Built on Trust",
      text: "We don’t just sell cannabinoids — we build relationships...",
      icon: <Handshake className="w-8 h-8 text-primary-300" />,
    },
  ];

  return (
    <section id="about" className="text-center">
      {/* <div className="mt-5 flex flex-wrap justify-evenly">
        <Image className="w-1/3 md:w-1/4 m-auto rounded-lg"
          src="/images/SquareLogo.webp" alt="logos botanicals" width="1024" height="1024"
        />
          <h2 className="text-2xl sm:text-3xl w-1/2 font-bold text-center mr-auto my-auto">Why Choose Logos Botanicals?</h2>
      </div> */}
      <div className="mt-12 flex flex-col items-center text-center">
        <Image src="/images/SquareLogo.webp" alt="Quality Seal" width={128} height={128} className="mb-4 rounded-full shadow-lg" />
        <h2 className="text-3xl font-bold">Why Choose Logos Botanicals?</h2>
      </div>
      {/* background image transparent */}
      {/* <div className="relative py-12 px-4">
        <Image
          src="/images/SquareLogo.webp"
          alt=""
          className="absolute opacity-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-md"
          width={512}
          height={512}
        />
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-bold">Why Choose Logos Botanicals?</h2>
          <p className="mt-4">Your benefits go here...</p>
        </div>
      </div> */}
      
      <div className="bg-gray-50 pb-16 pt-8 px-4" id="why-choose">
        <div className="max-w-screen-xl mx-auto">
          <div className="bg-gray-100 rounded-lg shadow p-6 hover:shadow-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="transition">
                <div className="justify-self-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
                <p className="text-gray-700 mt-2">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-4">
        <div className="relative py-20 px-4 text-gray-900 overflow-hidden">
          <h2 
            className="absolute top-0 left-0 text-[16vw] font-bold text-secondary-300 opacity-50 pointer-events-none select-none leading-none z-0"
            style={{ transform: "rotate(-2deg" }}  
          >
            MISSION
          </h2>
          <em className="m-auto text-3xl sm:text-4xl md:text-5xl font-semibold max-w-3xl relative z-10 text-gray-700">
            To provide trusted, transparent, and scalable cannabinoid sourcing to brands across the globe.
            Combining science, service, and integrity to build the future of plant medicine.
          </em>
        </div>

        <div className="max-w-5xl mx-auto">
          <h2 className="text-6xl sm:text-8xl font-bold text-center mb-10">Our <span className="text-primary-700">Values</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex items-center gap-4 bg-gray-100 p-6 rounded shadow-sm">
              <ShieldCheck className="text-blue-800 w-6 h-6" />
              <div className="flex-1 flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-1">Trust First</h3>
                <p className="text-xl text-gray-600">Radical transparency and full-panel COAs on every product.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-100 p-6 rounded shadow-sm">
              <TrendingUp className="text-primary-800 w-6 h-6" />
              <div className="flex-1 flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-1">Scale Smart</h3>
                <p className="text-xl text-gray-600">From 1kg to 1,000kg — we support growth.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-100 p-6 rounded shadow-sm">
              <Microscope className="text-purple-800 w-6 h-6" />
              <div className="flex-1 flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-1">Science-Driven</h3>
                <p className="text-xl text-gray-600">Only well-characterized, lab-verified cannabinoids.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-gray-100 p-6 rounded shadow-sm">
              <Handshake className="text-secondary-800 w-6 h-6" />
              <div className="flex-1 flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-1">Client-Focused</h3>
                <p className="text-xl text-gray-600">White label support, custom blends, reliable logistics.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-12 relative">
        <h2 
          className="absolute top-0 left-50 text-[16vw] font-bold text-secondary-300 opacity-30 pointer-events-none select-none leading-none z-0"
          style={{ transform: "rotate(-2deg" }}  
        >
          STORY
        </h2>
      </div>
      <div className="max-w-screen-md mx-auto pt-10">
        {/* <h2 className="text-3xl font-semibold mb-4">About Logos Botanicals</h2> */}

      <div className="flex flex-col md:flex-row items-center gap-6 mt-16">
        {/* <Image src="/images/SquareLogo.webp" alt="Logos Botanicals" width={128} height={128} className="rounded shadow" /> */}
        <div>
          {/* <h2 className="text-3xl font-bold mb-2">Roots</h2> */}
          {/* <p className="text-lg text-gray-600">Logos Botanicals began with a mission to...</p> */}
        <p className="mb-4 pt-10 text-lg"><b>Logos Botanicals</b> is owned and operated by Ryan Campbell, a veteran of the legal cannabis
          industry with over 15 years of sourcing and operational experience. Having worked across
          nearly every link in the cannabis supply chain (from cultivation and extraction to global
          distribution) Ryan brings unparalleled insight into one of the industry&apos;s most complex challenges:
          Sourcing.
        </p>
        </div>
      </div>
        <p className="mb-4 text-lg">
          At Logos Botanicals, we bridge the gap between brands, manufacturers, and trusted
          cannabinoid suppliers around the world. With deep relationships and a commitment to radical
          transparency, our goal is simple: build a cleaner, smarter, and more direct cannabinoid supply
          chain.
        </p>
        <p className="mb-4 text-lg">
          We&apos;re the best strategic partners you can ask for! From regulatory guidance and compliance to
          product development and global logistics, Logos Botanicals supports every stage of your
          growth. Our catalog includes everything from high-purity isolates and rare cannabinoids to
          custom blends! Delivered with consistency, speed, and integrity.
        </p>
      </div>
      <div className="relative w-full min-h-[200px] flex items-center justify-center bg-primary-900">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/lab.webp"
            alt="extraction lab"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <h3 className="my-8 lg:max-w-3xl text-3xl text-secondary-100 md:px-8 relative">
          Logos Botanicals is building the cannabinoid supply chain of the future — one rooted in science,
          transparency, and shared success
        </h3>
      </div>
      <svg viewBox="0 0 1440 320" className="w-full h-full">
        <path fill="#f3f4f6" d="M0,256L1440,128L1440,320L0,320Z" />
      </svg>
    </section>
  );
}