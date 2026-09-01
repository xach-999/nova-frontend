import Link from "next/link";

const productTypes = [
  { label: "Hoodies", href: "/products?category=hoodies" },
  { label: "T-Shirts", href: "/products?category=t-shirts" },
  { label: "Coats", href: "/products?category=coats" },
  { label: "Shoes", href: "/products?category=shoes" },
  { label: "Pants", href: "/products?category=pants" },
  { label: "Accessories", href: "/products?category=accessories" },
];

export function ShopByType() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Shop by type
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-foreground">
              Start with what you need.
            </h2>
          </div>
          <Link
            href="/products"
            className="text-sm font-semibold text-primary hover:underline"
          >
            Browse all
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {productTypes.map((type) => (
            <Link
              key={type.label}
              href={type.href}
              className="grid h-24 place-items-center rounded-lg border border-border bg-background px-3 text-center text-sm font-semibold text-foreground transition-colors hover:bg-surface"
            >
              {type.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
