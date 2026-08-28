import Image from "next/image";

import type { Product } from "@/src/features/products/types/product";

type ProductCardProps = {
  product: Product;
};

const defaultProductImage = "/product-placeholder.svg";

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="rounded-lg border border-border bg-surface p-4">
      <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-background">
        {product.isNew ? (
          <span className="absolute left-3 top-3 z-10 rounded-md bg-surface px-2 py-1 text-xs font-semibold text-primary">
            New
          </span>
        ) : null}
        <Image
          src={product.imageUrl ?? defaultProductImage}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-sm font-semibold text-foreground">
            {product.name}
          </h2>
          <p className="mt-1 text-sm text-muted">{product.category}</p>
        </div>
        <p className="text-sm font-semibold text-foreground">
          ${product.price}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {product.colors.map((color) => (
          <span
            key={`${product.id}-${color}`}
            className="rounded-md border border-border px-2 py-1 text-xs text-muted"
          >
            {color}
          </span>
        ))}
      </div>
    </article>
  );
}
