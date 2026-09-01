import Link from "next/link";

export function PromoBanner() {
  return (
    <section className="bg-foreground text-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-background/70">
            Limited offer
          </p>
          <h2 className="mt-2 text-2xl font-semibold">
            Free shipping on orders over $100.
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-background/75">
            Build your everyday rotation with new-season essentials and simple
            returns.
          </p>
        </div>

        <Link
          href="/products?sale=true"
          className="inline-flex h-11 w-full items-center justify-center rounded-md bg-background px-5 text-sm font-semibold text-foreground transition-opacity hover:opacity-90 sm:w-auto"
        >
          Shop the offer
        </Link>
      </div>
    </section>
  );
}
