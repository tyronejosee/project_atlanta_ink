import { fetcher } from "@/lib/api";
import { getRandomItems } from "@/lib/utils";
import { USE_API } from "@/config/constants";
import { ITattoo } from "@/interfaces";

import tattoosData from "@/data/tattoos.json";

export async function getTattoos() {
  if (USE_API) return await fetcher<ITattoo[]>("/tattoos");
  return tattoosData;
}

export async function getRandomTattoos() {
  if (USE_API) return await fetcher<ITattoo[]>("/tattoos/random");
  return getRandomItems(tattoosData, 12);
}
