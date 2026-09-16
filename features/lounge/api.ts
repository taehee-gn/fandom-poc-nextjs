import type { AxiosRequestConfig } from "axios";
import { api } from "@/lib/http/client";
import { loungePath } from "./paths";
import type { Lounge, LoungeArtist } from "./types";

export async function getLounge(id: string, config?: AxiosRequestConfig) {
  const { data } = await api.get<Lounge>(loungePath(id), config);
  return data;
}

export async function getLoungeArtists(
  id: string,
  config?: AxiosRequestConfig,
) {
  const { data } = await api.get<LoungeArtist[]>(
    `${loungePath(id)}/artists`,
    config,
  );
  return data;
}
