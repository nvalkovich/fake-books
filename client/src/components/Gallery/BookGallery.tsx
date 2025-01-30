import { Flex } from 'antd';
import { Book } from '../../types';
import BookCard from './card/BookCard';
import InfiniteScroll from '../InfiniteScroll/InfiniteScroll';

interface BookGalleryProps {
    books: Book[];
    onNext: () => void;
}

const BookGallery = ({ books, onNext }: BookGalleryProps) => {
    return (
        <Flex justify="center" style={{ width: '100%' }}>
            <div style={{ maxWidth: 1000, width: '100%' }}>
                <InfiniteScroll dataLength={books.length} next={onNext}>
                    <Flex gap="middle" wrap="wrap" justify="center">
                        {books.map((book) => (
                            <BookCard
                                key={`${book.isbn}-${book.likes}`}
                                {...book}
                            />
                        ))}
                    </Flex>
                </InfiniteScroll>
            </div>
        </Flex>
    );
};

export default BookGallery;
