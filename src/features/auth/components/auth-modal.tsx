"use client";

import { useEffect, useId } from "react";

import { SigninForm } from "@/src/features/auth/components/signin-form";
import { SignupForm } from "@/src/features/auth/components/signup-form";

export type AuthMode = "signin" | "signup";

type AuthModalProps = {
  mode: AuthMode;
  onModeChange: (mode: AuthMode) => void;
  onClose: () => void;
};

export function AuthModal({ mode, onModeChange, onClose }: AuthModalProps) {
  const titleId = useId();
  const descriptionId = useId();
  const isSignin = mode === "signin";

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      aria-modal="true"
      role="dialog"
      className="fixed inset-0 z-50 grid place-items-center bg-foreground/35 px-4 py-6"
      onMouseDown={onClose}
    >
      <div
        className="max-h-full w-full max-w-md overflow-y-auto rounded-lg border border-border bg-surface p-5 shadow-xl sm:p-6"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <h2 id={titleId} className="text-xl font-semibold text-foreground">
              {isSignin ? "Sign in to your account" : "Create your account"}
            </h2>
            <p id={descriptionId} className="mt-2 text-sm leading-6 text-muted">
              {isSignin
                ? "Welcome back. Manage orders, saved products, and checkout faster."
                : "Join NovaShop to save products, manage orders, and checkout faster."}
            </p>
          </div>

          <button
            type="button"
            aria-label="Close auth modal"
            onClick={onClose}
            className="grid size-9 shrink-0 place-items-center rounded-md border border-border text-lg leading-none text-muted transition-colors hover:bg-background hover:text-foreground"
          >
            x
          </button>
        </div>

        <div className="mb-5 grid grid-cols-2 rounded-md border border-border bg-background p-1">
          <button
            type="button"
            onClick={() => onModeChange("signin")}
            className={`h-9 rounded-sm text-sm font-semibold transition-colors ${
              isSignin
                ? "bg-surface text-foreground shadow-sm"
                : "text-muted hover:text-foreground"
            }`}
          >
            Sign in
          </button>
          <button
            type="button"
            onClick={() => onModeChange("signup")}
            className={`h-9 rounded-sm text-sm font-semibold transition-colors ${
              !isSignin
                ? "bg-surface text-foreground shadow-sm"
                : "text-muted hover:text-foreground"
            }`}
          >
            Create account
          </button>
        </div>

        {isSignin ? (
          <SigninForm onSwitchToSignup={() => onModeChange("signup")} />
        ) : (
          <SignupForm onSwitchToSignin={() => onModeChange("signin")} />
        )}
      </div>
    </div>
  );
}
