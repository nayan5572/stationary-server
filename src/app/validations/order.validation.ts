import { z } from 'zod';

export const orderValidationSchema = z.object({
  id: z.string().max(30),
  email: z.string().email(),
  product: z.string(),
  quantity: z.number(),
  totalPrice: z.number(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

export default orderValidationSchema;
