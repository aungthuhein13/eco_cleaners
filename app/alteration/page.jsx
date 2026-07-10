import Image from "next/image";
import PagePromoPopup from "@/components/PagePromoPopup";

const MAPS_URL =
"https://maps.app.goo.gl/E1kD2reUfzDkSQ9g7"

const alterationServices = [
  "Waist Adjustments",
  "Side Seam Adjustments",
  "Sleeve Shortening",
  "Tapering",
  "Zipper Replacement",
  "Strap Shortening",
  "Darts & Fit Adjustments",
  "Button Replacement",
  "Seam Repair",
  "Patch & Hole Repair",
  "Hem Adjustments",
  "Lining Repair",
];

export const metadata = {
  title: "Alterations & Tailoring | Eco Cleaners",
  description:
    "Alterations and tailoring services in Trabuco Canyon. Pants hemming, dress alterations, sleeve shortening, repairs, and more.",
};

export default function AlterationsPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F2] text-[#173B2F]">
      <PagePromoPopup
        storageKey="ecoAlterationPopupSeen"
        label="Alteration Offer"
        title="$5 OFF"
        subtitle="Alterations $50+"
        details="Get $5 off alteration orders of $50 or more. Hemming, repairs, waist adjustments, tapering, zipper replacement, and more. In-person quote recommended."
        primaryButton="Call to Ask"
        secondaryButton="Get Directions"
      />
      <section className="px-6 py-16">
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
                Alterations & Tailoring
              </p>

              <h1 className="max-w-xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
                Better fit. Better look. Less worry.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#4B6359]">
                Eco Cleaners offers reliable alteration services for everyday
                clothing, workwear, dresses, suits, and special garments. Bring
                your item in and we’ll help you understand what can be adjusted.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:9496284555"
                  className="rounded-full bg-[#173B2F] px-7 py-4 text-center font-semibold text-white hover:bg-[#245646]"
                >
                  Call About Alterations
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
                    src="/alteration.JPEG"
                    alt="Eco Cleaners alteration service"
                    fill
                    priority
                    className="object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/92 p-4 shadow-lg backdrop-blur sm:bottom-5 sm:left-5 sm:right-5 sm:p-5">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8B7A45] sm:text-xs">
                            In-Person Quotes
                        </p>

                        <h2 className="mt-2 text-xl font-semibold text-[#173B2F] sm:text-2xl">
                            Bring it in for the best estimate.
                        </h2>

                        <p className="mt-2 text-xs leading-5 text-[#4B6359] sm:text-sm sm:leading-6">
                            Alteration pricing depends on the garment, fabric, fit, and complexity.
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
              What are alterations?
            </h2>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-[#4B6359]">
              Alterations are adjustments made to clothing so they fit, feel, and look
              better. This can include hemming pants, shortening sleeves, taking in
              sides, adjusting the waist, replacing zippers, repairing seams, or making
              small changes to improve the shape and comfort of a garment.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8B7A45]">
              What We Can Help With
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Common alteration services.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#4B6359]">
              From simple hems to fit adjustments, our goal is to help your
              clothes feel more comfortable and look more polished.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {alterationServices.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-[#D7C9A3] bg-white p-5 font-medium shadow-sm"
              >
                {service}
              </div>
            ))}
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
                Need something altered?
              </h2>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/80">
                Stop by with your garment for an in-person quote. We’ll take a
                look and help you decide the best next step.
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