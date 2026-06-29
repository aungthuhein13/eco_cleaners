const MAPS_URL =
  "https://maps.app.goo.gl/E1kD2reUfzDkSQ9g7"
export default function Contact() {
  return (
    <section id="contact" className="px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8B7A45]">
            Visit Us
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Stop by Eco Cleaners today.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="rounded-[1.5rem] border border-[#D7C9A3] bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Phone</h3>
            <a
              href="tel:9496284555"
              className="mt-3 block text-[#4B6359] hover:text-[#173B2F]"
            >
              949-628-4555
            </a>
          </div>

          <div className="rounded-[1.5rem] border border-[#D7C9A3] bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Address</h3>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block leading-7 text-[#4B6359] hover:text-[#173B2F]"
            >
              21612 Plano Trabuco Rd Suite E, Trabuco Canyon, CA 92679
            </a>
          </div>

          <div className="rounded-[1.5rem] border border-[#D7C9A3] bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Hours</h3>
            <div className="mt-4 space-y-2 text-[#4B6359]">
              <div className="flex flex-col sm:grid sm:grid-cols-[130px_1fr] sm:gap-3">
                <span>Monday - Friday</span>
                <span className="whitespace-nowrap">8:30 AM - 6:30 PM</span>
              </div>

              <div className="flex flex-col sm:grid sm:grid-cols-[130px_1fr] sm:gap-3">
                <span>Saturday</span>
                <span className="whitespace-nowrap">9:00 AM - 4:00 PM</span>
              </div>

              <div className="flex flex-col sm:grid sm:grid-cols-[130px_1fr] sm:gap-3">
                <span>Sunday</span>
                <span className="whitespace-nowrap">11:00 AM - 2:00 PM</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}