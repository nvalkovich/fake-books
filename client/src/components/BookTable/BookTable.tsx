import React, { memo, useCallback } from "react";
import { Book } from "../../types";
import { Table } from "antd";
import InfiniteScroll from "../InfiniteScroll/InfiniteScroll";
import { useColumns } from "../../hooks/useColumns";
import { BookInfo } from "./details/BookInfo";

interface BookTableProps {
    books: Book[];
    onNext: () => void;
    isFetching: boolean;
    hasMore: boolean;
}

const BookTable = memo(({ books, onNext, isFetching, hasMore }: BookTableProps) => {
    const columns = useColumns();
    const handleNext = useCallback(() => {
        onNext();
    }, [onNext]);

    return (
        <InfiniteScroll
            dataLength={books.length}
            next={handleNext}
            hasMore={hasMore && !isFetching}
             isFetching={isFetching} // 
        >
            <Table
                rowKey="isbn"
                dataSource={books}
                columns={columns}
                pagination={false}
                expandable={{ expandedRowRender: (book) => <BookInfo book={book} /> }}
            />
        </InfiniteScroll>
    );
});

export default BookTable;
