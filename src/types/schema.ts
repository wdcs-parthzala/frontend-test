import { z } from 'zod';

export const loginSchema = z.object({
    email: z
        .string()
        .trim()
        .min(1, { message: 'Please enter the username' }),
    password: z
        .string()
        .trim()
        .min(1, { message: 'Please enter your password' })
});
