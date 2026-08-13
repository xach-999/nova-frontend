import { Logo } from "@/src/components/brand/logo";
import { SigninForm } from "@/src/features/auth/components/signin-form";

export default function SigninPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-10 sm:px-6">
      <div className="mx-auto flex w-full max-w-md flex-col">
        <Logo className="mb-7" />

        <div className="rounded-lg border border-border bg-surface p-5 shadow-sm sm:p-6">
          <div className="mb-5">
            <h1 className="text-xl font-semibold text-foreground">
              Sign in to your account
            </h1>
            <p className="mt-2 text-sm leading-6 text-muted">
              Welcome back. Sign in to manage orders, saved products, and your
              NovaShop profile.
            </p>
          </div>

          <SigninForm />
        </div>
      </div>
    </main>
  );
}
