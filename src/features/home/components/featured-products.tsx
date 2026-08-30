import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Classic White T-Shirt",
    category: "Hoodies",
    price: "$29.99",
  },
  {
    name: "Classic Cotton Hoodie",
    category: "Hoodies",
    price: "$59.99",
  },
  {
    name: "Everyday Canvas Tote",
    category: "Accessories",
    price: "$64",
  },
  {
    name: "Soft Knit Sweater",
    category: "Layers",
    price: "$118",
  },
];

export function FeaturedProducts() {
  return (
    <section className="bg-surface">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              New arrivals
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-foreground">
              Fresh pieces for the season.
            </h2>
          </div>
          <Link
            href="/products"
            className="text-sm font-semibold text-primary hover:underline"
          >
            Shop all products
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.name}
              className="rounded-lg border border-border bg-surface p-4"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-background">
                <Image
                  src="/product-placeholder.svg"
                  alt={product.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{product.category}</p>
                </div>
                <p className="text-sm font-semibold text-foreground">
                  {product.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
