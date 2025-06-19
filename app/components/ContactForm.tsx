import Image from "next/image";
export default function ContactForm() {
  return (
    <section id="contact" className="bg-gray-100 py-16 px-4">
      <div className="max-w-screen-sm mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-8">Let&apos;s Build Your Next Best Product</h2>
        <form 
          action="https://formspree.io/f/xkgbbdbb" 
          method="POST" 
          className="space-y-4 flex flex-col"
        >
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
          <div className="flex items-center justify-center mt-10 space-x-4">
            {/* <Image src="/images/SquareLogo.webp" alt="Logos Botanicals" width={64} height={64} className="rounded shadow" /> */}
            <button type="submit" className="mx-auto bg-secondary-600 text-white px-6 py-2 rounded-full hover:bg-secondary-700 transition">Send Message</button>
            {/* <a href="#shop" className="bg-green-600 text-white px-5 py-3 rounded hover:bg-green-700 text-lg font-semibold">
              Shop Now
            </a> */}
          </div>
        </form>
      </div>
    </section>
  );    
}; 