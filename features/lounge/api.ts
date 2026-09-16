import type { AxiosRequestConfig } from "axios";
import { api } from "@/lib/http/client";
import type { Lounge, LoungeArtist, LoungeStoriesResponse } from "./types";

function loungePath(id: string) {
  return `/lounges/${encodeURIComponent(id)}`;
}

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
