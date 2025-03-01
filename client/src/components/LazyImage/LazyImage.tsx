import { LazyLoadImage } from 'react-lazy-load-image-component';

export interface LazyImageProps {
    src: string;
    styles: React.CSSProperties;
    alt: string;
}

const LazyImage = (data: LazyImageProps) => {
    const { src, styles, alt } = data;

    return <LazyLoadImage src={src} alt={alt} style={styles} />;
};

export default LazyImage;
