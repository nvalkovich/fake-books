import { Card } from 'antd';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Book, NumberToShowTypes } from '../../../types';
import LazyImage from '../../LazyImage/LazyImage';
import NumberToShow from '../../NumberToShow/NumberToShow.tsx';

const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
};

const cardStyle = {
    width: '300px',
    overflow: 'hidden',
};

const BookCard = (book: Book) => {
    const { image, title, authors, publisher, year, isbn, likes, reviews } =
        book;

    return (
        <Card
            cover={
                <LazyImage src={image} styles={imageStyle} alt={'book image'} />
            }
            style={cardStyle}
        >
            <Card.Meta
                title={title}
                description={
                    <div>
                        <p>{`by ${authors}`}</p>
                        <p>{`${publisher}, ${year}`}</p>
                        <div>
                            <NumberToShow
                                type={NumberToShowTypes.like}
                                number={likes}
                            />
                            <NumberToShow
                                type={NumberToShowTypes.review}
                                number={reviews.length}
                            />
                        </div>
                        <p style={{ fontSize: 11 }}>{`ISBN: ${isbn}`}</p>
                    </div>
                }
                style={{
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                }}
            />
        </Card>
    );
};

export default BookCard;
