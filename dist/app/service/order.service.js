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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderServices = exports.calculateRevenue = void 0;
const order_model_1 = require("../models/order.model");
// Create a product in the database
const createOrderInDB = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    if (yield order_model_1.Order.isUserExists(orderData.id)) {
        throw new Error('User already exists');
    }
    const result = yield order_model_1.Order.create(orderData); // built in ststic method
    return result;
});
// total calculate revenue
const calculateRevenue = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const revenue = yield order_model_1.Order.aggregate([
        {
            $group: {
                _id: null,
                totalRevenue: { $sum: '$totalPrice' },
            },
        },
    ]);
    return ((_a = revenue[0]) === null || _a === void 0 ? void 0 : _a.totalRevenue) || 0;
});
exports.calculateRevenue = calculateRevenue;
// Export all service methods
exports.OrderServices = {
    createOrderInDB,
    calculateRevenue: exports.calculateRevenue,
};
