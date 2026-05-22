const services = [
  {
    title: "Dry Cleaning",
    description:
      "Premium cleaning for suits, dresses, coats, delicate garments, and everyday wear.",
  },
  {
    title: "Laundry Service",
    description:
      "Fresh and neatly finished laundry service for busy local customers.",
  },
  {
    title: "Alterations",
    description:
      "Hemming, simple repairs, adjustments, and tailoring support for a better fit.",
  },
  {
    title: "Leather Care",
    description:
      "Careful handling for leather and specialty items. Availability may vary by item.",
  },
  {
    title: "Wash & Fold",
    description:
      "Convenient wash and fold service for everyday laundry, neatly cleaned and folded.",
  },
  {
    title: "Household Items",
    description:
      "Cleaning care for household items such as blankets, linens, tablecloths, and more.",
  },
  {
    title: "Drapery Cleaning",
    description:
      "Careful cleaning for drapes and curtains to help refresh your home or business.",
  },
  {
    title: "Wedding Gown Cleaning",
    description:
      "Special care for wedding gowns and formal garments. Ask us about availability.",
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

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[1.5rem] border border-[#D7C9A3] bg-white p-6 shadow-sm hover:shadow-md"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>

              <p className="mt-3 leading-7 text-[#4B6359]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}