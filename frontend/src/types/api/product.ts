export interface IProductList {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface IProductDetail {
  id: number;
  name: string;
  sku: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  category_id: number;
  stock: number;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}
