import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "Name must contain at least 2 characters")
      .max(100),

    email: z.email("Invalid email address").trim().toLowerCase(),

    password: z
      .string()
      .min(8, "Password must contain at least 8 characters")
      .max(72, "Password is too long"),

    confirmPassword: z.string(),

    phone: z
      .string()
      .trim()
      .regex(/^[0-9]{10}$/, "Phone must contain 10 digits")
      .optional(),
  })
  .strict()
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
