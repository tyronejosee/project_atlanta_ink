import type {
  BrandResponse,
  CategoryResponse,
  ProductQueryParams,
  ProductResponse,
} from "@/types";

import { fetcher } from "@/lib/api";
import { API_URL_LOCAL, PAGE_SIZE, USE_API } from "@/config/constants";

import brandsData from "@/data/brands.json";
import categoriesData from "@/data/categories.json";
import productsData from "@/data/products.json";

export async function getBrands() {
  if (USE_API) return await fetcher<BrandResponse[]>("/brands");
  return brandsData;
}

export async function getCategories() {
  if (USE_API) return await fetcher<CategoryResponse[]>("/categories");
  return categoriesData;
}

export async function getProducts(params: ProductQueryParams = {}) {
  if (USE_API) {
    const query = Object.entries(params)
      .filter(([_, v]) => v !== undefined)
      .reduce(
        (acc, [k, v]) => {
          acc[k] = String(v);
          return acc;
        },
        {} as Record<string, string>,
      );
    const url = `/products?${new URLSearchParams(query)}`;
    return await fetcher<ProductResponse[]>(url);
  }

  let products = productsData;
  const { sort_by, search, brand, category, page = 1 } = params;

  if (sort_by === "latest") {
    products = products.sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
    );
  } else if (sort_by === "oldest") {
    products = products.sort(
      (a, b) =>
        new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
    );
  } else if (sort_by === "highest_price") {
    products = products.sort((a, b) => Number(b.price) - Number(a.price));
  } else if (sort_by === "lowest_price") {
    products = products.sort((a, b) => Number(a.price) - Number(b.price));
  }

  if (search) {
    const s = search.toLowerCase();
    products = products.filter((p) => p.name.toLowerCase().includes(s));
  }

  if (brand) {
    const b = brand.toLowerCase();
    products = products.filter((p) => p.brand?.toLowerCase() === b);
  }

  if (category) {
    const c = category.toLowerCase();
    products = products.filter((p) => p.category?.toLowerCase() === c);
  }

  const total = products.length;
  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const results = products.slice(start, end);
  const buildUrl = (p: number) => `${API_URL_LOCAL}/products?page=${p}`;

  return {
    count: total,
    next: end < total ? buildUrl(page + 1) : null,
    previous: page > 1 ? buildUrl(page - 1) : null,
    results,
  };
}

export async function getProductBySlug(slug: string) {
  if (USE_API) return await fetcher<ProductResponse>(`/products/${slug}`);
  const artist = productsData.find((a) => a.slug === slug);
  if (!artist) throw new Error("Artist not found");
  return artist;
}
