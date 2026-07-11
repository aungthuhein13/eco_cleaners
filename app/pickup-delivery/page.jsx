import Image from "next/image";
import PagePromoPopup from "@/components/PagePromoPopup";

const MAPS_URL = "https://maps.app.goo.gl/E1kD2reUfzDkSQ9g7";
const PICKUP_TEXT_URL =
  "sms:9496284555?body=Hi%20Eco%20Cleaners%2C%20I%20would%20like%20to%20schedule%20a%20pickup.%20My%20ZIP%20code%20is%20";
const TEXT_URL =
  "sms:9496284555?body=Hi%20Eco%20Cleaners%2C%20I%20would%20like%20to%20schedule%20a%20pickup.%20My%20ZIP%20code%20is%20";

const steps = [
  {
    number: "01",
    title: "Schedule Your Pickup",
    description:
      "Call or text us with your address, preferred pickup day, and the services you need.",
  },
  { 
    number: "02",
    title: "We Pick Up & Clean",
    description:
      "We collect your garments and care for them based on the cleaning or laundry service requested.",
  },
  {
    number: "03",
    title: "We Deliver Them Back",
    description:
      "Your cleaned garments are prepared and returned to your door, ready to wear or use.",
  },
];

const pickupServices = [
  "Dry Cleaning",
  "Shirt Laundry",
  "Wash & Fold",
  "Comforters & Blankets",
  "Household Items",
  "Select Specialty Items",
];

const serviceAreas = [
  "Trabuco Canyon",
  "Rancho Santa Margarita",
  "Dove Canyon",
  "Coto de Caza",
  "Foothill Ranch",
  "Portola Hills",
  "Nearby Communities",
];

const faqs = [
  {
    question: "What is the minimum order?",
    answer:
      "Pickup and delivery orders require a minimum order of $50.",
  },
  {
    question: "Is pickup and delivery free?",
    answer:
      "Pickup and delivery are included for qualifying orders within our regular service area.",
  },
  {
    question: "How long does the service take?",
    answer:
      "Typical turnaround is approximately 2–3 business days, depending on the items and service requested.",
  },
  {
    question: "Do I need to be home?",
    answer:
      "Not always. We can discuss a safe pickup and delivery location when scheduling your order.",
  },
  {
    question: "Can I include alterations or specialty items?",
    answer:
      "Please contact us first. Alterations, leather, wedding gowns, drapery, and other specialty items may require an in-person review.",
  },
  {
    question: "How do I schedule my first pickup?",
    answer:
      "Call or text us with your name, address, ZIP code, preferred pickup day, and the services you need.",
  },
];

export const metadata = {
  title: "Pickup & Delivery | Eco Cleaners",
  description:
    "Schedule dry cleaning and laundry pickup and delivery with Eco Cleaners in Trabuco Canyon and nearby communities.",
};

