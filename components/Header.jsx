"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const MAPS_URL = "https://maps.app.goo.gl/E1kD2reUfzDkSQ9g7";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pickup & Delivery", href: "/pickup-delivery" },
  { label: "Alterations", href: "/alteration" },
  { label: "Offers", href: "/offers" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
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
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur"
          : "bg-[#F8F7F2]"
      }`}
    >
      {/* Mobile header */}
      <div
        className={`relative flex items-center justify-between px-5 transition-all duration-300 lg:hidden ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        {/* Empty space balances the hamburger button */}
        <div className="h-11 w-11" />

        <a
          href="/"
          className="absolute left-1/2 -translate-x-1/2"
          aria-label="Eco Cleaners home"
        >
          <Image
            src="/new_logo_transparent_1.png"
            alt="Eco Cleaners logo"
            width={220}
            height={130}
            priority
            className={`h-auto w-auto transition-all duration-300 ${
              scrolled ? "max-h-[58px]" : "max-h-[82px]"
            }`}
          />
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center text-[#173B2F]"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <span className="text-4xl font-light leading-none">×</span>
          ) : (
            <span className="flex flex-col gap-[5px]">
              <span className="block h-[2px] w-7 rounded-full bg-[#173B2F]" />
              <span className="block h-[2px] w-7 rounded-full bg-[#173B2F]" />
              <span className="block h-[2px] w-7 rounded-full bg-[#173B2F]" />
            </span>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="border-t border-[#D7C9A3]/50 bg-white px-5 py-4 shadow-lg lg:hidden">
          <nav className="mx-auto flex max-w-lg flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#D7C9A3]/40 px-3 py-4 text-base font-semibold text-[#173B2F] last:border-b-0 hover:text-[#8B7A45]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Desktop header */}
      <nav
        className={`mx-auto hidden max-w-7xl items-center justify-between px-6 transition-all duration-300 lg:flex lg:px-8 ${
          scrolled ? "py-2" : "py-5"
        }`}
      >
        <a href="/" className="flex items-center">
          <Image
            src="/new_logo_transparent_1.png"
            alt="Eco Cleaners logo"
            width={300}
            height={160}
            priority
            className={`h-auto w-auto transition-all duration-300 ${
              scrolled ? "max-h-[70px]" : "max-h-[110px]"
            }`}
          />
        </a>

        <div className="flex items-center gap-1">
          {navLinks.slice(1).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-[#173B2F] transition-colors hover:text-[#8B7A45]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="tel:9496284555"
            className="rounded-full bg-[#173B2F] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#245646]"
          >
            Call
          </a>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#173B2F] bg-white px-5 py-2.5 text-sm font-semibold text-[#173B2F] hover:bg-[#F8F7F2]"
          >
            Directions
          </a>
        </div>
      </nav>
    </header>
  );
}