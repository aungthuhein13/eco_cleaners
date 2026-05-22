const MAPS_URL =
  "https://www.google.com/maps/place/21612+Plano+Trabuco+Rd,+Trabuco+Canyon,+CA+92679/@33.6479431,-117.576734,19z/data=!3m1!4b1!4m6!3m5!1s0x80dceb1902ca3587:0xba9686ecc1ae1983!8m2!3d33.6479431!4d-117.5760903!16s%2Fg%2F11c3q3c5_j?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D";


export default function Hero() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-5 inline-block rounded-full border border-[#C8A85A] bg-white px-4 py-2 text-sm font-medium text-[#8B7A45]">
            Now Open • Premium Care
          </p>

          <h2 className="max-w-xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
            Fresh, polished, and ready to wear.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#4B6359]">
            We offer premium garment care with eco-conscious practices and quick turnaround
            options.
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

            <a
              href="#services"
              className="rounded-full border border-[#C8A85A] bg-white px-7 py-4 text-center font-semibold text-[#173B2F] hover:bg-[#FFF9E8]"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#D7C9A3] bg-white p-8 shadow-lg">
          <div className="rounded-[1.5rem] bg-[#F8F7F2] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8B7A45]">
              Our Story
            </p>

            <h3 className="mt-5 text-3xl font-semibold">
              We care for your clothes like they matter — because they do.
            </h3>

            <p className="mt-4 leading-7 text-[#4B6359]">
              With over 10 years of experience in the industry, 
              we build dry cleaners on a simple belief: your clothes are part of your everyday life.
              We focus on careful cleaning, proper handling, and friendly service 
              so you can trust us with the pieces you wear most.
            </p>

            <div className="mt-8 space-y-3 text-sm">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                10+ years of experience
              </div>

              <div className="rounded-2xl bg-white p-4 shadow-sm">
                Eco-Friendly
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}