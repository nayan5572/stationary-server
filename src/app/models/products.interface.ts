import { Model } from 'mongoose';

type TCategory =
  | 'Writing'
  | 'Office Supplies'
  | 'Art Supplies'
  | 'Educational'
  | 'Technology';

export type TProduct = {
  id: string;
  name: string;
  brand: string;
  price: number;
  category?: TCategory;
  description: string;
  quantity: number;
  inStock: boolean;
};

// for creating static
export interface ProductModel extends Model<TProduct> {
  isUserExists(id: string): Promise<TProduct | null>;
}
