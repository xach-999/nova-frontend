import type { Product } from "@/src/features/products/types/product";

type ProductCardProps = {
  product: Product;
  index: number;
};

const gradients = [
  "linear-gradient(135deg, #0f766e, #f59e0b)",
  "linear-gradient(135deg, #111827, #94a3b8)",
  "linear-gradient(135deg, #f8fafc, #0f766e)",
];

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <article className="rounded-lg border border-border bg-surface p-4">
      <div className="relative grid aspect-[4/5] place-items-center rounded-md bg-background p-5">
        {product.isNew ? (
          <span className="absolute left-3 top-3 rounded-md bg-surface px-2 py-1 text-xs font-semibold text-primary">
            New
          </span>
        ) : null}
        <div
          className="h-4/5 w-3/5 rounded-t-full"
          style={{ background: gradients[index % gradients.length] }}
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
