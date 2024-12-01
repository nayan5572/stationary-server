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
exports.Order = exports.orderSchema = void 0;
const mongoose_1 = require("mongoose");
exports.orderSchema = new mongoose_1.Schema({
    id: { type: String, required: [true, 'ID is required'], unique: true },
    email: {
        type: String,
        required: true,
    },
    product: {
        type: String,
        required: true,
    },
    totalPrice: { type: Number, required: true },
    quantity: { type: Number, required: true },
    createdAt: { type: String },
    updatedAt: { type: String },
}, {
    toJSON: {
        virtuals: true,
    },
});
// query middleware
exports.orderSchema.pre('findOne', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});
exports.orderSchema.pre('aggregate', function (next) {
    this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
    next();
});
// creating a custom static method
exports.orderSchema.statics.isUserExists = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingUser = yield exports.Order.findOne({ id });
        return existingUser;
    });
};
exports.Order = (0, mongoose_1.model)('order', exports.orderSchema);
