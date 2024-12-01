import { z } from 'zod';

export const productValidationSchema = z.object({
  id: z.string().max(30, 'ID cannot be longer than 30 characters'),
  name: z.string().min(1, 'Name cannot be empty'),
  brand: z.string().min(1, 'Brand cannot be empty'),
  price: z
    .number()
    .positive('Price must be a positive number')
    .min(0.01, 'Price must be greater than 0'), // Optional: ensure price is greater than 0
  category: z
    .enum([
      'Writing',
      'Office Supplies',
      'Art Supplies',
      'Educational',
      'Technology',
    ])
    .optional(), // Making category optional
  description: z.string().min(1, 'Description cannot be empty'),
  quantity: z
    .number()
    .int('Quantity must be an integer')
    .nonnegative('Quantity cannot be negative')
    .int(),
  inStock: z.boolean().default(false), // defaults to false if not provided
});

export default productValidationSchema;
