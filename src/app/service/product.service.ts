/* eslint-disable @typescript-eslint/no-explicit-any */
import { Product } from '../models/product.model';
import { TProduct } from '../models/products.interface';

const createProductIntoDB = async (productData: TProduct) => {
  if (await Product.isUserExists(productData.id)) {
    throw new Error('User already exists');
  }
  const result = await Product.create(productData); // built in ststic method
  return result;
};

// get all product data
const getAllProductsFromDB = async () => {
  const result = await Product.find();
  return result;
};

// get from single data
const getSingleProductFromDB = async (id: string) => {
  const result = await Product.aggregate([{ $match: { id: id } }]);
  return result;
};

// delete data from database
const deleteProductFromDB = async (productId: string) => {
  // Delete and return the product if it exists
  const deletedProduct = await Product.findByIdAndDelete(productId);
  return deletedProduct;
};

// update data
const updateProductInDB = async (
  productId: string,
  updateData: Record<string, any>,
) => {
  // Use findByIdAndUpdate to update the product and return the new document
  const updatedProduct = await Product.findByIdAndUpdate(
    productId,
    updateData,
    { new: true, runValidators: true }, // `new` returns the updated document; `runValidators` ensures validation
  );
  return updatedProduct;
};

// export all data
export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  deleteProductFromDB,
  updateProductInDB,
};
