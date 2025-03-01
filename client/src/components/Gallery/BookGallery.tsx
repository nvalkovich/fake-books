import { Flex } from 'antd';
import { Book } from '../../types';
import BookCard from './card/BookCard';
import InfiniteScroll from '../InfiniteScroll/InfiniteScroll';

interface BookGalleryProps {
    books: Book[];
    hasMore: boolean;
    onNext: () => void;
    isFetching: boolean;
}

const BookGallery = ({ books, hasMore, onNext, isFetching }: BookGalleryProps) => {
    return (
        <Flex justify="center" style={{ width: '100%' }}>
            <div style={{ maxWidth: 1000, width: '100%' }}>
                <InfiniteScroll dataLength={books.length} hasMore={hasMore} next={onNext}  isFetching={isFetching} >
                    <Flex gap="middle" wrap="wrap" justify="center">
                        {books.map((book) => (
                            <BookCard
                                key={`${book.isbn}-${book.likes}-${book.reviews}`}
                                book={book}
                            />
                        ))}
                    </Flex>
                </InfiniteScroll>
            </div>
        </Flex>
    );
};

export default BookGallery;
