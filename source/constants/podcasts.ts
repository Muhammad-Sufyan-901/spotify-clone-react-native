import { faker } from "@faker-js/faker";
import type { Podcast } from "../types";

export const podcastList: Podcast[] = [...Array<Podcast>(10)].map(
  (): Podcast => ({
    title: faker.helpers.arrayElement([faker.lorem.sentence(), faker.random.words(3)]),
    thumbnail: faker.helpers.arrayElement([faker.image.abstract(680, 480, true), faker.image.animals(680, 480, true), faker.image.business(680, 480, true), faker.image.fashion(680, 480, true), faker.image.food(680, 480, true)]),
    genre: faker.helpers.arrayElement(["Kisah", "Komedi", "Society & Culture", "Agama & Spiritualitas", "Seni & Hiburan"]),
    hoster: faker.name.fullName(),
  })
);
