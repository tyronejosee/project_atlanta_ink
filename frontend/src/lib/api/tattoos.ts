import type { TattooResponse } from "@/types";

import { fetcher } from "@/lib/api";
import { getRandomItems } from "@/lib/utils";
import { USE_API } from "@/config/constants";

import tattoosData from "@/data/tattoos.json";

export async function getTattoos() {
  if (USE_API) return await fetcher<TattooResponse[]>("/tattoos");
  return tattoosData;
}

export async function getRandomTattoos() {
  if (USE_API) return await fetcher<TattooResponse[]>("/tattoos/random");
  return getRandomItems(tattoosData, 12);
}
