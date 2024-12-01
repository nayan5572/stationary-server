import { Model } from 'mongoose';

export type TOrder = {
  id: string;
  email: string;
  product: string;
  totalPrice: number;
  quantity: number;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
};

export interface orderModel extends Model<TOrder> {
  isUserExists(_id: string): Promise<TOrder | null>;
}
