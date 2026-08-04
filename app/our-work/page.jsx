import Image from "next/image";

const MAPS_URL = "https://maps.app.goo.gl/E1kD2reUfzDkSQ9g7";

const workExamples = [
  {
    title: "Sleeve Seam Repair",
    category: "Alterations",
    description:
      "A loose sleeve seam was carefully repaired and reinforced for a cleaner, more secure finish.",
    beforeImage: "/our-work/sleeve-before.png",
    afterImage: "/our-work/sleeve-after.png",
    beforeAlt: "Loose sleeve seam before alteration repair",
    afterAlt: "Sleeve seam after alteration repair",
  },
  {
    title: "Dress Length Adjustment",
    category: "Alterations",
    description:
      "The dress length was adjusted to improve the fit while preserving the original shape and finish.",
    beforeImage: "/our-work/dress-before_1.png",
    afterImage: "/our-work/dress-after_1.png",
    beforeAlt: "Dress before length alteration",
    afterAlt: "Dress after length alteration",
  },
  {
    title: "Professional Stain Treatment",
    category: "Cleaning",
    description:
      "The garment was inspected and professionally treated based on its fabric and stain condition.",
    beforeImage: "/our-work/stain-before.png",
    afterImage: "/our-work/stain-after.png",
    beforeAlt: "Garment stain before professional cleaning",
    afterAlt: "Garment after professional stain treatment",
  },
  {
    title: "Comforter Cleaning",
    category: "Household Items",
    description:
      "A household comforter was cleaned and refreshed for a cleaner, more comfortable finish.",
    beforeImage: "/our-work/comforter-before.png",
    afterImage: "/our-work/comforter-after.png",
    beforeAlt: "Comforter before professional cleaning",
    afterAlt: "Comforter after professional cleaning",
  },
];

const customerFeedback = [
  {
    quote:
      "Henry at Eco Cleaners was very helpful and friendly. I brought a pair of pants that were too long and needed to be hemmed. After a couple days, they turned out great! I chose this location based on previous positive reviews, and am glad I did. I would recommend this location to anyone needing a fast and reliable cleaners.",
    customer: "Dylan Garcia",
    source: "Google Review",
  },
  {
    quote:
      "Very friendly, fast, and good at what they do! Definitely recommend.",
    customer: "Jena Raphael",
    source: "Google Review",
  },
  {
    quote:
      "I absolutely love this place! Henry always kept me updated throughout the process by texting me about my clothes, which I really appreciated. He was so kind, professional, and proactive with communication. I had several stains that I honestly didn’t think would ever come out, but they got them out perfectly! I also had a couple pairs of pants altered, and the fit was exactly what I wanted. The quality of their work and customer service is outstanding. I highly recommend them to anyone looking for a reliable dry cleaner and tailor!",
    customer: "Abby Fick",
    source: "Google Review",
  },
];

const reasons = [
  {
    title: "Careful Inspection",
    description:
      "We review garments, stains, fabric, damage, and special concerns before beginning the work.",
  },
  {
    title: "Cleaning & Alterations",
    description:
      "Customers can handle professional cleaning and common alteration needs in one local store.",
  },
  {
    title: "Friendly Local Service",
    description:
      "We take time to explain options, turnaround, pricing, and any concerns we notice.",
  },
  {
    title: "Rush Options",
    description:
      "Faster turnaround may be available on select cleaning and alteration orders.",
  },
];

export const metadata = {
  title: "Our Work | Eco Cleaners",
  description:
    "See examples of cleaning, alterations, household-item care, and customer feedback from Eco Cleaners in Trabuco Canyon.",
};

