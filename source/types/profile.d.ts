import type { Playlist } from "./playlist";

export interface Profile {
  username: string;
  profileImage: string | ImageSourcePropType;
  followings: number;
  followers: number;
  playlists: Playlist[];
}
