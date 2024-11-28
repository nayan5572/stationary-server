import { Model } from 'mongoose';

export type TProduct = {
  id: string;
  name: string;
  brand: string;
  price: number;
  category: string;
  description?: string | undefined;
  quantity: number;
  inStock: boolean;
};

export interface productModel extends Model<TProduct> {
  isUserExists(id: string): Promise<TProduct | null>;
}
