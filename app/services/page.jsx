import Image from "next/image";

const MAPS_URL =
"https://maps.app.goo.gl/E1kD2reUfzDkSQ9g7"

const services = [
  {
  title: "Pickup & Delivery",
  description:
    "Convenient local pickup and delivery for dry cleaning, laundry, and eligible household items.",
  href: "/pickup-delivery",
  },
  {
    title: "Dry Cleaning",
    description:
      "Professional cleaning for suits, dresses, coats, formalwear, delicate garments, and everyday clothing.",
    href: "/dry-cleaning",
  },
  {
    title: "Alterations",
    description:
      "Hemming, tapering, waist adjustments, sleeve shortening, zipper replacement, seam repair, and more.",
    href: "/alteration",
  },
  {
    title: "Shirt Laundry",
    description:
      "Crisp shirt laundry for dress shirts, button-downs, and business shirts with a clean pressed finish.",
    href: "/shirt-laundry",
  },
  {
    title: "Wash & Fold",
    description:
      "Convenient laundry service for everyday clothes, towels, workout clothes, pajamas, and family laundry.",
    href: "/wash-and-fold",
  },
  {
    title: "Leather Care",
    description:
      "Specialty review for leather jackets, suede garments, coats, and other leather items.",
    href: "/leather-cleaning",
  },
  {
    title: "Household Items",
    description:
      "Cleaning care for comforters, blankets, bedspreads, linens, tablecloths, pillow covers, and more.",
    href: "/household-items",
  },
  {
    title: "Wedding Gown Cleaning",
    description:
      "Special care for wedding gowns, formal dresses, lace, beading, delicate fabrics, and special occasion garments.",
    href: "/wedding-gown-cleaning",
  },
  {
    title: "Drapery Cleaning",
    description:
      "Cleaning review for drapes, curtains, sheers, fabric panels, and window treatments.",
    href: "/drapery-cleaning",
  },
];

const serviceGuide = [
  {
    title: "Choose Dry Cleaning",
    description:
      "Best for suits, dresses, coats, formal wear, delicate garments, and items that should not be washed like regular laundry.",
  },
  {
    title: "Choose Shirt Laundry",
    description:
      "Best for dress shirts, button-downs, and business shirts that need washing, pressing, and a crisp finish.",
  },
  {
    title: "Choose Wash & Fold",
    description:
      "When you want us to wash, dry, and neatly fold your everyday laundry — perfect for busy weeks when you don’t have time.",
  },
  {
    title: "Choose Alterations",
    description:
      "When your clothes need a better fit, from pants hems and dress hems to basic repairs and adjustments.",
  },
];

export const metadata = {
  title: "Our Services | Eco Cleaners",
  description:
    "Eco Cleaners offers dry cleaning, alterations, shirt laundry, wash and fold, leather care, household item cleaning, wedding gown cleaning, and drapery cleaning in Trabuco Canyon.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F2] pb-24 text-[#173B2F] md:pb-0">
      <section className="px-6 pt-14 pb-10">
        <div className="mx-auto max-w-7xl">
            <div className="mt-3 grid items-center gap-12 md:grid-cols-2">
                <div>
                    <p className="mb-5 inline-block rounded-full border border-[#C8A85A] bg-white px-4 py-2 text-sm font-medium text-[#8B7A45]">
                    Our Services
                    </p>

                    <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
                    Dry cleaning, laundry, alterations, and specialty care.
                    </h1>

                    <p className="mt-6 max-w-xl text-lg leading-8 text-[#4B6359]">
                    Eco Cleaners provides premium garment care in Trabuco Canyon,
                    including dry cleaning, shirt laundry, alterations, wash & fold,
                    leather care, household items, wedding gowns, and drapery cleaning.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="tel:9496284555"
                            className="rounded-full bg-[#173B2F] px-7 py-4 text-center font-semibold text-white hover:bg-[#245646]"
                        >
                            Call About Our Services
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
                        src="/services-rack.JPEG"
                        alt="Finished garments on rack at Eco Cleaners"
                        fill
                        priority
                        className="object-cover object-[70%_center]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                        <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/92 p-4 shadow-lg backdrop-blur sm:bottom-5 sm:left-5 sm:right-5 sm:p-5">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8B7A45] sm:text-xs">
                            Complete Garment Care
                            </p>

                            <h2 className="mt-2 text-xl font-semibold text-[#173B2F] sm:text-2xl">
                            Dry cleaning, laundry, alterations, household items & specialty items.
                            </h2>

                            <p className="mt-2 text-xs leading-5 text-[#4B6359] sm:text-sm sm:leading-6">
                            All in one local cleaner.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8B7A45]">
              Services
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Everything we can help with.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#4B6359]">
              Choose a service below to learn more about what we offer.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <a
                key ={service.title}
                href={service.href}
                className="group rounded-[1.5rem] border border-[#D7C9A3] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>

                <p className="mt-3 leading-7 text-[#4B6359]">
                  {service.description}
                </p>

                <p className="mt-5 text-sm font-semibold text-[#8B7A45] group-hover:text-[#173B2F]">
                  Learn More →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-[#D7C9A3] bg-white p-8 shadow-sm md:p-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8B7A45]">
                Service Guide
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                Not sure which service you need?
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#4B6359]">
                Here is a simple guide to help you choose the right service for
                your item.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {serviceGuide.map((item) => (
                <div key={item.title} className="rounded-2xl bg-[#F8F7F2] p-6">
                  <h3 className="text-xl font-semibold">{item.title}</h3>

                  <p className="mt-3 leading-7 text-[#4B6359]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-[#D7C9A3] bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8B7A45]">
              Specialty Items
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Some items need an in-person review.
            </h2>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-[#4B6359]">
              Leather, suede, wedding gowns, drapery, and some household items
              can vary by fabric, age, condition, size, stains, lining, and
              special details. Please bring specialty items in so we can review
              the best cleaning option before moving forward.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#173B2F] p-8 text-white shadow-xl md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D7C9A3]">
                Visit Eco Cleaners
              </p>

              <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
                Need help choosing a service?
              </h2>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/80">
                Stop by Eco Cleaners with your item. We’ll take a look and help
                you understand the best next step.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="tel:9496284555"
                className="rounded-full bg-white px-7 py-4 text-center font-semibold text-[#173B2F] hover:bg-[#FFF9E8]"
              >
                Call Now
              </a>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/70 px-7 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Get Directions
              </a>
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