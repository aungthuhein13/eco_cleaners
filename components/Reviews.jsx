const reviews = [
  {
    name: "Yoomin Oh",
    source: "Google",
    rating: "★★★★★",
    text: "The prices are very reasonable, and it looks like this is a newly opened shop. Plus, the staff member, Henry, was incredibly friendly and welcoming.",
  },
  {
    name: "Seokha Kang",
    source: "Yelp",
    rating: "★★★★★",
    text: "I got my pants alternation from Eco Cleaners yesterday. It was done quickly and nicely. Love the place!",
  },
  {
    name: "Mary Rasmussen",
    source: "Google",
    rating: "★★★★★",
    text: "Been a customer since they opened. Great service and dedicated owners!!",
  },
];

export default function Reviews() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8B7A45]">
            Customer Reviews
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Trusted by local customers.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#4B6359]">
            We’re grateful for every customer who chooses Eco Cleaners for dry
            cleaning, laundry, alterations, and garment care.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.text}
              className="rounded-[1.5rem] border border-[#D7C9A3] bg-white p-6 shadow-sm"
            >
              <p className="text-lg text-[#8B7A45]">{review.rating}</p>

              <p className="mt-4 leading-7 text-[#4B6359]">
                “{review.text}”
              </p>

              <div className="mt-6">
                <p className="font-semibold text-[#173B2F]">{review.name}</p>
                <p className="text-sm text-[#8B7A45]">{review.source} Review</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="https://maps.app.goo.gl/vv3PBCmFtP1kn1Wg8"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#173B2F] px-7 py-4 text-center font-semibold text-white hover:bg-[#245646]"
          >
            Read Google Reviews
          </a>

          <a
            href="https://www.yelp.com/biz/eco-cleaners-trabuco-canyon?uid=93rHuwP6hZQB043TiGqxmQ&utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#173B2F] bg-white px-7 py-4 text-center font-semibold text-[#173B2F] hover:bg-[#F8F7F2]"
          >
            View Us on Yelp
          </a>
        </div>
      </div>
    </section>
  );
}