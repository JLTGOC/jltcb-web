import axios, { type AxiosRequestConfig } from "axios";
import { authStorage } from "@/lib/api/authStorage";
import type { ApiResponse } from "@/types/api";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

apiClient.interceptors.request.use((config) => {
  const token = authStorage.getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

/**
 * Global response handling
 */
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      authStorage.clearToken();
      // do NOT redirect here
    }
    return Promise.reject(error);
  },
);

/**
 * GET request
 */
export async function GET<T>(url: string, config?: AxiosRequestConfig) {
  const response = await apiClient.get<ApiResponse<T>>(url, config);
  return response.data;
}

/**
 * POST request
 */
export async function POST<T, D = unknown>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig,
) {
  const response = await apiClient.post<ApiResponse<T>>(url, data, config);
  return response.data;
}
