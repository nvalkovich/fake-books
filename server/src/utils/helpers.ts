import { Faker, LocaleDefinition, allLocales } from '@faker-js/faker';
import seedrandom from 'seedrandom';
import { Book, Errors } from '../common/types';
import { DEFAULT_LOCALE, BOOKS_PER_PAGE, ADDITIONAL_BOOKS_PER_SCROLL } from "../common/constants";
import { Validator } from '../validator/Validator';

export const getLocaleDefinition = (lang: string): LocaleDefinition => {
    return allLocales[lang as keyof typeof allLocales] || allLocales[DEFAULT_LOCALE];
};

export const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

const initializeFaker = (seed: string, lang: LocaleDefinition): Faker => {
    const random = seedrandom(seed);
    const faker = new Faker({
        locale: [lang, allLocales[DEFAULT_LOCALE]],
    });
    faker.seed(Number(random().toString().slice(2, 10)));
    return faker;
};

const generateLikes = (likes: number): number => {
    return likes >= 1 ? Math.floor(likes) : Math.random() < likes ? 1 : 0;
};

const generateReviews = (faker: Faker, reviews: number): { review: string; author: string }[] => {
    return reviews >= 1 ? Array.from({ length: Math.floor(reviews) }, () => ({
        review: faker.lorem.sentence(),
        author: faker.person.fullName(),
    })) : Math.random() < reviews ? [{ review: faker.lorem.sentence(), author: faker.person.fullName() }] : [];
};

export const generateBook = (seed: string, page: number, lang: LocaleDefinition, index: number, likes: number, reviews: number): Book => {
    const faker = initializeFaker(`${seed}-${page}-${index}`, lang);

    return {
        isbn: faker.string.uuid(),
        title: capitalize(faker.lorem.words(faker.number.int({ min: 2, max: 4 }))),
        author: faker.person.fullName(),
        publisher: faker.company.name(),
        likes: generateLikes(likes),
        reviews: generateReviews(faker, reviews),
    };
};

export const generateBooks = (seed: string, page: number, lang: string, likes: number, reviews: number): Book[] => {
    const locale = getLocaleDefinition(lang);
    const booksCount = page === 1 ? BOOKS_PER_PAGE : ADDITIONAL_BOOKS_PER_SCROLL;
    return Array.from({ length: booksCount }, (_, index) => generateBook(seed, page, locale, index, likes, reviews));
};

export const validateRequest = (seed: unknown, page: unknown, lang: unknown, likes: unknown, reviews: unknown): { isValid: boolean; error?: string } => {
    const validator = new Validator(seed, page, lang, likes, reviews);
    return validator.validate();
};