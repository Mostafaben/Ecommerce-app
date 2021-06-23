export interface User {
  id: number;
  name: string;
  email: string;
  imageUrl: string;
}

export interface UserDetails extends User {
  isVerified: boolean;
  createdAt: Date;
  numberOfOrders: number;
}
