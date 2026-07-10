"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const MAPS_URL = "https://maps.app.goo.gl/E1kD2reUfzDkSQ9g7";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-sm backdrop-blur" : "bg-[#F8F7F2]"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <a href="/" className="flex items-center gap-2">
          <Image
            src="/new_logo_transparent_1.png"
            alt="Eco Cleaners logo"
            width={235}
            height={105}
            priority
            sizes="(max-width: 1024px) 120px, 235px"
            className={`h-auto w-auto transition-all duration-300 ${
              scrolled
                ? "max-h-[62px] lg:max-h-[78px]"
                : "max-h-[95px] lg:max-h-[120px]"
            }`}
          />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          <a
            href="/services"
            className="rounded-md px-3 py-2 text-sm font-medium text-[#173B2F] transition-colors hover:text-[#8B7A45]"
          >
            Services
          </a>

          <a
            href="/alteration"
            className="rounded-md px-3 py-2 text-sm font-medium text-[#173B2F] transition-colors hover:text-[#8B7A45]"
          >
            Alterations
          </a>

          <a
            href="/offers"
            className="rounded-md px-3 py-2 text-sm font-medium text-[#173B2F] transition-colors hover:text-[#8B7A45]"
          >
            Offers
          </a>

          <a
            href="/contact"
            className="rounded-md px-3 py-2 text-sm font-medium text-[#173B2F] transition-colors hover:text-[#8B7A45]"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:gap-3">
          <a
            href="tel:9496284555"
            className="rounded-full bg-[#173B2F] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#245646] md:px-5 md:text-sm"
          >
            Call
          </a>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#173B2F] bg-white px-4 py-2 text-xs font-semibold text-[#173B2F] transition-colors hover:bg-[#F8F7F2] md:px-5 md:text-sm"
          >
            Directions
          </a>
        </div>
      </nav>
    </header>
  );
}