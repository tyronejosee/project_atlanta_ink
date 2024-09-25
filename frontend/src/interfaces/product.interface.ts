export interface IBrand {
  id: string;
  name: string;
}

export interface ICategory {
  id: string;
  name: string;
}

export interface IProduct {
  id: string;
  name: string;
  slug: string;
  sku: string;
  brand: string;
  description?: string;
  price: number;
  currency: string;
  image?: string;
  category: string;
  stock: number;
  is_featured: boolean;
  updated_at: string;
  created_at: string;
}

export interface IProductQueryParams {
  sort_by?: string;
  search?: string;
  category?: string;
  brand?: string;
  page?: number;
  page_size?: number;
}
