export interface User {
  id: number;
  name: string;
  email: string;
  imageUrl: string | undefined | null;
  phoneNumber: string;
  address: string;
}

export interface UserDetails extends User {
  isVerified: boolean;
  createdAt: Date;
  numberOfOrders: number;
}
