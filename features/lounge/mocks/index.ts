import type { Lounge, LoungeArtist, LoungeStoriesResponse } from "../types";
import loungeData from "./lounge.json";
import artistsData from "./artists.json";
import storiesData from "./stories.json";

export const lounge: Lounge = loungeData;
export const artists: LoungeArtist[] = artistsData;
export const stories: LoungeStoriesResponse = storiesData;

export function isMockLounge(id: string) {
  return id === lounge.loungeId || id === lounge.handle;
}
