import Image from "next/image";

const MAPS_URL =
  "https://maps.app.goo.gl/E1kD2reUfzDkSQ9g7";

export default function Header() {
  return (
    <header className="px-5 py-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a href="/" className="flex items-center">
          <Image
            src="/eco-cleaners-logo-transparent.png"
            alt="Eco Cleaners logo"
            width={140}
            height={80}
            priority
            className="h-auto w-[90px] md:w-[115px]"
          />
        </a>

        <div className="hidden gap-8 text-sm font-medium md:flex">
          <a href="/services" className="hover:text-[#8B7A45]">
            Services
          </a>

          <a href="/alteration" className="hover:text-[#8B7A45]">
            Alteration
          </a>

          <a href="/offers" className="hover:text-[#8B7A45]">
            Offers
          </a>

          <a href="/contact" className="hover:text-[#8B7A45]">
            Contact
          </a>
        </div>

       <div className="flex items-center gap-2">
          <a
            href="tel:9496284555"
            className="rounded-full bg-[#173B2F] px-4 py-2 text-xs font-semibold text-white hover:bg-[#245646] md:px-5 md:text-sm"
          >
            Call
          </a>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#173B2F] bg-white px-4 py-2 text-xs font-semibold text-[#173B2F] hover:bg-[#F8F7F2] md:px-5 md:text-sm"
          >
            Directions
          </a>
        </div>
      </nav>
    </header>
  );
}