import axios, { type AxiosRequestConfig } from "axios";

const NEXT_PUBLIC_API_BASE_URL = "http://localhost:3000/api";

export const client = axios.create({
  baseURL: NEXT_PUBLIC_API_BASE_URL || "/api",
  timeout: 20000,
});

client.interceptors.response.use(
  (response) => response,
  (error: unknown) => {
    if (isApiError(error) && !axios.isCancel(error)) {
      const message = error.response?.data?.message;

      if (typeof message === "string" && message.trim()) {
        error.message = message;
      } else {
        error.message = error.response
          ? "요청을 처리하지 못했습니다. 잠시 후 다시 시도해 주세요."
          : "요청에 실패했습니다. 연결 상태를 확인하고 다시 시도해 주세요.";
      }
    }

    return Promise.reject(error);
  },
);

export function headers(config: AxiosRequestConfig = {}) {
  // 쿠키, 헤더 등 설정
  return axios.mergeConfig({ headers: { Accept: "application/json" } }, config);
}

export const api = {
  get: <T = unknown>(url: string, config?: AxiosRequestConfig) =>
    client.get<T>(url, headers(config)),
  post: <T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ) => client.post<T>(url, data, headers(config)),
  put: <T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ) => client.put<T>(url, data, headers(config)),
  patch: <T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ) => client.patch<T>(url, data, headers(config)),
  delete: <T = unknown>(url: string, config?: AxiosRequestConfig) =>
    client.delete<T>(url, headers(config)),
};

export interface ApiErrorResponse {
  message: string;
}

export function isApiError(error: unknown) {
  return axios.isAxiosError<ApiErrorResponse>(error);
}
