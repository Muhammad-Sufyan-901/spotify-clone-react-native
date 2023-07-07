import { faker } from "@faker-js/faker";
import type { Category } from "../types/category";

export const categoryList: Category[] = [...Array<Category>(15)].map(
  (): Category => ({
    title: faker.helpers.arrayElement([faker.music.genre(), faker.music.songName()]),
    image: faker.helpers.arrayElement([faker.image.abstract(680, 480, true), faker.image.animals(680, 480, true), faker.image.business(680, 480, true), faker.image.fashion(680, 480, true), faker.image.food(680, 480, true)]),
    backgroundColor: faker.color.rgb({ prefix: "#", casing: "lower" }),
  })
);
