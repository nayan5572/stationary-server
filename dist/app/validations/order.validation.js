"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidationSchema = void 0;
const zod_1 = require("zod");
exports.orderValidationSchema = zod_1.z.object({
    id: zod_1.z.string().max(30),
    email: zod_1.z.string().email(),
    product: zod_1.z.string(),
    quantity: zod_1.z.number(),
    totalPrice: zod_1.z.number(),
    createdAt: zod_1.z.string().optional(),
    updatedAt: zod_1.z.string().optional(),
});
exports.default = exports.orderValidationSchema;
