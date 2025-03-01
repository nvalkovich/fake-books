import ReactInfiniteScroll, {
    Props as ReactInfiniteScrollProps,
} from 'react-infinite-scroll-component';
import { Flex, Spin } from 'antd';
import { resources } from '../../resources/resources';

export type InfiniteScrollProps = Pick<
    ReactInfiniteScrollProps,
    'dataLength' | 'next' | 'children' | 'hasMore'
> & { isFetching: boolean }; 

const InfiniteScroll = ({ children, hasMore, next, isFetching, ...restProps }: InfiniteScrollProps) => {
    return (
        <ReactInfiniteScroll
            {...restProps}
            hasMore={hasMore}
            next={isFetching || !hasMore ? () => {} : next}
            scrollThreshold={0.9}
            loader={
                <Flex style={{ padding: 20 }} gap="middle" align="center" justify="center">
                    <Spin size="large" />
                </Flex>
            }
        >
            {children}
        </ReactInfiniteScroll>
    );
};

export default InfiniteScroll;
