import Link from "next/link";

const genderCategories = [
  {
    title: "Men",
    description: "Everyday layers, relaxed fits, and clean essentials.",
    href: "/products?gender=MEN",
    className: "bg-slate-900 text-white",
  },
  {
    title: "Women",
    description: "Soft staples, refined shapes, and easy outfit pieces.",
    href: "/products?gender=WOMEN",
    className: "bg-rose-100 text-foreground",
  },
  {
    title: "Unisex",
    description: "Shared silhouettes made for simple daily rotation.",
    href: "/products?gender=UNISEX",
    className: "bg-primary text-primary-foreground",
  },
];

export function GenderCategories() {
  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Shop collections
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-foreground">
            Find the right fit first.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {genderCategories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className={`flex min-h-72 flex-col justify-between rounded-lg p-6 transition-opacity hover:opacity-90 ${category.className}`}
            >
              <span className="text-sm font-semibold uppercase tracking-[0.16em] opacity-80">
                Collection
              </span>
              <span>
                <span className="block text-3xl font-semibold">
                  {category.title}
                </span>
                <span className="mt-3 block max-w-xs text-sm leading-6 opacity-80">
                  {category.description}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
