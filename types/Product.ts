export interface Product {
  id: number;
  name: string;
  type: string;
  price: number;
  description: string;
  reviews?: Review[];
}

export interface Review {
  id: number;
  productId: number;
  rating: number;
  comment: string;
  reviewer: string;
}
