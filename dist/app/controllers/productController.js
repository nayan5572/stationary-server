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
exports.ProductControllers = void 0;
const product_validation_1 = __importDefault(require("../validations/product.validation"));
const product_service_1 = require("../service/product.service");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // creating a schema validation using zod
        const { product: productData } = req.body;
        const zodparseData = product_validation_1.default.parse(productData);
        const result = yield product_service_1.ProductServices.createProductIntoDB(zodparseData);
        res.status(200).json({
            success: true,
            message: 'Product create successfully',
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Fetch all products using the service function
        const products = yield product_service_1.ProductServices.getAllProductsFromDB();
        // Respond with the products
        res.status(200).json({
            success: true,
            message: 'Products retrieved successfully',
            data: products,
        });
    }
    catch (error) {
        // Proper error handling
        console.error('Error retrieving products:', error);
        res.status(500).json({
            success: false,
            message: error instanceof Error ? error.message : 'Something went wrong',
            error,
        });
    }
});
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.getSingleProductFromDB(productId);
        res.status(200).json({
            success: true,
            message: 'Product retrieved successfully',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong',
            error: err,
        });
    }
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        // Call the service to delete the product
        const deletedProduct = yield product_service_1.ProductServices.deleteProductFromDB(productId);
        if (!deletedProduct) {
            // If no product is found, send a 404 response
            res.status(404).json({
                status: false,
                message: `Product with ID ${productId} not found`,
            });
            return;
        }
        // Respond with success message
        res.status(200).json({
            message: 'Product deleted successfully',
            status: true,
            data: {}, // Empty data as per the provided response structure
        });
    }
    catch (error) {
        // Log and respond with error details
        console.error('Error deleting product:', error);
        res.status(500).json({
            status: false,
            message: 'Something went wrong',
            error,
        });
    }
});
// update product
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const updateData = req.body;
        // Call the service to update the product
        const updatedProduct = yield product_service_1.ProductServices.updateProductInDB(productId, updateData);
        if (!updatedProduct) {
            // If no product is found, send a 404 response
            res.status(404).json({
                status: false,
                message: `Product with ID ${productId} not found`,
            });
            return;
        }
        // Respond with the updated product data
        res.status(200).json({
            message: 'Product updated successfully',
            status: true,
            data: updatedProduct,
        });
    }
    catch (error) {
        // Log and respond with error details
        console.error('Error updating product:', error);
        res.status(500).json({
            status: false,
            message: 'Something went wrong',
            error,
        });
    }
});
exports.ProductControllers = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    deleteProduct,
    updateProduct,
};
exports.default = product_validation_1.default;
