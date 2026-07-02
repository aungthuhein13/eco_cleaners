const MAPS_URL =
 "https://maps.app.goo.gl/E1kD2reUfzDkSQ9g7"

const offers = [
  {
    label: "Soft Opening Special",
    title: "30% OFF Dry Cleaning",
    description:
      "Enjoy 30% off dry cleaning when you bring in 10 pieces or more.",
    details: ["10 pieces or more", "Dry cleaning only", "Limited time offer"],
    primaryButton: "Call to Ask",
    secondaryButton: "Get Directions",
  },
  {
    label: "Pickup & Delivery",
    title: "$20 OFF Your First Pickup Order",
    description:
      "Try our pickup and delivery service and get $20 off your first order of $50 or more.",
    details: [
      "First pickup order only",
      "$50 minimum order",
      "Limited to first-time pickup customers",
    ],
    primaryButton: "Call to Schedule",
    secondaryButton: "Get Directions",
  },
];

const finePrint = [
  "Offers cannot be combined with other discounts.",
  "Specialty items may not qualify for all promotions.",
  "Alterations, leather, wedding gowns, drapery, and household items may require in-person review.",
  "Offers may change or end at any time.",
];

export const metadata = {
  title: "Offers | Eco Cleaners",
  description:
    "View current Eco Cleaners offers for dry cleaning, pickup and delivery, laundry, and garment care in Trabuco Canyon.",
};

export default function OffersPage() {
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

          <div className="mt-10 max-w-4xl">
            <p className="mb-5 inline-block rounded-full border border-[#C8A85A] bg-white px-4 py-2 text-sm font-medium text-[#8B7A45]">
              Current Offers
            </p>

            <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
              Save on dry cleaning, laundry, and local garment care.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4B6359]">
              View current offers from Eco Cleaners in Trabuco Canyon. Stop by
              or call us with questions about eligible items, turnaround, and
              service availability.
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
        </div>
      </section>

            <section className="px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="rounded-[2rem] border border-[#D7C9A3] bg-white p-8 shadow-sm md:p-10"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8B7A45]">
                {offer.label}
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                {offer.title}
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#4B6359]">
                {offer.description}
              </p>

              <div className="mt-7 space-y-3">
                {offer.details.map((detail) => (
                  <div
                    key={detail}
                    className="flex items-start gap-3 rounded-2xl bg-[#F8F7F2] px-4 py-3 text-[#4B6359]"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#8B7A45]" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:9496284555"
                  className="rounded-full bg-[#173B2F] px-7 py-4 text-center font-semibold text-white hover:bg-[#245646]"
                >
                  {offer.primaryButton}
                </a>

                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#173B2F] bg-white px-7 py-4 text-center font-semibold text-[#173B2F] hover:bg-[#F8F7F2]"
                >
                  {offer.secondaryButton}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

            <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#173B2F] p-8 text-white shadow-xl md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D7C9A3]">
                Offer Details
              </p>

              <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
                Please ask us before drop-off.
              </h2>

              <p className="mt-4 text-lg leading-8 text-white/80">
                Some garments and specialty items need to be reviewed in person.
                We’ll help you understand what applies before we start the work.
              </p>
            </div>

            <div className="space-y-3">
              {finePrint.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 leading-7 text-white/85"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-9 flex flex-col gap-3 border-t border-white/15 pt-8 sm:flex-row">
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
      </section>
      <footer className="border-t border-[#D7C9A3] px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-[#4B6359] md:flex-row">
          <p>© 2026 Eco Cleaners. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}