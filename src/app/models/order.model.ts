import { Schema, model } from 'mongoose';
import { TOrder, orderModel } from './order.interface';

export const orderSchema = new Schema<TOrder, orderModel>(
  {
    id: { type: String, required: [true, 'ID is required'], unique: true },
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
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: null,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

orderSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await UserOrder.findOne({ id });
  return existingUser;
};

// Model
export const UserOrder = model<TOrder, orderModel>('Order', orderSchema);
