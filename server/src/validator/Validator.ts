import { Errors } from '../common/types';

export class Validator {
    private seed: unknown;
    private page: unknown;
    private lang: unknown;
    private likes: unknown;
    private reviews: unknown;

    constructor(seed: unknown, page: unknown, lang: unknown, likes: unknown, reviews: unknown) {
        this.seed = seed;
        this.page = page;
        this.lang = lang;
        this.likes = likes;
        this.reviews = reviews;
    }

    private validateSeed(): boolean {
        return !!this.seed;
    }

    private validatePage(): boolean {
        const pageNumber = Number(this.page);
        return !isNaN(pageNumber) && pageNumber >= 1;
    }

    private validateLang(): boolean {
        return !!this.lang;
    }

    private validateLikes(): boolean {
        const likesNumber = Number(this.likes);
        return !isNaN(likesNumber) && likesNumber >= 0;
    }

    private validateReviews(): boolean {
        const reviewsNumber = Number(this.reviews);
        return !isNaN(reviewsNumber) && reviewsNumber >= 0;
    }

    public validate(): { isValid: boolean; error?: string } {
        let error: string | undefined;

        if (!this.validateSeed()) {
            error = Errors.missingSeed;
        } else if (!this.validatePage()) {
            error = Errors.invalidPageNumber;
        } else if (!this.validateLang()) {
            error = Errors.missingLang;
        } else if (!this.validateLikes()) {
            error = Errors.invalidLikeNumber;
        } else if (!this.validateReviews()) {
            error = Errors.invalidReviewNumber;
        }

        return { isValid: !error, error };
    }
}