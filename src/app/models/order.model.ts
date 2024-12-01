import { Schema, model } from 'mongoose';
import { orderModel, TOrder } from './order.interface';

export const orderSchema = new Schema<TOrder, orderModel>(
  {
    id: { type: String, required: [true, 'ID is required'], unique: true },

    email: {
      type: String,
      required: true,
    },
    product: {
      type: String,
      required: true,
    },
    totalPrice: { type: Number, required: true },
    quantity: { type: Number, required: true },
    createdAt: { type: String },
    updatedAt: { type: String },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

// query middleware
orderSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

orderSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

// creating a custom static method
orderSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Order.findOne({ id });
  return existingUser;
};

export const Order = model<TOrder, orderModel>('order', orderSchema);
