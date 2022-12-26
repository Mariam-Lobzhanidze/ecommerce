import { User } from './user';

export class Order {
  id: number;
  items: any;
  user: User;
  subTotal: number;
  pending: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
