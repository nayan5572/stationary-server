import { model, Schema } from 'mongoose';
import { Category, TProduct } from './products.interface';

export const userProductSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      enum: Object.values(Category),
      required: true,
    },
    description: {
      type: String,
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

export const UserProduct = model<TProduct>('UserProduct', userProductSchema);
