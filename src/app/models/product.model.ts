import { Schema, model } from 'mongoose';
import { productModel, TProduct } from './products.interface';

export const productSchema = new Schema<TProduct, productModel>(
  {
    id: { type: String, required: [true, 'ID is required'], unique: true },
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
    },
    description: {
      type: String,
    },
    quantity: {
      type: Number,
      required: true,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

// query middleware
productSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

productSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

// creating a custom static method
productSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Product.findOne({ id });
  return existingUser;
};

export const Product = model<TProduct, productModel>('Products', productSchema);
