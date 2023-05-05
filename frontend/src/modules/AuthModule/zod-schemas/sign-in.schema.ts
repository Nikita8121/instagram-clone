import { z } from "zod";

export const signInSchema = z.object({
    emailOrUsername: z.string().min(1, { message: "Username or email  is required" }),
    password: z
        .string()
        .min(6, { message: "Password must be at least 6 characters" }),
});

export type SignInSchema = z.infer<typeof signInSchema>;

