const benefits = [
  {
    title: "Free shipping over $100",
    description: "Clear delivery terms before checkout.",
  },
  {
    title: "Easy 14-day returns",
    description: "Try everything at home with simple returns.",
  },
  {
    title: "Secure checkout",
    description: "Payments and account sessions stay protected.",
  },
  {
    title: "Quality basics",
    description: "Comfortable fabrics selected for repeat wear.",
  },
];

export function StoreBenefits() {
  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Why shop NovaShop
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-foreground">
            A simpler way to build your daily wardrobe.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
      </div>
    </section>
  );
}
