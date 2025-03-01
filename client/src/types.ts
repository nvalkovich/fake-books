export interface Review {
    review: string;
    author: string;
}

export interface Book {
    isbn: string;
    title: string;
    authors: string;
    publisher: string;
    year: number;
    likes: number;
    image: string;
    reviews: Review[];
}

export interface AppState {
    seed: number;
    lang: string;
    likes: number;
    reviews: number;
    page: number;
    view: View;
}

export type BookSettings = {
    lang: string;
    seed: number;
    likes: number;
    reviews: number;
};

export enum View {
    table = 'table',
    gallery = 'gallery',
}

export enum Langs {
    en = 'en',
    lv = 'lv',
    es_MX = 'es_MX',
}

export enum LangLabels {
    en = 'English',
    lv = 'Latvian',
    es_MX = 'Spanish (Mexico)',
}

export enum Errors {
    fetchingBooks = 'Error fetching books',
    responseNotOk = 'Network response was not ok',
}

export enum SettingsInputs {
    lang = 'lang',
    likes = 'likes',
    reviews = 'reviews',
    seed = 'seed',
}

export enum SettingsInputsLabels {
    lang = 'Language',
    likes = 'Likes',
    reviews = 'Review',
    seed = 'Seed',
}

export enum TableColumnsKeys {
    isbn = 'isbn',
    num = '#',
    title = 'title',
    authors = 'authors',
    publisher = 'publisher',
}

export enum NumberToShowTypes {
    like = 'like',
    review = 'review',
}
