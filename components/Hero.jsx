import Image from "next/image";

const MAPS_URL =
"https://maps.app.goo.gl/E1kD2reUfzDkSQ9g7"

export default function Hero() {
  return (
    <section className="px-6 pt-14 pb-10">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-5 inline-block rounded-full border border-[#C8A85A] bg-white px-4 py-2 text-sm font-medium text-[#8B7A45]">
            Soft Opening • 30% off Dry Cleaning
          </p>

          <h2 className="max-w-xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
            Now open in Trabuco Canyon
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#4B6359]">
            We offer premium garment care with eco-friendly practices and quick turnaround
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
              href="/services"
              className="rounded-full border border-[#C8A85A] bg-white px-7 py-4 text-center font-semibold text-[#173B2F] hover:bg-[#FFF9E8]"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#D7C9A3] bg-white p-3 shadow-lg">
          <div className="relative h-[360px] overflow-hidden rounded-[1.5rem] md:h-[460px]">
            <Image
              src="/storefront.JPEG"
              alt="Eco Cleaners storefront in Trabuco Canyon"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}