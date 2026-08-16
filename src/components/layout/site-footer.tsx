import Link from "next/link";

import { Logo } from "@/src/components/brand/logo";
import { siteConfig } from "@/src/constants/site";

const footerSections = [
  {
    title: "Shop",
    links: [
      { href: "/products", label: "New arrivals" },
      { href: "/categories", label: "Categories" },
      { href: "/products", label: "Best sellers" },
    ],
  },
  {
    title: "Account",
    links: [
      { href: "/signin", label: "Sign in" },
      { href: "/signup", label: "Create account" },
      { href: "/orders", label: "Orders" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/shipping", label: "Shipping" },
      { href: "/returns", label: "Returns" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <Logo className="mb-4" />
          <p className="max-w-sm text-sm leading-6 text-muted">
            {siteConfig.description} Curated clothing, bags, and accessories
            for a cleaner everyday wardrobe.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h2 className="text-sm font-semibold text-foreground">
                {section.title}
              </h2>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={`${section.title}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
