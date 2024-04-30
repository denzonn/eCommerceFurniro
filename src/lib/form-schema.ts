import { z } from "zod";

export const categoryFormSchema = z.object({
    name: z.string(),
    photo: z.any(),
})

export const loginFormSchema = z.object({
    email: z.string(),
    password: z.string(),
})

export const checkoutFormSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    phone: z.string(),
})

export const addProductFormSchema = z.object({
    name: z.string(),
    sku: z.string(),
    warranty_summary: z.string(),
})