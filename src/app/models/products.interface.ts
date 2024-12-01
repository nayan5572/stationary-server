import { Model } from 'mongoose';

export type TProduct = {
  id: string;
  name: string;
  brand: string;
  price: number;
  category?:
    | 'Writing'
    | 'Office Supplies'
    | 'Art Supplies'
    | 'Educational'
    | 'Technology';
  description: string;
  quantity: number;
  inStock: boolean;
};

// for creating static
export interface ProductModel extends Model<TProduct> {
  isUserExists(id: string): Promise<TProduct | null>;
}
