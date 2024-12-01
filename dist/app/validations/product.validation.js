"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidationSchema = void 0;
const zod_1 = require("zod");
exports.productValidationSchema = zod_1.z.object({
    id: zod_1.z.string().max(30, 'ID cannot be longer than 30 characters'),
    name: zod_1.z.string().min(1, 'Name cannot be empty'),
    brand: zod_1.z.string().min(1, 'Brand cannot be empty'),
    price: zod_1.z
        .number()
        .positive('Price must be a positive number')
        .min(0.01, 'Price must be greater than 0'), // Optional: ensure price is greater than 0
    category: zod_1.z
        .enum([
        'Writing',
        'Office Supplies',
        'Art Supplies',
        'Educational',
        'Technology',
    ])
        .optional(), // Making category optional
    description: zod_1.z.string().min(1, 'Description cannot be empty'),
    quantity: zod_1.z
        .number()
        .int('Quantity must be an integer')
        .nonnegative('Quantity cannot be negative')
        .int(),
    inStock: zod_1.z.boolean().default(false), // defaults to false if not provided
});
exports.default = exports.productValidationSchema;
