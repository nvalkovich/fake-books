import { useEffect, useState } from "react"
import {useUpdateEffect} from 'react-use';
import { AppState, Book } from "./types";
import { fetchBooks } from "./services/bookService";

export const useBooksPages = (state: AppState) => {
  const [isFetching, setIsFetching] = useState(false);
  const [pages, setPages] = useState<Book[][]>([]);

  const loadNext = async () => {
    if (isFetching) {
      return;
    }

    setIsFetching(true);
    try {
      const newBooks = await fetchBooks({ ...state, page: pages.length + 1 });
      setPages(p => [...p, newBooks]);
    }
    finally {
      setIsFetching(false);
    }
  }

  const loadSync = () => {
    const load = async () => await loadNext();
    load();
  }

  useEffect(loadSync, [pages.length === 0])

  useUpdateEffect(() => {
    setPages([]);
  }, [state.lang, state.seed, state.likes, state.reviews])

  return {
    books: pages.flatMap(p => p),
    loadNext
  }
}