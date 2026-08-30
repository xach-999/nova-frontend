import Link from "next/link";

const categories = [
  {
    name: "Hoodies",
    description: "Soft layers for daily rotation.",
    href: "/products?category=hoodies",
    accent: "bg-primary",
  },
  {
    name: "T-Shirts",
    description: "Clean cotton basics and easy fits.",
    href: "/products?category=t-shirts",
    accent: "bg-amber-500",
  },
  {
    name: "Pants",
    description: "Relaxed shapes for work and weekends.",
    href: "/products?category=pants",
    accent: "bg-slate-700",
  },
  {
    name: "Accessories",
    description: "Finishing details for a minimal wardrobe.",
    href: "/products?category=accessories",
    accent: "bg-rose-500",
  },
];

export function FeaturedCategories() {
  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Categories
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-foreground">
              Shop by wardrobe need.
            </h2>
          </div>
          <Link
            href="/products"
            className="text-sm font-semibold text-primary hover:underline"
          >
            View all products
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="rounded-lg border border-border bg-surface p-5 transition-colors hover:bg-background"
            >
              <div className="mb-5 flex h-24 items-end rounded-md bg-background p-3">
                <span
                  className={`block h-14 w-14 rounded-md ${category.accent}`}
                />
              </div>
              <h3 className="text-base font-semibold text-foreground">
                {category.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
