export enum Errors {
  generatingBooks = "Error generating books",
  missingSeed = "Missing seed",
  missingLang = "Missing lang",
  invalidPageNumber = "Invalid page number",
  invalidLikeNumber = "Invalid like number",
  invalidReviewNumber = "Invalid review number",
}

export enum StatusCodes {
  internalServerError = 500,
  badRequest = 400,
  ok = 200,
}

export interface Book {
  isbn: string;
  title: string;
  authors: string;
  publisher: string;
  likes: number;
  year: number;
  image: string;
  reviews: { review: string; author: string }[];
}