export default function OurWorkPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F2] pb-24 text-[#173B2F] lg:pb-0">
      {/* Hero */}
      <section className="px-6 pb-12 pt-14">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="inline-block rounded-full border border-[#C8A85A] bg-white px-4 py-2 text-sm font-medium text-[#8B7A45]">
              Our Work
            </p>

            <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
              Real care. Real results.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#4B6359]">
              See examples of our cleaning and alteration work, along with
              feedback from customers who trusted Eco Cleaners with their
              garments and household items.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#before-after"
                className="rounded-full bg-[#173B2F] px-7 py-4 text-center font-semibold text-white hover:bg-[#245646]"
              >
                View Our Work
              </a>

              <a
                href="#customer-feedback"
                className="rounded-full border border-[#173B2F] bg-white px-7 py-4 text-center font-semibold text-[#173B2F] hover:bg-[#F1EFE7]"
              >
                Customer Feedback
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#D7C9A3] bg-white p-3 shadow-lg">
            <div className="relative h-[420px] overflow-hidden rounded-[1.5rem] md:h-[520px]">
              <Image
                src="/our-work/finished-garments.png"
                alt="Finished garments prepared at Eco Cleaners"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/92 p-4 shadow-lg backdrop-blur sm:bottom-5 sm:left-5 sm:right-5 sm:p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8B7A45] sm:text-xs">
                  Quality Garment Care
                </p>

                <h2 className="mt-2 text-xl font-semibold text-[#173B2F] sm:text-2xl">
                  Careful cleaning, finishing, and alterations.
                </h2>

                <p className="mt-2 text-xs leading-5 text-[#4B6359] sm:text-sm sm:leading-6">
                  Local service for everyday clothing, special garments, and
                  household items.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before and after gallery */}
      <section id="before-after" className="scroll-mt-28 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8B7A45]">
              Before & After
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              See the difference careful work can make.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#4B6359]">
              Every garment is different. Results depend on fabric, age,
              construction, previous treatment, stains, and overall condition.
            </p>
          </div>

          <div className="mt-10 grid gap-7 lg:grid-cols-2">
            {workExamples.map((work) => (
              <article
                key={work.title}
                className="overflow-hidden rounded-[2rem] border border-[#D7C9A3] bg-white shadow-sm"
              >
                <div className="grid grid-cols-2">
                  <div>
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={work.beforeImage}
                        alt={work.beforeAlt}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />

                      <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#173B2F] shadow-sm">
                        Before
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={work.afterImage}
                        alt={work.afterAlt}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />

                      <span className="absolute left-3 top-3 rounded-full bg-[#173B2F]/90 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                        After
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8B7A45]">
                    {work.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold">{work.title}</h3>

                  <p className="mt-3 leading-7 text-[#4B6359]">
                    {work.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-7 max-w-4xl text-sm leading-6 text-[#4B6359]">
            Cleaning and stain-removal results vary. Complete stain removal
            cannot be guaranteed, especially for older stains, delicate fabrics,
            discoloration, or garments previously treated at home.
          </p>
        </div>
      </section>

      {/* Featured story */}
      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-[#173B2F] p-8 text-white shadow-xl md:grid-cols-[0.9fr_1.1fr] md:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D7C9A3]">
              Featured Work Story
            </p>

            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              More than cleaning a garment.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/80">
              Good service means understanding the customer’s concern, reviewing
              the item carefully, and setting honest expectations before
              starting.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D7C9A3]">
                The Concern
              </p>

              <p className="mt-3 leading-7 text-white/85">
                A customer brought in a garment that needed cleaning and a fit
                adjustment before an upcoming event.
              </p>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/10 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D7C9A3]">
                What We Did
              </p>

              <p className="mt-3 leading-7 text-white/85">
                We reviewed the fabric, condition, stains, fit, and requested
                turnaround before beginning the work.
              </p>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/10 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D7C9A3]">
                The Result
              </p>

              <p className="mt-3 leading-7 text-white/85">
                The garment was cleaned, adjusted, finished, and prepared for
                pickup within the agreed timeframe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="customer-feedback"
        className="scroll-mt-28 px-6 py-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8B7A45]">
              Customer Feedback
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              What customers say about Eco Cleaners.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#4B6359]">
              Friendly communication and dependable service matter just as much
              as the finished garment.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {customerFeedback.map((review) => (
              <article
                key={review.quote}
                className="flex h-full flex-col rounded-[1.5rem] border border-[#D7C9A3] bg-white p-7 shadow-sm"
              >
                <div
                  className="text-lg tracking-[0.18em] text-[#C8A13A]"
                  aria-label="Five-star review"
                >
                  ★★★★★
                </div>

                <blockquote className="mt-5 flex-1 text-lg leading-8 text-[#4B6359]">
                  “{review.quote}”
                </blockquote>

                <div className="mt-6 border-t border-[#D7C9A3]/60 pt-5">
                  <p className="font-semibold text-[#173B2F]">
                    {review.customer}
                  </p>

                  <p className="mt-1 text-sm text-[#8B7A45]">
                    {review.source}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
                href="https://maps.app.goo.gl/vv3PBCmFtP1kn1Wg8"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#173B2F] px-6 py-3 text-center font-semibold text-white hover:bg-[#245646]"
            >
                Read Google Reviews
            </a>

            <a
                href="https://www.yelp.com/biz/eco-cleaners-trabuco-canyon?uid=93rHuwP6hZQB043TiGqxmQ&utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#173B2F] bg-white px-6 py-3 text-center font-semibold text-[#173B2F] hover:bg-[#F1EFE7]"
            >
                View Us on Yelp
            </a>
         </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8B7A45]">
              Our Approach
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Quality work starts with careful service.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-[1.5rem] border border-[#D7C9A3] bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{reason.title}</h3>

                <p className="mt-3 leading-7 text-[#4B6359]">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-[#173B2F] p-8 text-white shadow-xl md:grid-cols-[1.2fr_0.8fr] md:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D7C9A3]">
              Have an Item That Needs Attention?
            </p>

            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              Bring it in for a professional review.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
              We can review the fabric, stains, condition, fit, and work needed
              before giving you a recommendation.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-3">
            <a
              href="tel:9496284555"
              className="rounded-full bg-white px-7 py-4 text-center font-semibold text-[#173B2F] hover:bg-[#FFF9E8]"
            >
              Call 949-628-4555
            </a>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/70 px-7 py-4 text-center font-semibold text-white hover:bg-white/10"
            >
              Get Directions
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