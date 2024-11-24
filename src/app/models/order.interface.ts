import { Model } from 'mongoose';

export type TOrder = {
  email: string;
  product: string;
  quantity: number;
  totalPrice: number;
};

export interface productModel extends Model<TOrder> {
  isUserExists(id: string): Promise<TOrder | null>;
}
