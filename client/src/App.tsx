import { useState } from 'react';
import BookTable from './components/BookTable/BookTable';
import { AppState, BookSettings, Langs, View } from './types';
import { Col, Flex, Row } from 'antd';
import { getRandomValue } from './utls/seed';
import { BookSettingsForm } from './components/BookSettingsForm/BookSettingsForm';
import { BooksDownload } from './components/BooksDownload/BooksDownload';
import ViewSwitch from './components/ViewSwitch/ViewSwitch';
import BookGallery from './components/Gallery/BookGallery';
import { useBooksPages } from './usePagination';

export const FIRST_PAGE = 1;

const App = () => {
    const [state, setState] = useState<AppState>({
        seed: getRandomValue(),
        lang: Langs.en,
        likes: 0,
        reviews: 0,
        books: [],
        page: FIRST_PAGE,
        view: View.table,
    });

    const { books, loadNext} = useBooksPages(state);

    const handleSettingsChange = (settings: BookSettings) => {
        setState((s) => ({ ...s, ...settings }));
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
                <BookTable books={books} onNext={loadNext} />
            ) : (
                <BookGallery books={books} onNext={loadNext} />
            )}
        </Flex>
    );
};

export default App;
