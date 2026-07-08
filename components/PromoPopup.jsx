"use client";

import { useEffect, useState } from "react";

const MAPS_URL = "https://maps.app.goo.gl/E1kD2reUfzDkSQ9g7";

export default function PromoPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("ecoPromoPopupSeen");

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem("ecoPromoPopupSeen", "true");
      }, 700);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/55 px-5">
      <div className="relative w-full max-w-md rounded-[2rem] bg-white px-7 py-9 text-center shadow-2xl md:px-10">
        <button
          type="button"
          onClick={() => setShowPopup(false)}
          className="absolute right-5 top-5 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-3xl leading-none text-[#4B6359] hover:bg-[#F8F7F2] hover:text-[#173B2F]"
          aria-label="Close popup"
        >
          ×
        </button>

        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8B7A45]">
          Soft Opening Special
        </p>

        <div className="mx-auto mt-5 h-px w-20 bg-[#C8A85A]" />

        <h2 className="mt-6 text-6xl font-extrabold tracking-tight text-[#173B2F] sm:text-7xl">
          30% OFF
        </h2>

        <p className="mt-2 text-2xl font-semibold text-[#173B2F]">
          Dry Cleaning
        </p>

        <div className="mx-auto mt-6 rounded-2xl bg-[#F8F7F2] px-4 py-3 text-sm font-medium text-[#173B2F]">
          10 pieces or more • Dry cleaning only • Limited time
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href="tel:9496284555"
            className="inline-block rounded-full bg-[#173B2F] px-7 py-4 text-base font-semibold text-white shadow-md hover:bg-[#245646]"
          >
            Call to Claim Offer
          </a>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border border-[#173B2F] bg-white px-7 py-4 text-base font-semibold text-[#173B2F] shadow-sm hover:bg-[#F8F7F2]"
          >
            Get Directions
          </a>
        </div>
      </div>
    </div>
  );
}