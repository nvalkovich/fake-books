import ReactInfiniteScroll, {
    Props as ReactInfiniteScrollProps,
} from 'react-infinite-scroll-component';
import { Flex, Spin } from 'antd';
import { resources } from '../../resources/resources';

export type InfiniteScrollProps = Pick<
    ReactInfiniteScrollProps,
    'dataLength' | 'next' | 'children'
>;

const InfiniteScroll = ({ children, ...restProps }: InfiniteScrollProps) => {
    return (
        <ReactInfiniteScroll
            {...restProps}
            hasMore={true}
            loader={
                <Flex
                    style={{ padding: 20 }}
                    gap="middle"
                    align="start"
                    justify="center"
                >
                    <Spin size="large" />
                </Flex>
            }
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>{resources.scrollEnd}</b>
                </p>
            }
        >
            {children}
        </ReactInfiniteScroll>
    );
};

export default InfiniteScroll;
