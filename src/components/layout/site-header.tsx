"use client";

import Link from "next/link";
import { useState } from "react";

import { Logo } from "@/src/components/brand/logo";
import { siteConfig } from "@/src/constants/site";
import {
  AuthModal,
  type AuthMode,
} from "@/src/features/auth/components/auth-modal";

export function SiteHeader() {
  const [authMode, setAuthMode] = useState<AuthMode | null>(null);

  return (
    <>
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
          <Logo />

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-6 md:flex"
          >
            {siteConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setAuthMode("signin")}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              Sign in
            </button>
            <button
              type="button"
              onClick={() => setAuthMode("signup")}
              className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Create account
            </button>
          </div>
        </div>
      </header>

      {authMode ? (
        <AuthModal
          mode={authMode}
          onModeChange={setAuthMode}
          onClose={() => setAuthMode(null)}
        />
      ) : null}
    </>
  );
}
