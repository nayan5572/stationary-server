"use strict";
// import { validator } from 'validator';
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
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    id: { type: String, required: [true, 'ID is required'], unique: true },
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    brand: {
        type: String,
        required: [true, 'Brand is required'],
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0.01, 'Price must be greater than zero'], // Ensure price is greater than zero
    },
    category: {
        type: String,
        enum: [
            'Writing',
            'Office Supplies',
            'Art Supplies',
            'Educational',
            'Technology',
        ],
        required: false, // Optional field
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required'],
        min: [0, 'Quantity cannot be negative'], // Ensure quantity is non-negative
    },
    inStock: {
        type: Boolean,
        default: false, // Default to false if not specified
    },
}, {
    toJSON: {
        virtuals: true,
    },
});
// query middleware
productSchema.pre('findOne', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});
productSchema.pre('aggregate', function (next) {
    this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
    next();
});
// creating a custom static method
productSchema.statics.isUserExists = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingUser = yield exports.Product.findOne({ id });
        return existingUser;
    });
};
exports.Product = (0, mongoose_1.model)('Product', productSchema);
