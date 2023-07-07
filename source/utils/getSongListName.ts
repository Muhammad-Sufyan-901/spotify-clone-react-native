import type { Song } from "../types";

export const getSongListNameJoined = (songList: Song[]): string => {
  return songList.map(({ title }: Song): string => title).join(", ");
};
