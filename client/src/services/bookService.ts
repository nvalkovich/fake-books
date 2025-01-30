import { AppState } from '../types';

export const fetchBooks = async (state: AppState) => {
    const { seed, page, lang, likes, reviews } = state;

    try {
        const response = await fetch(
            `http://localhost:3000/books?seed=${seed}&page=${page}&lang=${lang}&likes=${likes}&reviews=${reviews}`,
        );
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching books:', error);
        throw error;
    }
};
