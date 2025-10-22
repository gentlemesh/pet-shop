import { PercentLabel } from './ProductDiscountPercent.styled';

function ProductDiscountPercent({ price, discountPrice, ...attributes }) {
    const discountPercent = Math.round(100 - 100 * discountPrice / price);

    return (
        <PercentLabel {...attributes}>
            -{discountPercent}%
        </PercentLabel>
    );
}

export default ProductDiscountPercent;