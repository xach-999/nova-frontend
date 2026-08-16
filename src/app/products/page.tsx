import { SiteFooter } from "@/src/components/layout/site-footer";
import { SiteHeader } from "@/src/components/layout/site-header";
import { ProductGrid } from "@/src/features/products/components/product-grid";
import { mockProducts } from "@/src/features/products/data/mock-products";

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
              Explore curated clothing, bags, and accessories. Product data is
              mocked for now and will later come from the NestJS API.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
          <div className="mb-6 flex items-center justify-between gap-4">
            <p className="text-sm text-muted">
              Showing {mockProducts.length} products
            </p>
            <button
              type="button"
              className="h-10 rounded-md border border-border bg-surface px-4 text-sm font-semibold text-foreground"
            >
              Filters
            </button>
          </div>

          <ProductGrid products={mockProducts} />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
