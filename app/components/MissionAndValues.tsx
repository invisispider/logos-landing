import {
  ShieldCheck,
  TrendingUp,
  Handshake,
  Microscope
} from 'lucide-react';

export default function MissionAndValues() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Mission</h2>
        <p className="text-lg text-gray-700">
          To provide trusted, transparent, and scalable cannabinoid sourcing to brands across the globe.
          Combining science, service, and integrity to build the future of plant medicine.
        </p>
      </div>

      {/* SVG Divider */}
      <div className="flex justify-center my-12">
        <svg
          width="100"
          height="16"
          viewBox="0 0 100 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-300"
        >
          <path
            d="M0 8h40M60 8h40"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="50" cy="8" r="4" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex items-start gap-4 bg-gray-50 p-6 rounded shadow-sm">
            <ShieldCheck className="text-blue-600 w-6 h-6 mt-1" />
            <div>
              <h3 className="text-lg font-semibold mb-1">Trust First</h3>
              <p className="text-gray-600">Radical transparency and full-panel COAs on every product.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-gray-50 p-6 rounded shadow-sm">
            <TrendingUp className="text-green-600 w-6 h-6 mt-1" />
            <div>
              <h3 className="text-lg font-semibold mb-1">Scale Smart</h3>
              <p className="text-gray-600">From 1kg to 1,000kg — we support growth.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-gray-50 p-6 rounded shadow-sm">
            <Microscope className="text-purple-600 w-6 h-6 mt-1" />
            <div>
              <h3 className="text-lg font-semibold mb-1">Science-Driven</h3>
              <p className="text-gray-600">Only well-characterized, lab-verified cannabinoids.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-gray-50 p-6 rounded shadow-sm">
            <Handshake className="text-yellow-600 w-6 h-6 mt-1" />
            <div>
              <h3 className="text-lg font-semibold mb-1">Client-Focused</h3>
              <p className="text-gray-600">White label support, custom blends, reliable logistics.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
