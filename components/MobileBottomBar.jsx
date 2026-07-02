const MAPS_URL =
  "https://maps.app.goo.gl/E1kD2reUfzDkSQ9g7";

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#D7C9A3] bg-[#F8F7F2]/95 px-4 py-3 shadow-[0_-8px_20px_rgba(0,0,0,0.08)] backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
        <a
          href="/services"
          className="rounded-full bg-white px-3 py-3 text-center text-sm font-semibold text-[#173B2F] shadow-sm"
        >
          Services
        </a>

        <a
          href="/offers"
          className="rounded-full bg-[#173B2F] px-3 py-3 text-center text-sm font-semibold text-white shadow-sm"
        >
          Offers
        </a>

        <a
          href="/contact"
          className="rounded-full bg-white px-3 py-3 text-center text-sm font-semibold text-[#173B2F] shadow-sm"
        >
          Contact
        </a>
      </div>
    </div>
  );
}