const benefits = [
  {
    title: "Free shipping over $100",
    description: "Simple delivery terms for everyday orders.",
  },
  {
    title: "Easy 14-day returns",
    description: "Try pieces at home and return what does not fit.",
  },
  {
    title: "Secure checkout",
    description: "Payments and account sessions are handled with care.",
  },
];

export function StoreBenefits() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-14 sm:px-6 md:grid-cols-3">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="rounded-lg border border-border bg-surface p-5"
          >
            <h3 className="text-sm font-semibold text-foreground">
              {benefit.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
