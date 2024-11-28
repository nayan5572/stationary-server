import express from 'express';
import { OrderControllers } from '../controllers/order.controller';

const router = express.Router();

// Create Order
router.post('/', OrderControllers.createOrderController);

// Calculate Revenue
router.get('/revenue', OrderControllers.calculateRevenueController);

export const orderRouter = router;
