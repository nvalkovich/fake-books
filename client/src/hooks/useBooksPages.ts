import { useEffect, useState, useMemo, useCallback, useRef } from "react";
import { useUpdateEffect } from "react-use";
import { AppState, Book } from "../types";
import { fetchBooks } from "../services/bookService";

export const useBooksPages = (state: AppState) => {
    const [isFetching, setIsFetching] = useState(false);
    const [pages, setPages] = useState<Book[][]>([]);
    const [hasMore, setHasMore] = useState(true);
    const isFetchingRef = useRef(false);

    const loadNext = useCallback(async () => {
    if (isFetchingRef.current || !hasMore) return;
    isFetchingRef.current = true;

    setIsFetching(true);

    try {
        const nextPage = pages.length + 1;
        const newBooks = await fetchBooks({ ...state, page: nextPage });

        if (newBooks.length > 0) {
            setPages((prev) => [...prev, newBooks]);
        } else {
            setHasMore(false);
        }
    } finally {
        isFetchingRef.current = false;
        setIsFetching(false);
    }
}, [hasMore, pages.length, state]);

    useEffect(() => {
        if (!pages.length) {
            loadNext();
        }
    }, [state.seed]);

    useUpdateEffect(() => {
        const updateBooks = async () => {
            setIsFetching(true);
            try {
                const newBooks = await fetchBooks({ ...state, page: 1 });
                setPages(newBooks.length > 0 ? [newBooks] : []);
                setHasMore(newBooks.length > 0);
            } finally {
                setIsFetching(false);
            }
        };
        updateBooks();
    }, [state.lang, state.seed, state.likes, state.reviews]);

    return useMemo(() => ({
        books: pages.flat(),
        loadNext,
        isFetching,
        hasMore,
    }), [pages, loadNext, isFetching, hasMore]);
};
