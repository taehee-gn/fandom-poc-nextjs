import lounge from "./lounge.json";

export { lounge };
export { default as artists } from "./artists.json";
export { default as stories } from "./stories.json";

export function isMockLounge(id: string) {
  return id === lounge.loungeId || id === lounge.handle;
}
