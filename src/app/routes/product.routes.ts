import express from 'express';
import { ProductControllers } from '../controllers/productController';

const router = express.Router();

router.post('/', ProductControllers.createProduct);

router.get('/', ProductControllers.getAllProducts);

router.get('/:productId', ProductControllers.getSingleProduct);

router.delete('/:productId', ProductControllers.deleteProduct);

router.put('/:productId', ProductControllers.updateProduct);

export const ProductRoutes = router;
