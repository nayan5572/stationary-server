"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("../controllers/order.controller");
// import { OrderController } from '../controllers/order.controller';
const router = express_1.default.Router();
// Create Order
router.post('/', order_controller_1.OrderController.createOrderController);
// Calculate Revenue
router.get('/revenue', order_controller_1.OrderController.calculateRevenueController);
exports.orderRouter = router;
