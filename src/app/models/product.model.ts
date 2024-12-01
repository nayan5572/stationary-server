// import { validator } from 'validator';

import { Schema, model } from 'mongoose';
import { ProductModel, TProduct } from './products.interface';

const productSchema = new Schema<TProduct, ProductModel>(
  {
    id: { type: String, required: [true, 'ID is required'], unique: true },

    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    brand: {
      type: String,
      required: [true, 'Brand is required'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0.01, 'Price must be greater than zero'], // Ensure price is greater than zero
    },
    category: {
      type: String,
      enum: [
        'Writing',
        'Office Supplies',
        'Art Supplies',
        'Educational',
        'Technology',
      ],
      required: false, // Optional field
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [0, 'Quantity cannot be negative'], // Ensure quantity is non-negative
    },
    inStock: {
      type: Boolean,
      default: false, // Default to false if not specified
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

export const Product = model<TProduct, ProductModel>('Product', productSchema);
