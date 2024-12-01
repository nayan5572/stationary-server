"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const productController_1 = require("../controllers/productController");
const router = express_1.default.Router();
router.post('/', productController_1.ProductControllers.createProduct);
router.get('/', productController_1.ProductControllers.getAllProducts);
router.get('/:productId', productController_1.ProductControllers.getSingleProduct);
router.delete('/:productId', productController_1.ProductControllers.deleteProduct);
router.put('/:productId', productController_1.ProductControllers.updateProduct);
exports.ProductRoutes = router;
