import type { Song } from "./song";

export interface Playlist {
  name: string;
  thumbnail: string | ImageSourcePropType;
  creator: string;
  songs: Song[];
}
