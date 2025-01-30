import { Book } from '../../types';
import { Table } from 'antd';
import InfiniteScroll from '../InfiniteScroll/InfiniteScroll';
import { columns } from './columns';
import { BookInfo } from './details/BookInfo';

interface BookTableProps {
    books: Book[];
    onNext: () => void;
}

const BookTable = ({ books, onNext }: BookTableProps) => {
    return (
        <InfiniteScroll dataLength={books.length} next={onNext}>
            <Table
                style={{ width: 1000 }}
                rowKey="isbn"
                dataSource={books}
                columns={columns}
                pagination={false}
                className="styled-table"
                expandable={{
                    columnWidth: 48,
                    expandedRowRender: (book) => <BookInfo book={book} />,
                }}
            />
        </InfiniteScroll>
    );
};

export default BookTable;
