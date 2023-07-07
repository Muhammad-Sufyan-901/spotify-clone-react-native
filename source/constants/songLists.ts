import { faker } from "@faker-js/faker";
import { getSongListNameJoined } from "../utils";
import { Top50GlobalSongsBanner, Top50IndonesiaSongsBanner, TopGlobalSongsBanner, TopIndonesiaSongsBanner, Viral50GlobalSongsBanner } from "./images";
import type { SongList, Song } from "../types";

export const recommendationSongList: SongList[] = [...Array<SongList>(10)].map(
  (): SongList => ({
    thumbnailBanner: faker.helpers.arrayElement([faker.image.abstract(680, 480, true), faker.image.animals(680, 480, true), faker.image.business(680, 480, true), faker.image.fashion(680, 480, true), faker.image.food(680, 480, true)]),
    description: faker.helpers.arrayElement([faker.lorem.sentence(), faker.lorem.sentences(), faker.lorem.words(), faker.random.words()]),
    title: getSongListNameJoined(
      [...Array<Song>(6)].map(
        (): Song => ({
          title: faker.music.songName(),
          genre: faker.music.genre(),
          thumbnail: faker.helpers.arrayElement([faker.image.abstract(680, 480, true), faker.image.animals(680, 480, true), faker.image.business(680, 480, true), faker.image.fashion(680, 480, true), faker.image.food(680, 480, true)]),
        })
      )
    ),
    songs: [...Array<Song>(6)].map(
      (): Song => ({
        title: faker.music.songName(),
        genre: faker.music.genre(),
        thumbnail: faker.helpers.arrayElement([faker.image.abstract(680, 480, true), faker.image.animals(680, 480, true), faker.image.business(680, 480, true), faker.image.fashion(680, 480, true), faker.image.food(680, 480, true)]),
      })
    ),
  })
);

export const topRatingSongList: SongList[] = [
  {
    thumbnailBanner: TopGlobalSongsBanner,
    title: "Pembaruan mingguan track yang paling sering diputar saat ini - Global",
    description: "",
    songs: [...Array<Song>(10)].map(
      (): Song => ({
        title: faker.music.songName(),
        genre: faker.music.genre(),
        thumbnail: faker.helpers.arrayElement([faker.image.abstract(680, 480, true), faker.image.animals(680, 480, true), faker.image.business(680, 480, true), faker.image.fashion(680, 480, true), faker.image.food(680, 480, true)]),
      })
    ),
  },
  {
    thumbnailBanner: TopIndonesiaSongsBanner,
    title: "Pembaruan mingguan track yang paling sering diputar saat ini - Indonesia",
    description: "",
    songs: [...Array<Song>(10)].map(
      (): Song => ({
        title: faker.music.songName(),
        genre: faker.music.genre(),
        thumbnail: faker.helpers.arrayElement([faker.image.abstract(680, 480, true), faker.image.animals(680, 480, true), faker.image.business(680, 480, true), faker.image.fashion(680, 480, true), faker.image.food(680, 480, true)]),
      })
    ),
  },
  {
    thumbnailBanner: Top50GlobalSongsBanner,
    title: "Pembaruan harian track yang paling sering diputar saat ini - Global",
    description: "",
    songs: [...Array<Song>(10)].map(
      (): Song => ({
        title: faker.music.songName(),
        genre: faker.music.genre(),
        thumbnail: faker.helpers.arrayElement([faker.image.abstract(680, 480, true), faker.image.animals(680, 480, true), faker.image.business(680, 480, true), faker.image.fashion(680, 480, true), faker.image.food(680, 480, true)]),
      })
    ),
  },
  {
    thumbnailBanner: Top50IndonesiaSongsBanner,
    title: "Pembaruan harian track yang paling sering diputar saat ini - Indonesia",
    description: "",
    songs: [...Array<Song>(10)].map(
      (): Song => ({
        title: faker.music.songName(),
        genre: faker.music.genre(),
        thumbnail: faker.helpers.arrayElement([faker.image.abstract(680, 480, true), faker.image.animals(680, 480, true), faker.image.business(680, 480, true), faker.image.fashion(680, 480, true), faker.image.food(680, 480, true)]),
      })
    ),
  },
  {
    thumbnailBanner: Viral50GlobalSongsBanner,
    title: "Pembaruan harian track yang paling viral saat ini - Global",
    description: "",
    songs: [...Array<Song>(10)].map(
      (): Song => ({
        title: faker.music.songName(),
        genre: faker.music.genre(),
        thumbnail: faker.helpers.arrayElement([faker.image.abstract(680, 480, true), faker.image.animals(680, 480, true), faker.image.business(680, 480, true), faker.image.fashion(680, 480, true), faker.image.food(680, 480, true)]),
      })
    ),
  },
];
