import { useMemo } from 'react';
import { ColumnsType } from 'antd/es/table';
import { Book, TableColumnsKeys } from '../types';
import { resources } from '../resources/resources';

const columnTitles = resources.tableColumns;

export const useColumns = () => {
  return useMemo(() => {
    const columns: ColumnsType<Book> = [
      {
        title: '#',
        key: TableColumnsKeys.num,
        render: (_, __, index: number) => index + 1,
        width: 50,
      },
      {
        title: columnTitles.isbn,
        dataIndex: TableColumnsKeys.isbn,
        key: TableColumnsKeys.isbn,
        width: 300,
      },
      {
        title: columnTitles.title,
        dataIndex: TableColumnsKeys.title,
        key: TableColumnsKeys.title,
        width: 200,
      },
      {
        title: columnTitles.authors,
        dataIndex: TableColumnsKeys.authors,
        key: TableColumnsKeys.authors,
        width: 200,
      },
      {
        title: columnTitles.publisher,
        key: TableColumnsKeys.publisher,
        render: (_, record, __) => `${record.publisher}, ${record.year}`,
        width: 200,
      },
    ];
    return columns;
  }, []);
};