export interface Lounge {
  loungeId: string;
  handle: string;
  name: string;
  thumbnailImage: string;
  joined: boolean;
  isHost: boolean;
  tabs: { type: string; name: string }[];
}

export interface LoungeAuthor {
  id: string;
  nickname: string;
  avatarImgPath: string;
  type: string;
}

export interface LoungeArtist extends LoungeAuthor {
  status: string;
  labels: unknown[];
}

export interface LoungeComment {
  id: string;
  type: string;
  body: string;
  parentId: string;
  contentId: string;
  author: LoungeAuthor & { status: string; labels: unknown[] };
  reactionCounts: Partial<Record<string, number>>;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface LoungeMediaPath {
  source: string;
  path: string;
}

export interface LoungeVideo {
  preset: string;
  hlsPath: LoungeMediaPath;
  dashPath: LoungeMediaPath;
  thumbnailPaths: LoungeMediaPath[];
  status: string;
  duration: number;
}

export interface LoungeStory {
  id: string;
  type: string;
  typeId: string;
  title: string;
  description: string;
  commentedStars: unknown[];
  createdAt: string;
  publishedAt: string;
  commentCount: number;
  latestComment: LoungeComment | null;
  reactionCounts: Partial<Record<string, number>>;
  starReactions: {
    star: LoungeArtist;
    reactionCode: string;
    lastUpdatedAt: string;
  }[];
  paid: boolean;
  lounge: { id: string; handle: string; name: string };
  author: LoungeAuthor;
  mainImage?: string;
  images?: string[];
  video?: LoungeVideo;
}

export interface LoungeStoriesResponse {
  "@type": string;
  size: number;
  number: number;
  numberOfElements: number;
  isFirst: boolean;
  isLast: boolean;
  items: LoungeStory[];
}
