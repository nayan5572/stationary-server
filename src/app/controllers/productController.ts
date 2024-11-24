import { Request, Response } from 'express';
import { productService } from '../service/product.service';

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json({
      message: 'Product created successfully',
      success: true,
      data: product,
    });
  } catch (error) {
    console.log(error);
  }
};
