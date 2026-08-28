import { Suspense } from "react";

import { SiteFooter } from "@/src/components/layout/site-footer";
import { SiteHeader } from "@/src/components/layout/site-header";
import { ProductsCatalog } from "@/src/features/products/components/products-catalog";

function ProductsCatalogFallback() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-sm text-muted">Loading products...</p>
        <button
          type="button"
          className="h-10 rounded-md border border-border bg-surface px-4 text-sm font-semibold text-foreground"
        >
          Filters
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => (
          <div
            key={index}
            className="h-[28rem] animate-pulse rounded-lg border border-border bg-surface"
          />
        ))}
      </div>
    </section>
  );
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="border-b border-border bg-surface">
          <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Products
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-foreground">
              Shop wardrobe essentials.
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base">
              Explore curated clothing, bags, and accessories from the live
              product catalog.
            </p>
          </div>
        </section>

        <Suspense fallback={<ProductsCatalogFallback />}>
          <ProductsCatalog />
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  );
}
