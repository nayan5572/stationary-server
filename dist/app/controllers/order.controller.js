"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = exports.calculateRevenueController = void 0;
const order_service_1 = require("./../service/order.service");
const order_validation_1 = __importDefault(require("../validations/order.validation"));
const createOrderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // creating a schema validation using zod
        const { order: orderData } = req.body;
        const zodparseData = order_validation_1.default.parse(orderData);
        const result = yield order_service_1.OrderServices.createOrderInDB(zodparseData);
        res.status(200).json({
            success: true,
            message: 'Order create successfully',
            data: result,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong',
            error: error,
        });
    }
});
const calculateRevenueController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const revenue = yield (0, order_service_1.calculateRevenue)();
        res.status(200).json({
            message: 'Revenue calculated successfully',
            status: true,
            data: { totalRevenue: revenue },
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (err) {
        res.status(500).json({
            message: 'Failed to calculate revenue',
            success: false,
            error: err.message,
        });
    }
});
exports.calculateRevenueController = calculateRevenueController;
exports.OrderController = {
    createOrderController,
    calculateRevenueController: exports.calculateRevenueController,
};
exports.default = order_validation_1.default;
