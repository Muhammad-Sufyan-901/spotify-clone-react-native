import { faker } from "@faker-js/faker";
import type { Playlist, Song } from "../types";

export const playlistsList: Playlist[] = [...Array<Playlist>(6)].map(
  (): Playlist => ({
    name: faker.music.songName(),
    thumbnail: faker.helpers.arrayElement([faker.image.abstract(680, 480, true), faker.image.animals(680, 480, true), faker.image.business(680, 480, true), faker.image.fashion(680, 480, true), faker.image.food(680, 480, true)]),
    creator: faker.name.fullName(),
    songs: [...Array<Song>(6)].map(
      (): Song => ({
        title: faker.music.songName(),
        genre: faker.music.genre(),
        thumbnail: faker.helpers.arrayElement([faker.image.abstract(680, 480, true), faker.image.animals(680, 480, true), faker.image.business(680, 480, true), faker.image.fashion(680, 480, true), faker.image.food(680, 480, true)]),
      })
    ),
  })
);
