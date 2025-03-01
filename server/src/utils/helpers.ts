import { Faker, LocaleDefinition, allLocales } from "@faker-js/faker";
import seedrandom from "seedrandom";
import { DEFAULT_LOCALE } from "../common/constants";
import { Validator } from "../validator/Validator";

export const getLocaleDefinition = (lang: string): LocaleDefinition => {
  return (
    allLocales[lang as keyof typeof allLocales] || allLocales[DEFAULT_LOCALE]
  );
};

export const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);

export const initializeFaker = (
  seed: string,
  lang: LocaleDefinition,
): Faker => {
  const random = seedrandom(seed);
  const faker = new Faker({
    locale: [lang, allLocales[DEFAULT_LOCALE]],
  });
  faker.seed(Number(random().toString().slice(2, 10)));
  return faker;
};

export const times = (n: number, fn: (arg: any) => any) => {
  return (arg: any) => {
    for (let i = Math.floor(n); i--; ) arg = fn(arg);
    return Math.random() < n % 1 ? fn(arg) : arg;
  };
};

export const validateRequest = (
  seed: unknown,
  page: unknown,
  lang: unknown,
  likes: unknown,
  reviews: unknown,
): { isValid: boolean; error?: string } => {
  const validator = new Validator(seed, page, lang, likes, reviews);
  return validator.validate();
};
