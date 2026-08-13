import { z } from "zod";

export const signinSchema = z.object({
  email: z.email("Enter a valid email address."),
  password: z.string().min(1, "Enter your password."),
});

export type SigninFormValues = z.infer<typeof signinSchema>;
