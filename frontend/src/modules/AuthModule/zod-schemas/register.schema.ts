import { z } from "zod";

export const registerSchema = z.object({
    fullName: z.string().min(1, { message: "FullName is required" }),
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),
    username: z.string().min(1, { message: "Username is required" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
  });
  
  export type RegisterSchema = z.infer<typeof registerSchema>;

