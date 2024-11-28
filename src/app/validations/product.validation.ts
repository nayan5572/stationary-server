import { z } from 'zod';

export const productValidationSchema = z.object({
  id: z.string().max(30),
  name: z
    .string()
    .min(1, 'Product name is required')
    .max(100, 'Name cannot exceed 100 characters'),
  brand: z
    .string()
    .min(1, 'Brand is required')
    .max(50, 'Brand cannot exceed 50 characters'),
  price: z.number().min(0, 'Price must be a positive number'),
  category: z.string(),
  description: z.string().optional(),
  quantity: z.number().min(0, 'Quantity cannot be negative'),
  inStock: z.boolean().default(true),
});

export default productValidationSchema;
