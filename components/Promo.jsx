const MAPS_URL =
"https://maps.app.goo.gl/E1kD2reUfzDkSQ9g7"

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
          First Time Only. Dry cleaning only. Ask
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