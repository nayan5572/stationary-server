import { Model } from 'mongoose';

export interface TOrder {
  id: string;
  email: string;
  product: string;
  quantity: number;
  totalPrice: number;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
}

export interface orderModel extends Model<TOrder> {
  isUserExists(id: string): Promise<boolean>;
}
