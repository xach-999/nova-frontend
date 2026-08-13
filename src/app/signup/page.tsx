import { Logo } from "@/src/components/brand/logo";
import { SignupForm } from "@/src/features/auth/components/signup-form";

export default function SignUpPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-10 sm:px-6">
      <div className="mx-auto flex w-full max-w-md flex-col">
        <Logo className="mb-7" />

        <div className="rounded-lg border border-border bg-surface p-5 shadow-sm sm:p-6">
          <div className="mb-5">
            <h1 className="text-xl font-semibold text-foreground">
              Create your account
            </h1>
            <p className="mt-2 text-sm leading-6 text-muted">
              Join NovaShop to save products, manage orders, and check out
              faster.
            </p>
          </div>

          <SignupForm />
        </div>
      </div>
    </main>
  );
}
