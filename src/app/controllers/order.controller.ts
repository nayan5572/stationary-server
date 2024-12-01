import { calculateRevenue, OrderServices } from './../service/order.service';

import { Request, Response } from 'express';
import orderValidationSchema from '../validations/order.validation';

const createOrderController = async (req: Request, res: Response) => {
  try {
    // creating a schema validation using zod

    const { order: orderData } = req.body;

    const zodparseData = orderValidationSchema.parse(orderData);

    const result = await OrderServices.createOrderInDB(zodparseData);

    res.status(200).json({
      success: true,
      message: 'Order create successfully',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
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

export const OrderController = {
  createOrderController,
  calculateRevenueController,
};

export default orderValidationSchema;