export default function PickupDeliveryPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F2] pb-24 text-[#173B2F] lg:pb-0">
      <PagePromoPopup
      storageKey="ecoPickupDeliveryPopupSeen"
      label="First Pickup Offer"
      title="$20 OFF"
      subtitle="Your First Pickup Order"
      details="Get $20 off your first pickup and delivery order of $50 or more. First-time pickup customers only. Limited time offer."
      primaryButton="Schedule Pickup"
      primaryHref={PICKUP_TEXT_URL}
      secondaryButton="Call Now"
      secondaryHref="tel:9496284555"
    />
      {/* Hero */}
      <section className="px-6 pb-12 pt-14">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="inline-block rounded-full border border-[#C8A85A] bg-white px-4 py-2 text-sm font-medium text-[#8B7A45]">
              Pickup & Delivery
            </p>

            <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
              Dry cleaning and laundry, picked up from your door.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#4B6359]">
              Schedule convenient pickup and delivery from Eco Cleaners. We
              collect your items, care for them professionally, and return them
              ready to wear.
            </p>

            <div className="mt-7 rounded-[1.5rem] border border-[#D7C9A3] bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8B7A45]">
                First Pickup Offer
              </p>

              <h2 className="mt-2 text-3xl font-semibold">
                $20 off your first order of $50+
              </h2>

              <p className="mt-2 leading-7 text-[#4B6359]">
                Available for first-time pickup and delivery customers. Limited
                time offer.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={TEXT_URL}
                className="rounded-full bg-[#173B2F] px-7 py-4 text-center font-semibold text-white hover:bg-[#245646]"
              >
                Schedule Pickup
              </a>

              <a
                href="tel:9496284555"
                className="rounded-full border border-[#173B2F] bg-white px-7 py-4 text-center font-semibold text-[#173B2F] hover:bg-[#F1EFE7]"
              >
                Call 949-628-4555
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#D7C9A3] bg-white p-3 shadow-lg">
            <div className="relative h-[420px] overflow-hidden rounded-[1.5rem] md:h-[540px]">
              <Image
                src="/pickup&delivery.png"
                alt="Eco Cleaners pickup and delivery van in a residential neighborhood"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/92 p-4 shadow-lg backdrop-blur sm:bottom-5 sm:left-5 sm:right-5 sm:p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8B7A45] sm:text-xs">
                  Doorstep Convenience
                </p>

                <h2 className="mt-2 text-xl font-semibold text-[#173B2F] sm:text-2xl">
                  We pick up, clean, and deliver.
                </h2>

                <p className="mt-2 text-xs leading-5 text-[#4B6359] sm:text-sm sm:leading-6">
                  Local pickup and delivery for dry cleaning, laundry, and eligible
                  household items.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8B7A45]">
              How It Works
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Three easy steps.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#4B6359]">
              Schedule once, prepare your items, and let us handle the rest.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-[1.5rem] border border-[#D7C9A3] bg-white p-7 shadow-sm"
              >
                <p className="text-sm font-semibold text-[#8B7A45]">
                  {step.number}
                </p>

                <h3 className="mt-4 text-2xl font-semibold">{step.title}</h3>

                <p className="mt-3 leading-7 text-[#4B6359]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available services */}
      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-[#D7C9A3] bg-white p-8 shadow-sm md:grid-cols-[1fr_1.1fr] md:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8B7A45]">
              Available Services
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              What we can pick up.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#4B6359]">
              You can combine eligible cleaning and laundry services in one
              convenient pickup order.
            </p>

            <p className="mt-5 leading-7 text-[#4B6359]">
              Alterations, leather, wedding gowns, drapery, and specialty items
              may require an in-person review. Please contact us before
              including them.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {pickupServices.map((service) => (
              <div
                key={service}
                className="rounded-2xl bg-[#F8F7F2] px-5 py-4 font-medium text-[#173B2F]"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-[#173B2F] p-8 text-white shadow-xl md:grid-cols-[1fr_1.1fr] md:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D7C9A3]">
              Service Area
            </p>

            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              Serving Trabuco Canyon and nearby communities.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/80">
              Service availability may vary by address and route. Text us your
              ZIP code and we’ll confirm whether pickup is available.
            </p>

            <a
              href={TEXT_URL}
              className="mt-7 inline-block rounded-full bg-white px-7 py-4 text-center font-semibold text-[#173B2F] hover:bg-[#FFF9E8]"
            >
              Text Your ZIP Code
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {serviceAreas.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 font-medium"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First order preparation */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8B7A45]">
              Your First Pickup
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              What to send us.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-[#D7C9A3] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Your Information</h3>
              <p className="mt-3 leading-7 text-[#4B6359]">
                Send your name, phone number, pickup address, and ZIP code.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[#D7C9A3] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Pickup Preference</h3>
              <p className="mt-3 leading-7 text-[#4B6359]">
                Tell us your preferred pickup day and whether you will be home.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[#D7C9A3] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Service Instructions</h3>
              <p className="mt-3 leading-7 text-[#4B6359]">
                Let us know what services you need and point out stains or
                special concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8B7A45]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Pickup and delivery details.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-[1.5rem] border border-[#D7C9A3] bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <p className="mt-3 leading-7 text-[#4B6359]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#173B2F] p-8 text-center text-white shadow-xl md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D7C9A3]">
            Ready to Get Started?
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold md:text-5xl">
            Schedule your first Eco Cleaners pickup.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">
            Text or call us with your address, ZIP code, and preferred pickup
            day.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={TEXT_URL}
              className="rounded-full bg-white px-7 py-4 text-center font-semibold text-[#173B2F] hover:bg-[#FFF9E8]"
            >
              Schedule by Text
            </a>

            <a
              href="tel:9496284555"
              className="rounded-full border border-white/70 px-7 py-4 text-center font-semibold text-white hover:bg-white/10"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
      <footer className="border-t border-[#D7C9A3] px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-[#4B6359] md:flex-row">
          <p>© 2026 Eco Cleaners. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}