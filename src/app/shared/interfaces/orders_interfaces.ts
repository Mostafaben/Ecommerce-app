import { Product } from './product_interfaces';
import { User } from './user_interfaces';

export interface Order {
  id: number;
  user: User;
  products: Array<Product>;
  totalPrice: number;
  createdAt: Date;
  status: boolean;
  quantity: number;
}
