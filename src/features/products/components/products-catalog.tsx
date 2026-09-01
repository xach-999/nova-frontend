"use client";

import { useSearchParams } from "next/navigation";

import { ProductGrid } from "@/src/features/products/components/product-grid";
import { useProducts } from "@/src/features/products/hooks/use-products";

function getSearchParam(
  searchParams: ReturnType<typeof useSearchParams>,
  key: string,
  fallback: string,
) {
  return searchParams.get(key) ?? fallback;
}

export function ProductsCatalog() {
  const searchParams = useSearchParams();
  const page = getSearchParam(searchParams, "page", "1");
  const limit = getSearchParam(searchParams, "limit", "10");
  const category = searchParams.get("category") ?? undefined;
  const gender = searchParams.get("gender") ?? undefined;
  const sale = searchParams.get("sale") ?? undefined;
  const sort = searchParams.get("sort") ?? undefined;
  const { data, isPending, isFetching, isError, error } = useProducts({
    page,
    limit,
    category,
    gender,
    sale,
    sort,
  });

  const products = data?.products ?? [];
  const total = data?.meta.total ?? 0;

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-sm text-muted">
          {isPending ? "Loading products..." : `Showing ${products.length} of ${total} products`}
          {isFetching && !isPending ? " Updating..." : ""}
        </p>
        <button
          type="button"
          className="h-10 rounded-md border border-border bg-surface px-4 text-sm font-semibold text-foreground"
        >
          Filters
        </button>
      </div>

      {isPending ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: Number(limit) || 6 }, (_, index) => (
            <div
              key={index}
              className="h-[28rem] animate-pulse rounded-lg border border-border bg-surface"
            />
          ))}
        </div>
      ) : isError ? (
        <div className="rounded-lg border border-border bg-surface p-6 text-sm text-muted">
          {error.message}
        </div>
      ) : products.length > 0 ? (
        <ProductGrid products={products} />
      ) : (
        <div className="rounded-lg border border-border bg-surface p-6 text-sm text-muted">
          No products found.
        </div>
      )}
    </section>
  );
}
