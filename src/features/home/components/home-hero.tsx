import Image from "next/image";
import Link from "next/link";

export function HomeHero() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-10 sm:px-6 md:min-h-[calc(100vh-8rem)] lg:grid-cols-[0.95fr_1.05fr]">
        <div className="max-w-xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Everyday wardrobe essentials
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Clean staples, easy outfits, ready for every day.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">
            Shop soft hoodies, cotton tees, relaxed layers, and carry pieces
            selected for simple daily styling.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Shop products
            </Link>
            <Link
              href="/products?category=hoodies"
              className="inline-flex h-11 items-center justify-center rounded-md border border-border px-5 text-sm font-semibold text-foreground transition-colors hover:bg-background"
            >
              Shop hoodies
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
            <div>
              <p className="text-lg font-semibold text-foreground">2k+</p>
              <p className="mt-1 text-xs text-muted">happy customers</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-foreground">14 days</p>
              <p className="mt-1 text-xs text-muted">easy returns</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-foreground">$100+</p>
              <p className="mt-1 text-xs text-muted">free shipping</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-[1fr_0.72fr]">
          <div className="overflow-hidden rounded-lg border border-border bg-background">
            <div className="relative aspect-[4/5]">
              <Image
                src="/product-placeholder.svg"
                alt="Classic wardrobe product"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex items-center justify-between border-t border-border bg-surface p-4">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Classic Cotton Hoodie
                </p>
                <p className="mt-1 text-sm text-muted">New arrival</p>
              </div>
              <p className="text-sm font-semibold text-foreground">$59.99</p>
            </div>
          </div>

          <div className="grid gap-4">
            <Link
              href="/products?gender=MEN"
              className="flex min-h-40 flex-col justify-between rounded-lg border border-border bg-background p-5 transition-colors hover:bg-surface"
            >
              <span className="text-sm font-semibold text-foreground">Men</span>
              <span className="text-sm text-muted">Hoodies, tees, pants</span>
            </Link>
            <Link
              href="/products?gender=UNISEX"
              className="flex min-h-40 flex-col justify-between rounded-lg border border-border bg-primary p-5 text-primary-foreground transition-opacity hover:opacity-90"
            >
              <span className="text-sm font-semibold">Unisex</span>
              <span className="text-sm text-primary-foreground/80">
                Everyday fits
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
