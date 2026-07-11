const services = [
  {
  title: "Pickup & Delivery",
  description:
    "Convenient local pickup and delivery for dry cleaning, laundry, and eligible household items.",
  href: "/pickup-delivery",
  },
  {
    title: "Dry Cleaning",
    description:
      "Premium cleaning for suits, dresses, coats, delicate garments, and everyday wear.",
      href: "/dry-cleaning",
  },
  {
    title: "Shirt Laundry",
    description:
      "Fresh and neatly finished laundry shirts service for busy local customers.",
      href: "/shirt-laundry",
  },
  {
    title: "Alterations",
    description:
      "Hemming, simple repairs, adjustments, and tailoring support for a better fit.",
      href: "/alteration",
  },
  {
    title: "Leather Cleaning",
    description:
      "Careful handling for leather and specialty items. Availability may vary by item.",
      href: "/leather-cleaning",
  },
  {
    title: "Wash & Fold",
    description:
      "Convenient wash and fold service for everyday laundry, neatly cleaned and folded.",
      href: "/wash-and-fold",
  },
  {
    title: "Household Items",
    description:
      "Cleaning care for household items such as blankets, linens, tablecloths, and more.",
      href: "/household-items",
  },
  {
    title: "Drapery Cleaning",
    description:
      "Careful cleaning for drapes and curtains to help refresh your home or business.",
      href: "/drapery-cleaning",
  },
  {
    title: "Wedding Gown Cleaning",
    description:
      "Special care for wedding gowns and formal garments. Ask us about availability.",
      href: "/wedding-gown-cleaning",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8B7A45]">
            Our Services
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Simple, reliable garment care.
          </h2>
        </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => {
        const CardContent = (
          <>
            <h3 className="text-xl font-semibold">{service.title}</h3>

            <p className="mt-3 leading-7 text-[#4B6359]">
              {service.description}
            </p>

            {service.href && (
              <p className="mt-5 text-sm font-semibold text-[#8B7A45]">
                Learn More →
              </p>
            )}
          </>
        );

        return service.href ? (
          <a
            key={service.title}
            href={service.href}
            className="rounded-[1.5rem] border border-[#D7C9A3] bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-md"
          >
            {CardContent}
          </a>
        ) : (
          <div
            key={service.title}
            className="rounded-[1.5rem] border border-[#D7C9A3] bg-white p-6 shadow-sm hover:shadow-md"
          >
            {CardContent}
          </div>
        );
      })}
        </div>
      </div>
    </section>
  );
}