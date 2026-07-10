import Image from "next/image";

const MAPS_URL =
"https://maps.app.goo.gl/E1kD2reUfzDkSQ9g7"

const draperyItems = [
  "Drapes",
  "Curtains",
  "Window Panels",
  "Lined Drapes",
  "Home Drapery",
  "Office Drapery",
];

export const metadata = {
  title: "Drapery & Curtain Cleaning in Trabuco Canyon | Eco Cleaners",
  description:
    "Drapery and curtain cleaning in Trabuco Canyon. Bring drapes, curtains, sheers, and fabric window treatments to Eco Cleaners for review.",
};

export default function DraperyCleaningPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F2] pb-24 text-[#173B2F] md:pb-0">
      <section className="px-6 pt-14 pb-10">
        <div className="mx-auto max-w-7xl">
          <div className="mt-3 grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-5 inline-block rounded-full border border-[#C8A85A] bg-white px-4 py-2 text-sm font-medium text-[#8B7A45]">
                Drapery & Curtain Cleaning
              </p>

              <h1 className="max-w-xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
                Fresh care for drapes, curtains, and window fabrics.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#4B6359]">
                Eco Cleaners helps with drapes, curtains, sheers, and fabric
                window treatments. Because drapery varies by fabric, lining,
                size, and condition, we recommend bringing items in for review.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:9496284555"
                  className="rounded-full bg-[#173B2F] px-7 py-4 text-center font-semibold text-white hover:bg-[#245646]"
                >
                  Call About Drapery Cleaning
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
                  src="/drapery-care.png"
                  alt="Drapery and curtain cleaning at Eco Cleaners"
                  fill
                  priority
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/92 p-4 shadow-lg backdrop-blur sm:bottom-5 sm:left-5 sm:right-5 sm:p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8B7A45] sm:text-xs">
                    Home Fabric Care
                  </p>

                  <h2 className="mt-2 text-xl font-semibold text-[#173B2F] sm:text-2xl">
                    Drapes and curtains reviewed with care.
                  </h2>

                  <p className="mt-2 text-xs leading-5 text-[#4B6359] sm:text-sm sm:leading-6">
                    Fabric, lining, size, dust, sun exposure, and condition can
                    affect cleaning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-[#D7C9A3] bg-white p-8 shadow-sm md:p-10">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              What is drapery cleaning?
            </h2>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-[#4B6359]">
              Drapery cleaning is a specialty cleaning process for curtains,
              drapes, sheers, and fabric window treatments. Each item may need
              different care depending on fabric type, lining, dust, sun
              exposure, stains, size, and overall condition.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8B7A45]">
              What We Review
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Drapery and curtain care for your home or business.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#4B6359]">
              Bring your drapes or curtains in and we’ll review the fabric,
              lining, size, and condition before recommending the best cleaning
              option.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {draperyItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#D7C9A3] bg-white p-5 font-medium shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          <div className="rounded-[1.5rem] border border-[#D7C9A3] bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Fabric Review</h3>
            <p className="mt-3 leading-7 text-[#4B6359]">
              Drapes and curtains vary by fabric, lining, backing, sun exposure,
              and age. We review items before cleaning.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-[#D7C9A3] bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Dust & Soil Care</h3>
            <p className="mt-3 leading-7 text-[#4B6359]">
              Window treatments can collect dust, odors, and soil over time,
              especially in busy homes or offices.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-[#D7C9A3] bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">In-Person Quote</h3>
            <p className="mt-3 leading-7 text-[#4B6359]">
              Pricing and cleaning options can depend on size, material,
              lining, condition, and care-label instructions.
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
                Need drapes or curtains cleaned?
              </h2>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/80">
                Stop by with your drapery or curtain items for an in-person
                review. We’ll help you understand the best cleaning option.
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