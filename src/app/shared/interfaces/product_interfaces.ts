export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  type: string;
}

export interface ProductDetails extends Product {
  description: string;
}
