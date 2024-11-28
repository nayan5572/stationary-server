import { Product } from '../models/product.model';
import { TProduct } from '../models/products.interface';

// Create a product in the database
export const createProductInDB = async (productData: TProduct) => {
  const existingProduct = await Product.findOne({
    name: productData.name,
    brand: productData.brand,
  });

  if (existingProduct) {
    throw new Error('Product with the same name and brand already exists');
  }
  const result = await Product.create(productData); // Built-in Mongoose create method
  return result;
};
// Retrieve all products from the database
const getAllProductsFromDB = async (searchTerm?: string) => {
  const filter = searchTerm
    ? {
        $or: [
          { name: { $regex: searchTerm, $options: 'i' } },
          { brand: { $regex: searchTerm, $options: 'i' } },
          { category: { $regex: searchTerm, $options: 'i' } },
        ],
      }
    : {};

  const result = await Product.find(filter);
  return result;
};

// get from single data
const getSingleProductFromDB = async (id: string) => {
  const result = await Product.aggregate([{ $match: { id: id } }]);
  return result;
};

// Update product details
const updateProductInDB = async (
  id: string,
  updatedData: Partial<TProduct>,
) => {
  const result = await Product.findByIdAndUpdate(id, updatedData, {
    new: true,
  });

  if (!result) {
    throw new Error('Product not found or could not be updated');
  }
  return result;
};

const deleteProductFromDB = async (id: string) => {
  // const result = await Product.updateOne({ id }, { isDeleted: true });
  const result = await Product.updateOne({ id }, { $set: { isDeleted: true } });

  return result;
};

// Export all service methods
export const ProductServices = {
  createProductInDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductInDB,
  deleteProductFromDB,
};
