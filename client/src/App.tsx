import { useEffect, useState } from 'react';
import BookTable from './components/BookTable/BookTable';
import { AppState, BookSettings, Langs, View } from './types';
import { fetchBooks } from './services/bookService';
import { Col, Flex, Row } from 'antd';
import { getRandomValue } from './utls/seed';
import { BookSettingsForm } from './components/BookSettingsForm/BookSettingsForm';
import { BooksDownload } from './components/BooksDownload/BooksDownload';
import ViewSwitch from './components/ViewSwitch/ViewSwitch';
import BookGallery from './components/Gallery/BookGallery';

export const FIRST_PAGE = 1;

const App = () => {
    const [state, setState] = useState<AppState>({
        seed: getRandomValue(),
        lang: Langs.en,
        likes: 0,
        reviews: 0,
        books: [],
        page: FIRST_PAGE,
        hasMore: true,
        view: View.table,
    });

    const loadBooks = async (page: number = FIRST_PAGE) => {
        const newBooks = await fetchBooks({ ...state, page });
        setState((prev) => ({
            ...prev,
            books:
                page === FIRST_PAGE ? newBooks : [...prev.books, ...newBooks],
            hasMore: newBooks.length > 0,
            page,
        }));
    };

    useEffect(() => {
        loadBooks(state.page);
    }, [state.seed, state.lang, state.likes, state.reviews, state.page]);

    const handleSettingsChange = (settings: BookSettings) => {
        setState((s) => ({ ...s, ...settings }));
    };

    const handleNext = () => {
        setState((s) => ({ ...s, page: s.page + 1 }));
    };

    const handleSeedRefresh = () => {
        setState((s) => ({ ...s, seed: getRandomValue(), page: FIRST_PAGE }));
    };

    const handleViewOnChange = (view: View) => {
        setState((s) => ({ ...s, view: view, page: FIRST_PAGE }));
    };

    return (
        <Flex vertical style={{ paddingTop: 20 }}>
            <Row>
                <Col span={20}>
                    <BookSettingsForm
                        settings={state}
                        onChange={handleSettingsChange}
                        onSeedRefresh={handleSeedRefresh}
                    />
                </Col>
                <Col span={4}>
                    <Flex
                        style={{ height: '100%' }}
                        gap={20}
                        align="center"
                        justify="center"
                    >
                        <ViewSwitch
                            view={state.view}
                            onChange={handleViewOnChange}
                        />
                        <BooksDownload books={state.books} />
                    </Flex>
                </Col>
            </Row>
            {state.view === View.table ? (
                <BookTable books={state.books} onNext={handleNext} />
            ) : (
                <BookGallery books={state.books} onNext={handleNext} />
            )}
        </Flex>
    );
};

export default App;
