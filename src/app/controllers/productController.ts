/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import productValidationSchema from '../validations/product.validation';
import { ProductServices } from '../service/product.service';

export const createProduct = async (req: Request, res: Response) => {
  try {
    // Validating the product request body using ZodSchema
    const { product: productData } = req.body;

    const zodparseData = productValidationSchema.parse(productData);

    // Creating the product in the database using the service
    const result = await ProductServices.createProductInDB(zodparseData);

    res.status(200).json({
      success: true,
      message: 'Product is created successfully',
      data: result,
    });
  } catch (err: any) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFromDB();
    res.status(200).json({
      success: true,
      message: 'Products are retrieved successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};

export const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductServices.getSingleProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: 'Product is retrieved successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const { product: productData } = req.body;

    const zodparseData = productValidationSchema.parse(productData);

    const result = await ProductServices.updateProductInDB(
      productId,
      zodparseData,
    );
    res.status(200).json({
      success: true,
      message: 'Product is updated successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.deleteProductFromDB(productId);
    console.log(result);

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully',
      data: result,
    });
  } catch (err: any) {
    console.error('Delete Error:', err.message);
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};

export default productValidationSchema;
