import Image from "next/image";

const MAPS_URL =
 "https://maps.app.goo.gl/E1kD2reUfzDkSQ9g7"

const visitNotes = [
  {
    title: "Alterations",
    description:
      "Please bring your garment in for an in-person quote so we can check the fit, fabric, and work needed.",
  },
  {
    title: "Stains",
    description:
      "Point out any stains or special concerns at drop-off so we can review them before cleaning.",
  },
  {
    title: "Specialty Items",
    description:
      "Leather, wedding gowns, drapery, and delicate items may need an in-person review before cleaning.",
  },
  {
    title: "Rush Service",
    description:
      "Same-day or quick turnaround may be available on select items. Please ask us at drop-off.",
  },
];

const serviceAreas = [
  "Trabuco Canyon",
  "Rancho Santa Margarita",
  "Lake Forest",
  "Mission Viejo",
  "Foothill Ranch",
  "Coto de Caza",
  "Portola Hills",
  "Dove Canyon",
];

export const metadata = {
  title: "Contact Eco Cleaners | Trabuco Canyon Dry Cleaner",
  description:
    "Contact Eco Cleaners in Trabuco Canyon for dry cleaning, laundry, alterations, and specialty garment care.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F2] text-[#173B2F]">
      <section className="px-6 pt-14 pb-10">
        <div className="mx-auto max-w-7xl">
          <a
            href="/"
            className="text-sm font-semibold text-[#8B7A45] hover:text-[#173B2F]"
          >
            ← Back to Home
          </a>

          <div className="mt-10 grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-5 inline-block rounded-full border border-[#C8A85A] bg-white px-4 py-2 text-sm font-medium text-[#8B7A45]">
                Contact
              </p>

              <h1 className="max-w-xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
                Visit Eco Cleaners in Trabuco Canyon.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#4B6359]">
                We’re located in Trabuco Marketplace near CVS. Stop by for dry
                cleaning, laundry, alterations, and specialty garment care.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:9496284555"
                  className="rounded-full bg-[#173B2F] px-7 py-4 text-center font-semibold text-white hover:bg-[#245646]"
                >
                  Call 949-628-4555
                </a>

                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#173B2F] bg-white px-7 py-4 text-center font-semibold text-[#173B2F] hover:bg-[#F8F7F2]"
                >
                  Get Directions
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#D7C9A3] bg-white p-3 shadow-lg">
              <div className="relative h-[420px] overflow-hidden rounded-[1.5rem] md:h-[520px]">
                <Image
                  src="/front.JPEG"
                  alt="Eco Cleaners storefront in Trabuco Canyon"
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

            <section className="px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          <div className="rounded-[1.5rem] border border-[#D7C9A3] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Phone</h2>

            <a
              href="tel:9496284555"
              className="mt-3 block text-lg text-[#4B6359] hover:text-[#173B2F]"
            >
              949-628-4555
            </a>

            <p className="mt-4 leading-7 text-[#4B6359]">
              Call us with questions about services, turnaround, or specialty
              items.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-[#D7C9A3] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Address</h2>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block leading-7 text-[#4B6359] hover:text-[#173B2F]"
            >
              21612 Plano Trabuco Rd Suite E
              <br />
              Trabuco Canyon, CA 92679
            </a>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-full bg-[#173B2F] px-5 py-2 text-sm font-semibold text-white hover:bg-[#245646]"
            >
              Get Directions
            </a>
          </div>

          <div className="rounded-[1.5rem] border border-[#D7C9A3] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Hours</h2>

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
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#173B2F] p-6 text-white shadow-xl md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D7C9A3]">
                Service Areas
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Serving Trabuco Canyon and nearby communities.
            </h2>

            <p className="mt-4 max-w-xl text-lg leading-8 text-white/80">
            Eco Cleaners is located in Trabuco Marketplace near CVS Pharmacy and
            serves customers throughout the surrounding area.
            </p>

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {serviceAreas.map((area) => (
            <div
              key={area}
              className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 font-medium text-white"
            >
              {area}
            </div>
          ))}
        </div>

        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-block rounded-full bg-white px-7 py-4 text-center font-semibold text-[#173B2F] hover:bg-[#FFF9E8]"
        >
          Get Directions
        </a>
      </div>

      <div className="overflow-hidden rounded-[1.5rem] border border-white/20 bg-white/10 p-3">
        <div className="overflow-hidden rounded-[1.2rem] bg-white">
          <iframe
            title="Eco Cleaners location map"
            src="https://www.google.com/maps?q=Eco%20Cleaners%2021612%20Plano%20Trabuco%20Rd%20Suite%20E%20Trabuco%20Canyon%20CA%2092679&output=embed"
            className="h-[360px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-4 rounded-2xl bg-white/10 p-5">
          <h3 className="text-xl font-semibold">Eco Cleaners</h3>

          <p className="mt-2 leading-7 text-white/80">
            21612 Plano Trabuco Rd Suite E
            <br />
            Trabuco Canyon, CA 92679
          </p>

          <p className="mt-3 text-sm font-medium text-[#D7C9A3]">
            Located in Trabuco Marketplace near CVS Pharmacy.
          </p>
        </div>
       </div>
      </div>
     </div>
    </section>            
                  
      <footer className="border-t border-[#D7C9A3] px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-[#4B6359] md:flex-row">
          <p>© 2026 Eco Cleaners. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}