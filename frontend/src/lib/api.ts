import { API_URL } from "@/config/constants";

export async function fetchData(
  endpoint: string,
  params?: Record<string, any>,
) {
  try {
    const query = new URLSearchParams(params).toString();
    const url = `${API_URL}/${endpoint}${query ? `?${query}` : ""}`;

    const res = await fetch(url, {
      next: { revalidate: 86400 }, // 24 hrs.
    });

    if (res.status === 404) {
      console.warn(`Resource not found: ${endpoint}`);
      return null;
    }

    if (!res.ok) {
      throw new Error(`Failed to fetch data from ${endpoint}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Data Fetching Error", error);
    throw error;
  }
}

export async function getCompany() {
  return fetchData("company");
}

export async function getServices() {
  return fetchData("services");
}

export async function getFaqs() {
  return fetchData("faqs");
}

export async function getPrices(params?: { is_featured?: boolean }) {
  return fetchData("prices", params);
}

export async function getTattoos() {
  return fetchData("tattoos");
}

export async function getTattoosByArtist(slug: string) {
  return fetchData(`artists/${slug}/tattoos`);
}

export async function getProducts(params?: {
  sort_by?: string;
  search?: string;
  category?: string;
  brand?: string;
}) {
  return fetchData("products", params);
}

export async function getProduct(slug: string) {
  return fetchData(`products/${slug}`);
}

export async function getBrands() {
  return fetchData("brands");
}

export async function getCategories() {
  return fetchData("categories");
}

export async function getArtists() {
  return fetchData("artists");
}

export async function getArtist(slug: string) {
  return fetchData(`artists/${slug}`);
}
