"use client";

import { usePathname } from "next/navigation";

const MAPS_URL = "https://maps.app.goo.gl/E1kD2reUfzDkSQ9g7";

const PICKUP_TEXT_URL =
  "sms:9496284555?body=Hi%20Eco%20Cleaners%2C%20I%20would%20like%20to%20schedule%20a%20pickup.%20My%20ZIP%20code%20is%20";

export default function MobileBottomBar() {
  const pathname = usePathname();

  const isPickupDeliveryPage = pathname === "/pickup-delivery";

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/10 shadow-[0_-6px_20px_rgba(0,0,0,0.14)] lg:hidden"
      aria-label="Mobile quick actions"
    >
      <a
        href="tel:9496284555"
        className="flex min-h-[72px] items-center justify-center gap-2 bg-[#173B2F] px-3 text-center font-semibold text-white"
      >
        <PhoneIcon />
        <span>Call</span>
      </a>

      <a
        href={
          isPickupDeliveryPage
            ? PICKUP_TEXT_URL
            : "sms:9496284555"
        }
        className="flex min-h-[72px] items-center justify-center gap-2 bg-[#24463B] px-3 text-center font-semibold text-white"
      >
        <MessageIcon />
        <span>Text</span>
      </a>

      {isPickupDeliveryPage ? (
        <a
          href={PICKUP_TEXT_URL}
          className="flex min-h-[72px] items-center justify-center gap-2 bg-[#C8A13A] px-3 text-center font-semibold text-white"
        >
          <PickupIcon />
          <span>Schedule Pickup</span>
        </a>
      ) : (
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[72px] items-center justify-center gap-2 bg-[#C8A13A] px-3 text-center font-semibold text-white"
        >
          <LocationIcon />
          <span>Directions</span>
        </a>
      )}
    </nav>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 4h3l2 5-2 1.5a15 15 0 0 0 5.5 5.5L15 14l5 2v3c0 1.1-.9 2-2 2C9.7 21 3 14.3 3 6c0-1.1.9-2 2-2Z"
      />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 5h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 3v-4a2 2 0 0 1-1-1.7V7a2 2 0 0 1 2-2Z"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
      />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function PickupIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 7h11v9H3zM14 10h4l3 3v3h-7z"
      />
      <circle cx="7" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
    </svg>
  );
}