import Link from "next/link";

import { siteConfig } from "@/src/constants/site";

export function HomeHero() {
  return (
    <section className="bg-surface">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            New season collection
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            {siteConfig.description}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">
            NovaShop is the storefront foundation we will grow into a complete,
            production-ready commerce application.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Browse products
            </Link>
            <Link
              href="/login"
              className="inline-flex h-11 items-center justify-center rounded-md border border-border px-5 text-sm font-semibold text-foreground transition-colors hover:bg-background"
            >
              Sign in
            </Link>
          </div>
        </div>

        <div className="grid aspect-[4/3] place-items-center rounded-lg border border-border bg-background p-6">
          <div className="w-full max-w-sm rounded-md bg-surface p-5 shadow-sm">
            <div className="aspect-[5/4] rounded-md bg-[linear-gradient(135deg,#0f766e,#f59e0b)]" />
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
