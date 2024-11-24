import { UserProduct } from '../models/product.model';
import { TProduct } from '../models/products.interface';

// Create a new product
export const createProduct = async (productData: Partial<TProduct>) => {
  const product = new UserProduct(productData);
  return product.save();
};

// Get all products (with optional search term)
export const getAllProducts = async (searchTerm?: string) => {
  const query = searchTerm
    ? {
        $or: [
          { name: { $regex: searchTerm, $options: 'i' } }, // Case-insensitive search
          { brand: { $regex: searchTerm, $options: 'i' } },
          { category: { $regex: searchTerm, $options: 'i' } },
        ],
      }
    : {};
  return UserProduct.find(query);
};

// Get a product by its ID
export const getProductById = async (id: string) => {
  return UserProduct.findById(id);
};

// Update a product by its ID
export const updateProduct = async (
  id: string,
  updateData: Partial<TProduct>,
) => {
  return UserProduct.findByIdAndUpdate(id, updateData, { new: true });
};

// Delete a product by its ID
export const deleteProduct = async (id: string) => {
  return UserProduct.findByIdAndDelete(id);
};

export const productService = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
