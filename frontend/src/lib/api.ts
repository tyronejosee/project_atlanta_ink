import { API_URL } from "@/config/constants";

export interface FetchApiOptions extends RequestInit {
  data?: unknown;
}

export async function fetcher<T>(
  endpoint: string,
  method: string = "GET",
  { data, headers = {}, ...rest }: FetchApiOptions = {},
) {
  const isFormData =
    typeof FormData !== "undefined" && data instanceof FormData;
  const customContentType = Object.keys(headers).some(
    (key) => key.toLowerCase() === "content-type",
  );

  const config: RequestInit = {
    method,
    headers: {
      ...(isFormData || customContentType
        ? headers
        : { "Content-Type": "application/json", ...headers }),
    },
    body: data ? (isFormData ? data : JSON.stringify(data)) : undefined,
    ...rest,
  };

  const res = await fetch(`${API_URL}${endpoint}`, config);

  if (!res.ok) {
    const message = await res.text();
    throw new Error(`[${res.status}] ${method} ${endpoint} - ${message}`);
  }

  return res.json();
}
