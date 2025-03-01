import { Tag } from 'antd';
import { LikeOutlined, FormOutlined } from '@ant-design/icons';
import { NumberToShowTypes } from '../../types';

interface NumberToShowProps {
    type: NumberToShowTypes;
    number: number;
}

const NumberToShow = (data: NumberToShowProps) => {
    const { type, number } = data;

    return (
        <Tag
            icon={
                type === NumberToShowTypes.like ? (
                    <LikeOutlined />
                ) : (
                    <FormOutlined />
                )
            }
            color="#108ee9"
            style={{ fontSize: 16, padding: 5, marginBottom: '5px' }}
        >
            {number.toString()}
        </Tag>
    );
};

export default NumberToShow;
