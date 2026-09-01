import Link from "next/link";

import { ProductCard } from "@/src/features/products/components/product-card";
import type { Product } from "@/src/features/products/types/product";

type ProductShowcaseProps = {
  eyebrow: string;
  title: string;
  href: string;
  linkLabel: string;
  products: Product[];
  surface?: "background" | "surface";
};

export function ProductShowcase({
  eyebrow,
  title,
  href,
  linkLabel,
  products,
  surface = "surface",
}: ProductShowcaseProps) {
  const sectionClassName =
    surface === "surface" ? "bg-surface" : "bg-background";

  return (
    <section className={sectionClassName}>
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              {eyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-foreground">
              {title}
            </h2>
          </div>
          <Link href={href} className="text-sm font-semibold text-primary hover:underline">
            {linkLabel}
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
