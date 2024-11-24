import { Model } from 'mongoose';

export enum Category {
  Writing = 'Writing',
  OfficeSupplies = 'Office Supplies',
  ArtSupplies = 'Art Supplies',
  Educational = 'Educational',
  Technology = 'Technology',
}

export type TProduct = {
  name: string;
  brand: string;
  price: number;
  category: Category;
  description: string;
  quantity: number;
  inStock: boolean;
};

export interface productModel extends Model<TProduct> {
  isUserExists(id: string): Promise<TProduct | null>;
}
