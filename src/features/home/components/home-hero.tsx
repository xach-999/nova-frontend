import Link from "next/link";

export function HomeHero() {
  return (
    <section className="bg-surface">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            New season collection
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Modern essentials for everyday style.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">
            Discover curated clothing, bags, and accessories designed for a
            cleaner wardrobe and effortless daily wear.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Shop new arrivals
            </Link>
            <Link
              href="/categories"
              className="inline-flex h-11 items-center justify-center rounded-md border border-border px-5 text-sm font-semibold text-foreground transition-colors hover:bg-background"
            >
              Explore categories
            </Link>
          </div>
        </div>

        <div className="grid aspect-[4/3] place-items-center rounded-lg border border-border bg-background p-6">
          <div className="w-full max-w-sm rounded-md bg-surface p-5 shadow-sm">
            <div className="grid aspect-[5/4] place-items-center rounded-md bg-[linear-gradient(135deg,#0f766e,#f59e0b)] p-6">
              <div className="h-full w-2/3 rounded-t-full border border-white/60 bg-white/20" />
            </div>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">Minimal Linen Jacket</p>
                <p className="mt-1 text-sm text-muted">Spring edit</p>
              </div>
              <p className="text-sm font-semibold">$148</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
