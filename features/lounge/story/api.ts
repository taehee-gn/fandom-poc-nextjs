import type { AxiosRequestConfig } from "axios";
import { api } from "@/lib/http/client";
import { loungePath } from "../paths";
import type { LoungeStoriesResponse } from "./types";

export async function getLoungeStories(
  id: string,
  config?: AxiosRequestConfig,
) {
  const { data } = await api.get<LoungeStoriesResponse>(
    `${loungePath(id)}/story`,
    config,
  );
  return data;
}
