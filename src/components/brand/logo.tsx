import Link from "next/link";

import { siteConfig } from "@/src/constants/site";

type LogoProps = {
  href?: string;
  showText?: boolean;
  className?: string;
};

export function Logo({ href = "/", showText = true, className = "" }: LogoProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 text-foreground ${className}`}
      aria-label={`${siteConfig.name} home`}
    >
      <span className="grid size-8 place-items-center rounded-md bg-primary text-primary-foreground">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="size-5"
          fill="none"
        >
          <path
            d="M6 18V6l12 12V6"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.4"
          />
        </svg>
      </span>

      {showText ? (
        <span className="text-base font-semibold leading-none">
          {siteConfig.name}
        </span>
      ) : null}
    </Link>
  );
}
