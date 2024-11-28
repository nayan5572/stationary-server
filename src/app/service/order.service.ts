import { TOrder } from '../models/order.interface';
import { UserOrder } from '../models/order.model';
// import { Product as UserOrder } from '../models/product.model'; // Assuming a Product model exists

export const createOrder = async (orderData: TOrder) => {
  // Check if the product exists
  // const existingOrder = await UserOrder.findOne(orderData.product);
  const existingOrder = await UserOrder.findOne({
    name: orderData.product,
    brand: orderData.totalPrice,
  });
  if (!existingOrder) {
    throw new Error('Product not found');
  }

  // Check inventory
  if (existingOrder.quantity < orderData.quantity) {
    throw new Error('Insufficient stock available');
  }

  // Deduct quantity and update stock
  // existingOrder.quantity -= orderData.quantity;
  // if (existingOrder.quantity === 0) {
  //   existingOrder.inStock = false;
  // }
  // await existingOrder.save();

  // Create the order
  const result = await UserOrder.create(orderData);
  return result;
};

export const calculateRevenue = async () => {
  const revenue = await UserOrder.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
  ]);
  return revenue[0]?.totalRevenue || 0;
};

export const OrderServices = {
  createOrder,
  calculateRevenue,
};
