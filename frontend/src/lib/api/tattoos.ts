import { fetcher } from "@/lib/api";
import { loadJson } from "@/lib/load-json";
import { getRandomItems } from "@/lib/utils";
import { USE_API } from "@/config/constants";
import { ITattoo } from "@/interfaces";

export async function getTattoos() {
  if (USE_API) return await fetcher<ITattoo[]>("/tattoos");
  return await loadJson<ITattoo[]>("src/data/tattoos.json");
}

export async function getRandomTattoos() {
  if (USE_API) return await fetcher<ITattoo[]>("/tattoos/random");
  const tattoos = await loadJson<ITattoo[]>("src/data/tattoos.json");
  return getRandomItems(tattoos, 12);
}
