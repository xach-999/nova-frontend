"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  signupSchema,
  type SignupFormValues,
} from "@/src/features/auth/schemas/signup-schema";

type SignupFormProps = {
  onSwitchToSignin?: () => void;
};

export function SignupForm({ onSwitchToSignin }: SignupFormProps) {
  const {
    register: bindField,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: SignupFormValues) {
    console.log("Signup values:", values);
  }

  const inputClassName =
    "mt-1.5 h-10 w-full rounded-md border border-border bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted focus:border-primary";
  const labelClassName = "text-sm font-medium text-foreground";
  const errorClassName = "mt-1.5 text-xs text-red-600";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="firstName" className={labelClassName}>
          First name
        </label>
        <input
          id="firstName"
          type="text"
          autoComplete="given-name"
          {...bindField("firstName")}
          className={inputClassName}
        />
        {errors.firstName ? (
          <p className={errorClassName}>{errors.firstName.message}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="lastName" className={labelClassName}>
          Last name
        </label>
        <input
          id="lastName"
          type="text"
          autoComplete="family-name"
          {...bindField("lastName")}
          className={inputClassName}
        />
        {errors.lastName ? (
          <p className={errorClassName}>{errors.lastName.message}</p>
        ) : null}
      </div>

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
        <label htmlFor="password" className={labelClassName}>
          Password
        </label>
        <input
          id="password"
          type="password"
          autoComplete="new-password"
          {...bindField("password")}
          className={inputClassName}
        />
        {errors.password ? (
          <p className={errorClassName}>{errors.password.message}</p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="confirmPassword"
          className={labelClassName}
        >
          Confirm password
        </label>
        <input
          id="confirmPassword"
          type="password"
          autoComplete="new-password"
          {...bindField("confirmPassword")}
          className={inputClassName}
        />
        {errors.confirmPassword ? (
          <p className={errorClassName}>{errors.confirmPassword.message}</p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="h-10 w-full rounded-md bg-primary text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        Create account
      </button>

      <p className="text-center text-sm leading-6 text-muted">
        Already have an account?{" "}
        {onSwitchToSignin ? (
          <button
            type="button"
            onClick={onSwitchToSignin}
            className="font-medium text-primary hover:underline"
          >
            Sign in
          </button>
        ) : (
          <Link
            href="/signin"
            className="font-medium text-primary hover:underline"
          >
            Sign in
          </Link>
        )}
      </p>
    </form>
  );
}
