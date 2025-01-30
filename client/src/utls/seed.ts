export const SEED_VALUES_COUNT = 100000000;
export const SEED_MAX_VALUE = SEED_VALUES_COUNT - 1;

export const getRandomValue = () =>
    Math.floor(Math.random() * SEED_VALUES_COUNT);
