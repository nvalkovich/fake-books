import { ColumnsType } from 'antd/es/table';
import { Book, TableColumnsKeys } from '../../types';
import { resources } from '../../resources/resources';

const columnTitles = resources.tableColumns;

export const columns: ColumnsType<Book> = [
    {
        title: '#',
        key: TableColumnsKeys.num,
        render: (_, __, index: number) => index + 1,
    },
    {
        title: columnTitles.isbn,
        dataIndex: TableColumnsKeys.isbn,
        key: TableColumnsKeys.isbn,
    },
    {
        title: columnTitles.title,
        dataIndex: TableColumnsKeys.title,
        key: TableColumnsKeys.title,
    },
    {
        title: columnTitles.authors,
        dataIndex: TableColumnsKeys.authors,
        key: TableColumnsKeys.authors,
    },
    {
        title: columnTitles.publisher,
        key: TableColumnsKeys.publisher,
        render: (_, record, __) => `${record.publisher}, ${record.year}`,
    },
];
