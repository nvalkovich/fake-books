import { Book, NumberToShowTypes } from '../../../types.ts';
import { Card, Col, Flex, List, Row, Typography } from 'antd';
import { BookImage } from './BookImage.tsx';
import NumberToShow from '../../NumberToShow/NumberToShow.tsx';

const { Paragraph, Title } = Typography;

export interface BookInfoProps {
    book: Book;
}

export const BookInfo = ({ book }: BookInfoProps) => {
    const { likes, title, authors, publisher, year, reviews } = book;
    return (
        <Row>
            <Col span={6} style={{ padding: 15 }}>
                <Flex vertical align="center">
                    <BookImage book={book} />
                    <NumberToShow
                        type={NumberToShowTypes.like}
                        number={likes}
                    />
                </Flex>
            </Col>
            <Col span={18}>
                <Paragraph>
                    <Title level={3}>{title}</Title>
                    <Title level={5} italic>{`by ${authors}`}</Title>
                    <Title
                        level={5}
                        type="secondary"
                    >{`${publisher}, ${year}`}</Title>
                </Paragraph>
                <Card title={`Reviews (${reviews.length}): `}>
                    <List
                        style={{ marginTop: '-15px' }}
                        dataSource={reviews}
                        renderItem={(item) => (
                            <List.Item>
                                <List.Item.Meta
                                    title={item.author}
                                    description={item.review}
                                />
                            </List.Item>
                        )}
                    />
                </Card>
            </Col>
        </Row>
    );
};
