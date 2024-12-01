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
exports.ProductServices = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const product_model_1 = require("../models/product.model");
const createProductIntoDB = (studentData) => __awaiter(void 0, void 0, void 0, function* () {
    if (yield product_model_1.Product.isUserExists(studentData.id)) {
        throw new Error('User already exists');
    }
    const result = yield product_model_1.Product.create(studentData); // built in ststic method
    return result;
});
// get all student data
const getAllProductsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.find();
    return result;
});
// get from single data
const getSingleProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.aggregate([{ $match: { id: id } }]);
    return result;
});
// delete data from database
const deleteProductFromDB = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    // Delete and return the product if it exists
    const deletedProduct = yield product_model_1.Product.findByIdAndDelete(productId);
    return deletedProduct;
});
// update data
const updateProductInDB = (productId, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    // Use findByIdAndUpdate to update the product and return the new document
    const updatedProduct = yield product_model_1.Product.findByIdAndUpdate(productId, updateData, { new: true, runValidators: true });
    return updatedProduct;
});
// export all data
exports.ProductServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductFromDB,
    deleteProductFromDB,
    updateProductInDB,
};
