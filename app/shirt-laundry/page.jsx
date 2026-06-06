import Image from "next/image";

const MAPS_URL =
  "https://www.google.com/maps/place/21612+Plano+Trabuco+Rd,+Trabuco+Canyon,+CA+92679/@33.6479431,-117.576734,19z/data=!3m1!4b1!4m6!3m5!1s0x80dceb1902ca3587:0xba9686ecc1ae1983!8m2!3d33.6479431!4d-117.5760903!16s%2Fg%2F11c3q3c5_j?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D";

const shirtServices = [
  "Button-Down Shirts",
  "Business Shirts",
  "Casual Shirts",
  "Flannel Shirts",
  "Short-Sleeve Shirts",
  "Hawaiian Shirts",
];

export const metadata = {
  title: "Shirt Laundry in Trabuco Canyon | Eco Cleaners",
  description:
    "Professional shirt laundry in Trabuco Canyon. Dress shirts, button-down shirts, laundering, pressing, collar and cuff care, and hanger or folded finish.",
};

export default function ShirtLaundryPage() {
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
                Shirt Laundry Service
              </p>

              <h1 className="max-w-xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
                Crisp, clean shirts without the hassle.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#4B6359]">
                Eco Cleaners provides professional shirt laundry for dress
                shirts, button-downs, and everyday business shirts. We focus on
                clean finishing, collar and cuff care, and a polished look that
                is ready to wear.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:9496284555"
                  className="rounded-full bg-[#173B2F] px-7 py-4 text-center font-semibold text-white hover:bg-[#245646]"
                >
                  Call About Shirt Laundry
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
                  src="/shirt_pressed.png"
                  alt="Professional shirt laundry and pressing at Eco Cleaners"
                  fill
                  priority
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/92 p-4 shadow-lg backdrop-blur sm:bottom-5 sm:left-5 sm:right-5 sm:p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8B7A45] sm:text-xs">
                    Professional Finish
                  </p>

                  <h2 className="mt-2 text-xl font-semibold text-[#173B2F] sm:text-2xl">
                    Clean, pressed, and ready for work.
                  </h2>

                  <p className="mt-2 text-xs leading-5 text-[#4B6359] sm:text-sm sm:leading-6">
                    Shirt laundry with careful finishing for everyday business
                    wear.
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
              What is shirt laundry?
            </h2>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-[#4B6359]">
              Shirt laundry is a professional cleaning and finishing process for shirts which 
              are typically washed with water, cleaned, dried, pressed, and finished so they look
              crisp, fresh, and ready to wear. It is a great option for everyday work
              shirts that need a polished look.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8B7A45]">
              What We Handle
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Shirt care for work, events, and everyday wear.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#4B6359]">
              Whether you need shirts cleaned for the workweek or prepared for
              a special occasion, we help your shirts look crisp, fresh, and
              professionally finished.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {shirtServices.map((service) => (
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
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          <div className="rounded-[1.5rem] border border-[#D7C9A3] bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Collar & Cuff Care</h3>
            <p className="mt-3 leading-7 text-[#4B6359]">
              Collars and cuffs often show wear first. We give shirts careful
              attention before finishing.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-[#D7C9A3] bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Pressed Finish</h3>
            <p className="mt-3 leading-7 text-[#4B6359]">
              Shirts are finished to look clean, crisp, and ready for the
              office, meetings, or special occasions.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-[#D7C9A3] bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Hanger or Folded</h3>
            <p className="mt-3 leading-7 text-[#4B6359]">
              Ask us about hanger or folded finish options based on your
              preference and shirt type.
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
                Need shirts cleaned and pressed?
              </h2>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/80">
                Stop by Eco Cleaners for professional shirt laundry and garment
                care in Trabuco Canyon.
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