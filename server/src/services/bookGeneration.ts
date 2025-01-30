import { Faker, LocaleDefinition } from "@faker-js/faker";
import { Book } from "../common/types";
import {
  ADDITIONAL_BOOKS_PER_SCROLL,
  BOOKS_PER_PAGE,
} from "../common/constants";
import {
  capitalize,
  getLocaleDefinition,
  initializeFaker,
  times,
} from "../utils/helpers";

export const generateBooks = (
  seed: string,
  page: number,
  lang: string,
  likes: number,
  reviews: number,
): Book[] => {
  const locale = getLocaleDefinition(lang);
  const booksCount = page === 1 ? BOOKS_PER_PAGE : ADDITIONAL_BOOKS_PER_SCROLL;
  return Array.from({ length: booksCount }, (_, index) =>
    generateBook(seed, page, locale, index, likes, reviews),
  );
};

export const generateBook = (
  seed: string,
  page: number,
  lang: LocaleDefinition,
  index: number,
  likes: number,
  reviews: number,
): Book => {
  const faker = initializeFaker(`${seed}-${page}-${index}`, lang);

  return {
    isbn: faker.string.uuid(),
    title: capitalize(faker.lorem.words(faker.number.int({ min: 1, max: 3 }))),
    authors: generateAuthors(faker).toString(),
    publisher: faker.company.name(),
    year: faker.date.past({ years: 20 }).getFullYear(),
    image: faker.image.urlLoremFlickr({ width: 300, height: 350 }),
    likes: generateLikes(faker, likes),
    reviews: generateReviews(faker, reviews),
  };
};

const generateAuthors = (faker: any): string => {
  const numberOfAuthors = faker.number.int({ min: 1, max: 2 });

  const authors = Array.from({ length: numberOfAuthors }, () =>
    faker.person.fullName(),
  );

  return authors.join(", ");
};

export const generateLikes = (faker: Faker, likes: number): number => {
  const generateLike = () => 1;

  const likeGenerator = times(likes, (likesCount: number) => {
    return likesCount + generateLike();
  });

  return likeGenerator(0);
};

export const generateReviews = (
  faker: Faker,
  reviews: number,
): { review: string; author: string }[] => {
  const generateReview = () => ({
    review: faker.lorem.sentence(),
    author: faker.person.fullName(),
  });

  const reviewGenerator = times(
    reviews,
    (reviewsList: { review: string; author: string }[]) => {
      reviewsList.push(generateReview());
      return reviewsList;
    },
  );

  return reviewGenerator([]);
};
