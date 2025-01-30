import { AppState, Errors } from '../types';

export const fetchBooks = async (state: AppState) => {
    const { seed, page, lang, likes, reviews } = state;

    try {
        const response = await fetch(
            `/api/books?seed=${seed}&page=${page}&lang=${lang}&likes=${likes}&reviews=${reviews}`,
        );
        if (!response.ok) {
            console.error(response);
            throw new Error(Errors.responseNotOk);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`${Errors.fetchingBooks}`, error);
        throw error;
    }
};
