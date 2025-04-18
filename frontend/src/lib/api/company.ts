import { USE_API } from "@/config/constants";
import { ICompany, IFaq, IPrice, IService } from "@/interfaces";
import { fetcher } from "@/lib/api";
import { loadJson } from "@/lib/load-json";

export async function getCompany() {
  if (USE_API) {
    return await fetcher<ICompany>("/company");
  }
  return await loadJson<ICompany>("src/data/company.json");
}

export async function getPrices(params?: Record<string, any>) {
  if (USE_API) {
    const query = new URLSearchParams(params).toString();
    const url = `/prices${query ? `?${query}` : ""}`;
    return await fetcher<IPrice[]>(url);
  }
  const prices = await loadJson<IPrice[]>("src/data/prices.json");
  if (params?.is_featured !== undefined) {
    return prices.filter((p) => p.is_featured === true);
  }
  return prices;
}

export async function getServices() {
  if (USE_API) {
    return await fetcher<IService[]>("/services");
  }
  return await loadJson<IService[]>("src/data/services.json");
}

export async function getFaqs() {
  if (USE_API) {
    return await fetcher<IFaq[]>("/faqs");
  }
  return await loadJson<IFaq[]>("src/data/faqs.json");
}
