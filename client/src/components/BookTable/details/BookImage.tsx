import { Book } from '../../../types.ts';
import LazyImage from '../../LazyImage/LazyImage.tsx';

const textStyle: React.CSSProperties = {
    left: 0,
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
    color: '#fff',
    textShadow:
        '1px 0 10px #000, 0 -1px 10px #000, 0 1px 10px #000, -1px 0 10px #000',
};

const imageStyle: React.CSSProperties = {
    position: 'relative',
    width: 180,
    height: 240,
    margin: 20,
};

const bookImageAlt = 'Book Cover';

export interface BookInfoProps {
    book: Book;
}

export const BookImage = ({ book }: BookInfoProps) => {
    const { authors, title, image } = book;

    return (
        <div style={imageStyle}>
            <div
                style={{
                    ...textStyle,
                    top: 10,
                    fontSize: 12,
                }}
            >
                {authors}
            </div>
            <div
                style={{
                    ...textStyle,
                    bottom: 10,
                    fontSize: 16,
                }}
            >
                {title}
            </div>
            <LazyImage
                src={`${image}`}
                styles={{ width: '100%', height: '100%' }}
                alt={bookImageAlt}
            />
        </div>
    );
};
