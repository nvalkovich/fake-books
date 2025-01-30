import { Book } from '../../types';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { json2csv } from 'json-2-csv';

export interface BooksDownloadProps {
    books: Book[];
}

const CSV_MIME_TYPE = 'text/csv';
const DEFAULT_FILENAME = 'books.csv';
const CSV = 'csv';

export const BooksDownload = ({ books }: BooksDownloadProps) => {
    const handleClick = () => {
        const csv = json2csv(books);
        const blob = new Blob([csv], { type: CSV_MIME_TYPE });
        const downloadLink = document.createElement('a');

        downloadLink.href = window.URL.createObjectURL(blob);
        downloadLink.download = DEFAULT_FILENAME;

        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    return (
        <Button
            type="primary"
            icon={<DownloadOutlined />}
            onClick={handleClick}
        >
            {CSV}
        </Button>
    );
};

export default BooksDownload;
