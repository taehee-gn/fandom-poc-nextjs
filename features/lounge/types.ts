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
