import type { Song } from "./song";

export interface SongList {
  thumbnailBanner: string | ImageSourcePropType;
  title: string;
  description: string;
  songs: Song[];
}
