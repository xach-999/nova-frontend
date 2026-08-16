import Link from "next/link";

const categories = [
  {
    name: "Outerwear",
    description: "Light layers, jackets, and refined daily coats.",
    href: "/categories",
  },
  {
    name: "Shirts",
    description: "Clean cotton, linen, and structured essentials.",
    href: "/categories",
  },
  {
    name: "Bags",
    description: "Everyday totes and compact carry pieces.",
    href: "/categories",
  },
  {
    name: "Accessories",
    description: "Finishing details for a minimal wardrobe.",
    href: "/categories",
  },
];

export function FeaturedCategories() {
  return (
    <section className="border-t border-border bg-background">
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
            href="/categories"
            className="text-sm font-semibold text-primary hover:underline"
          >
            View all categories
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="rounded-lg border border-border bg-surface p-5 transition-colors hover:bg-background"
            >
              <div className="mb-5 h-24 rounded-md bg-[linear-gradient(135deg,#f8fafc,#e2e8f0)]" />
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
