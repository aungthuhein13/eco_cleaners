"use client";

import { useState } from "react";

const leftFaqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer dry cleaning, laundry shirt service, alterations, wash and fold, household item cleaning, wedding dress care, and leather cleaning.",
  },
  {
    question: "What is the turnaround time?",
    answer:
      "Our normal turnaround time is about 3 days. If you need it sooner, we may be able to accommodate a 2-day turnaround upon request. Same-day and next-day rush service may be available for an additional charge, depending on the item and workload.",
  },
  {
    question: "Can you remove stains?",
    answer:
      "We offer stain treatment and will do our best to clean your garment safely. However, stain removal is not guaranteed because results depend on the type of stain, fabric, color, and how long the stain has been there.",
  },
  {
    question: "Do I need an appointment?",
    answer:
      "No appointment is needed for most dry cleaning, laundry, and basic alteration drop-offs. For detailed alterations, wedding dresses, or specialty items, we recommend stopping by so we can inspect the garment.",
  },
];

const rightFaqs = [
  {
    question: "Do you offer pickup and delivery?",
    answer:
      "Yes, we offer pickup and delivery service in nearby areas. Pickup and delivery is free with a minimum order of $30. Please call or text us at 949-628-4555 to schedule a pickup.",
  },
  {
    question: "Do you offer alterations?",
    answer:
      "Yes, we offer basic alterations including pants hems, jeans hems, dress hems, shirt hems, tapering, and basic repairs.",
  },
  {
    question: "Do you offer rush service?",
    answer:
      "Yes, rush service may be available depending on the item and our current workload. Same-day and next-day service may include an additional charge. Please ask us at drop-off.",
  },
  {
    question: "What if I’m not satisfied with my order?",
    answer:
      "We want every customer to be happy with their order. If something does not look right, please bring the item back and let us know. We will review it and offer a free redo when appropriate.",
  },
];

function FAQItem({ faq, index, column, openItem, setOpenItem }) {
  const itemId = `${column}-${index}`;
  const isOpen = openItem === itemId;

  return (
    <div className="rounded-2xl border border-[#E5D8BC] bg-white shadow-sm transition hover:shadow-md">
      <button
        type="button"
        onClick={() => setOpenItem(isOpen ? null : itemId)}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-[#0F3B2E] md:text-lg">
          {faq.question}
        </span>

        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F8F3E9] text-xl font-light text-[#0F3B2E]">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && (
        <div className="px-6 pb-6">
          <p className="border-t border-[#E5D8BC] pt-4 text-sm leading-7 text-[#4B5A52] md:text-base">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  const [openItem, setOpenItem] = useState(null);

  return (
    <section className=" px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#B08A3C]">
            FAQ
          </p>

          <h2 className="text-3xl font-bold text-[#0F3B2E] md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#4B5A52] md:text-lg">
            Fast answers about dry cleaning, alterations, pickup and delivery,
            and garment care.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:items-start">
          <div className="flex flex-col gap-4">
            {leftFaqs.map((faq, index) => (
              <FAQItem
                key={`left-${index}`}
                faq={faq}
                index={index}
                column="left"
                openItem={openItem}
                setOpenItem={setOpenItem}
              />
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {rightFaqs.map((faq, index) => (
              <FAQItem
                key={`right-${index}`}
                faq={faq}
                index={index}
                column="right"
                openItem={openItem}
                setOpenItem={setOpenItem}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-[#4B5A52] md:text-base">
            Have a specific question? Call or text{" "}
            <a
              href="tel:9496284555"
              className="font-semibold text-[#0F3B2E] underline decoration-[#B08A3C] underline-offset-4"
            >
              949-628-4555
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}