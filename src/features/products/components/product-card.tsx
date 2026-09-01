import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/src/features/products/types/product";

type ProductCardProps = {
  product: Product;
};

const defaultProductImage = "/product-placeholder.svg";

function formatPrice(price: number) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

export function ProductCard({ product }: ProductCardProps) {
  const productHref = product.slug
    ? `/products/${product.slug}`
    : `/products?product=${product.id}`;
  const hasSalePrice =
    typeof product.compareAtPrice === "number" &&
    product.compareAtPrice > product.price;

  return (
    <article className="rounded-lg border border-border bg-surface p-4">
      <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-background">
        {product.isNew ? (
          <span className="absolute left-3 top-3 z-10 rounded-md bg-surface px-2 py-1 text-xs font-semibold text-primary">
            New
          </span>
        ) : null}
        {product.isBestSeller ? (
          <span className="absolute left-3 top-12 z-10 rounded-md bg-foreground px-2 py-1 text-xs font-semibold text-background">
            Best Seller
          </span>
        ) : null}
        <button
          type="button"
          aria-label={`Save ${product.name} to wishlist`}
          className="absolute right-3 top-3 z-10 h-9 rounded-md border border-border bg-surface px-3 text-xs font-semibold text-foreground shadow-sm transition-colors hover:bg-background"
        >
          Save
        </button>
        <Link href={productHref} aria-label={`Open ${product.name}`}>
          <Image
            src={product.imageUrl ?? defaultProductImage}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </Link>
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <Link
            href={productHref}
            className="text-sm font-semibold text-foreground hover:underline"
          >
            {product.name}
          </Link>
          <p className="mt-1 text-sm text-muted">{product.category}</p>
        </div>
        <div className="text-right">
          <p
            className={`text-sm font-semibold ${
              hasSalePrice ? "text-primary" : "text-foreground"
            }`}
          >
            {formatPrice(product.price)}
          </p>
          {hasSalePrice ? (
            <p className="mt-1 text-xs text-muted line-through">
              {formatPrice(product.compareAtPrice ?? product.price)}
            </p>
          ) : null}
        </div>
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
