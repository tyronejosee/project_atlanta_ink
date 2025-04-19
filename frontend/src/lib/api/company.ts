import type {
  CompanyResponse,
  FaqResponse,
  PriceResponse,
  ServiceResponse,
} from "@/types";

import { fetcher } from "@/lib/api";
import { USE_API } from "@/config/constants";

import companyData from "@/data/company.json";
import pricesData from "@/data/prices.json";
import servicesData from "@/data/services.json";
import faqsData from "@/data/faqs.json";

export async function getCompany() {
  if (USE_API) return await fetcher<CompanyResponse>("/company");
  return companyData;
}

export async function getPrices(params?: Record<string, any>) {
  if (USE_API) {
    const query = new URLSearchParams(params).toString();
    const url = `/prices${query ? `?${query}` : ""}`;
    return await fetcher<PriceResponse[]>(url);
  }
  if (params?.is_featured !== undefined) {
    return pricesData.filter((p) => p.is_featured === true);
  }
  return pricesData;
}

export async function getServices() {
  if (USE_API) return await fetcher<ServiceResponse[]>("/services");
  return servicesData;
}

export async function getFaqs() {
  if (USE_API) return await fetcher<FaqResponse[]>("/faqs");
  return faqsData;
}
