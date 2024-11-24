import { model, Schema } from 'mongoose';
import { TOrder } from './order.interface';

export const userOrderSchema = new Schema<TOrder>({
  email: {
    type: String,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
    min: 0,
  },
});

export const UserOrder = model<TOrder>('UserOrder', userOrderSchema);
