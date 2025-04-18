import { API_URL } from "@/config/constants";

export async function fetcher<T>(endpoint: string) {
  try {
    const res = await fetch(`${API_URL}${endpoint}`, {
      next: { revalidate: 86400 },
    });

    if (!res.ok) throw new Error("Remote API failed");
    return await res.json();
  } catch {
    throw new Error("Failed to fetch from remote API");
  }
}
