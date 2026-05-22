import Image from "next/image";

const MAPS_URL =
  "https://www.google.com/maps/place/21612+Plano+Trabuco+Rd,+Trabuco+Canyon,+CA+92679/@33.6479431,-117.576734,19z/data=!3m1!4b1!4m6!3m5!1s0x80dceb1902ca3587:0xba9686ecc1ae1983!8m2!3d33.6479431!4d-117.5760903!16s%2Fg%2F11c3q3c5_j?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D";

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
            className="h-auto w-[160px] md:w-[200px]"
          />
        </a>

        <div className="hidden gap-8 text-sm font-medium md:flex">
          <a href="#services" className="hover:text-[#8B7A45]">
            Services
          </a>
          <a href="#special" className="hover:text-[#8B7A45]">
            Special
          </a>
          <a href="#contact" className="hover:text-[#8B7A45]">
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