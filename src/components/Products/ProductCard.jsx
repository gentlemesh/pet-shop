import { Link } from "react-router-dom";
import { Box, Grow } from "@mui/material";

import { BASE_URL } from '../../constants';
import {
    ProductBox,
    ProductImageBox,
    ProductButtonAddToCartWrapper,
    ProductText,
    ProductTitle,
    ProductPrice,
    ProductOldPrice,
} from './Product.styled';
import ProductCartAddButton from '../../components/Products/ProductCartAddButton/ProductCartAddButton';
import ProductDiscountPercent from '../../components/Products/ProductDiscountPercent/ProductDiscountPercent';

function ProductCard({ product }) {
    const { id, title, price, discont_price, image } = product;

    return (
        <Grow in={true} timeout={800} style={{ transformOrigin: '50% 30%' }}>
            <Box>
                <ProductBox className="product-card">
                    <Link to={`/products/${id}`} style={{ textDecoration: 'none' }}>
                        <ProductImageBox className="js-product-card-image" sx={{ backgroundImage: `url("${BASE_URL}${image}")` }}>
                            {!!discont_price && <ProductDiscountPercent price={price} discountPrice={discont_price} sx={{ alignSelf: 'end' }} />}

                            <ProductButtonAddToCartWrapper>
                                <ProductCartAddButton product={product} />
                            </ProductButtonAddToCartWrapper>
                        </ProductImageBox>

                        <ProductText>
                            <ProductTitle title={title}>{title}</ProductTitle>
                            <ProductPrice>${discont_price ?? price}</ProductPrice>
                            {!!discont_price && <ProductOldPrice>${price}</ProductOldPrice>}
                        </ProductText>
                    </Link>
                </ProductBox>
            </Box>
        </Grow>
    );
}

export default ProductCard;