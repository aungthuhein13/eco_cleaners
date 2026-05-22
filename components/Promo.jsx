const MAPS_URL =
  "https://www.google.com/maps/place/21612+Plano+Trabuco+Rd,+Trabuco+Canyon,+CA+92679/@33.6479431,-117.576734,19z/data=!3m1!4b1!4m6!3m5!1s0x80dceb1902ca3587:0xba9686ecc1ae1983!8m2!3d33.6479431!4d-117.5760903!16s%2Fg%2F11c3q3c5_j?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D";


export default function Promo() {
  return (
    <section id="special" className="px-6 py-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#173B2F] p-8 text-white shadow-xl md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D7C9A3]">
          Soft Opening Special
        </p>

        <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
          30% off dry cleaning
        </h2>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-white/80">
          Available for orders of 10 pieces or more. Dry cleaning only. Ask
          in-store for details.
        </p>

       <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="tel:9496284555"
            className="inline-block rounded-full bg-white px-7 py-4 text-center font-semibold text-[#173B2F] hover:bg-[#FFF9E8]"
          >
            Call Now
          </a>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border border-white/70 px-7 py-4 text-center font-semibold text-white hover:bg-white/10"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}