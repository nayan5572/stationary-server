"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_routes_1 = require("./app/routes/product.routes");
const order_routes_1 = require("./app/routes/order.routes");
const app = (0, express_1.default)();
// parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// application routes
app.use('/api/products', product_routes_1.ProductRoutes);
app.use('/api/orders', order_routes_1.orderRouter);
const getAController = (req, res) => {
    res.send('Server is running');
};
app.get('/', getAController);
exports.default = app;
