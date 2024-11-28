import { Request, Response } from 'express';
import {
  calculateRevenue,
  // createOrder,
  OrderServices,
} from '../service/order.service';
import orderValidationSchema from '../validations/order.validation';

export const createOrderController = async (req: Request, res: Response) => {
  try {
    const { product: orderData } = req.body;
    const zodparseData = orderValidationSchema.parse(orderData);
    const result = await OrderServices.createOrder(zodparseData);
    // return result;
    // const orderData = req.body;
    // const newOrder = await createOrder(orderData);

    res.status(200).json({
      message: 'Order created successfully',
      status: true,
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(400).json({
      message: 'Failed to create order',
      status: false,
      error: error,
    });
  }
};

export const calculateRevenueController = async (
  req: Request,
  res: Response,
) => {
  try {
    const revenue = await calculateRevenue();
    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: { totalRevenue: revenue },
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      message: 'Failed to calculate revenue',
      success: false,
      error: err.message,
    });
  }
};

export const OrderControllers = {
  createOrderController,
  calculateRevenueController,
};
