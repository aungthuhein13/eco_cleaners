const steps = [
  {
    number: "01",
    title: "Drop Off Your Items",
    description:
      "Bring in your garments, household items, or alteration pieces. Please point out any stains, damage, or special concerns at drop-off.",
  },
  {
    number: "02",
    title: "We Review & Care For Them",
    description:
      "We review each item and handle it based on the service needed, whether it is dry cleaning, laundry, alterations, or specialty care.",
  },
  {
    number: "03",
    title: "Pick Up Fresh & Ready",
    description:
      "Your items are cleaned, finished, and prepared for pickup so they are fresh, polished, and ready to wear or use.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8B7A45]">
            How It Works
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Fast, friendly local service.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#4B6359]">
            From drop-off to pickup, we make the process easy so you know what
            to expect.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-[1.5rem] border border-[#D7C9A3] bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-semibold text-[#8B7A45]">
                {step.number}
              </p>

              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>

              <p className="mt-3 leading-7 text-[#4B6359]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}