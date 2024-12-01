/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import productValidationSchema from '../validations/product.validation';
import { ProductServices } from '../service/product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    // creating a schema validation using zod

    const { product: productData } = req.body;

    const zodparseData = productValidationSchema.parse(productData);

    const result = await ProductServices.createProductIntoDB(zodparseData);

    res.status(200).json({
      success: true,
      message: 'Product create successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    // Fetch all products using the service function
    const products = await ProductServices.getAllProductsFromDB();

    // Respond with the products
    res.status(200).json({
      success: true,
      message: 'Products retrieved successfully',
      data: products,
    });
  } catch (error) {
    // Proper error handling
    console.error('Error retrieving products:', error);

    res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Something went wrong',
      error,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductServices.getSingleProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: 'Product retrieved successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { productId } = req.params;

    // Call the service to delete the product
    const deletedProduct = await ProductServices.deleteProductFromDB(productId);

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
  } catch (error) {
    // Log and respond with error details
    console.error('Error deleting product:', error);

    res.status(500).json({
      status: false,
      message: 'Something went wrong',
      error,
    });
  }
};

// update product
const updateProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { productId } = req.params;
    const updateData = req.body;

    // Call the service to update the product
    const updatedProduct = await ProductServices.updateProductInDB(
      productId,
      updateData,
    );

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
  } catch (error) {
    // Log and respond with error details
    console.error('Error updating product:', error);

    res.status(500).json({
      status: false,
      message: 'Something went wrong',
      error,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  deleteProduct,
  updateProduct,
};

export default productValidationSchema;
