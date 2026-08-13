"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  signinSchema,
  type SigninFormValues,
} from "@/src/features/auth/schemas/signin-schema";

export function SigninForm() {
  const {
    register: bindField,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SigninFormValues>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: SigninFormValues) {
    console.log("Signin values:", values);
  }

  const inputClassName =
    "mt-1.5 h-10 w-full rounded-md border border-border bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-primary";
  const labelClassName = "text-sm font-medium text-foreground";
  const errorClassName = "mt-1.5 text-xs text-red-600";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="email" className={labelClassName}>
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          {...bindField("email")}
          className={inputClassName}
        />
        {errors.email ? (
          <p className={errorClassName}>{errors.email.message}</p>
        ) : null}
      </div>

      <div>
        <div className="flex items-center justify-between gap-3">
          <label htmlFor="password" className={labelClassName}>
            Password
          </label>
          <Link
            href="/forgot-password"
            className="text-xs font-medium text-primary hover:underline"
          >
            Forgot password?
          </Link>
        </div>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          {...bindField("password")}
          className={inputClassName}
        />
        {errors.password ? (
          <p className={errorClassName}>{errors.password.message}</p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="h-10 w-full rounded-md bg-primary text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        Sign in
      </button>

      <p className="text-center text-sm leading-6 text-muted">
        New to NovaShop?{" "}
        <Link href="/signup" className="font-medium text-primary hover:underline">
          Create account
        </Link>
      </p>
    </form>
  );
}
