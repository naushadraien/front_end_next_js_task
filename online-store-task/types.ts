export interface ProductType {
  id: number;
  price: number;
  title: string;
  description: string;
  image: string;
  quantity?: number;
  totalPrice?: number;
  category?: string;
  rating: {
    rate: number;
    count: number;
  };
}
