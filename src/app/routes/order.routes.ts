import express from 'express';
import { OrderController } from '../controllers/order.controller';
// import { OrderController } from '../controllers/order.controller';

const router = express.Router();

// Create Order
router.post('/', OrderController.createOrderController);

// Calculate Revenue
router.get('/revenue', OrderController.calculateRevenueController);

export const orderRouter = router;
