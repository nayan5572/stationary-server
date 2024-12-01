import { TOrder } from '../models/order.interface';
import { Order } from '../models/order.model';

// Create a product in the database
const createOrderInDB = async (orderData: TOrder) => {
  if (await Order.isUserExists(orderData.id)) {
    throw new Error('User already exists');
  }
  const result = await Order.create(orderData); // built in ststic method
  return result;
};

// total calculate revenue
export const calculateRevenue = async () => {
  const revenue = await Order.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
  ]);
  return revenue[0]?.totalRevenue || 0;
};

// Export all service methods
export const OrderServices = {
  createOrderInDB,
  calculateRevenue,
};
