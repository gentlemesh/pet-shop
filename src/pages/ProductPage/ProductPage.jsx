import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, Typography, useTheme } from "@mui/material";

import { APP_TITLE } from '../../constants';
import { BASE_URL } from '../../constants';
import { fetchProductById } from '../../redux/actions/products';
import { fetchProductsByCategory } from '../../redux/actions/categories';
import { selectCurrentProduct, selectProductsIsLoading } from '../../redux/reducers/products';
import { selectCurrentCategory, selectCategoriesIsLoading } from '../../redux/reducers/categories';
import Loader from '../../components/Common/Loader/Loader';
import Error404Page from '../Error404Page/Error404Page';
import BreadCrumbs from '../../components/Common/BreadCrumbs/BreadCrumbs';
import {
    ProductImageGridCell,
    ProductImageWrapper,
    ProductContentGridCell,
    ProductPrices,
    ProductPrice,
    ProductOldPrice,
    ProductCartButtons,
    ProductDescriptionBlock,
    ProductDescriptionText,
    ProductDescriptionReadMoreButton,
} from './ProductPage.styled';
import ProductCartCountButtons from '../../components/Products/ProductCartCountButtons/ProductCartCountButtons';
import ProductCartAddButton from '../../components/Products/ProductCartAddButton/ProductCartAddButton';
import ProductDiscountPercent from '../../components/Products/ProductDiscountPercent/ProductDiscountPercent';

function ProductPage() {
    const dispatch = useDispatch();
    const theme = useTheme();

    const product = useSelector(selectCurrentProduct);
    const category = useSelector(selectCurrentCategory);
    const isLoadingProduct = useSelector(selectProductsIsLoading);
    const isLoadingCategory = useSelector(selectCategoriesIsLoading);

    const { id } = useParams();
    const categoryId = product?.categoryId;

    const [count, setCount] = useState(1);

    useEffect(() => {
        dispatch(fetchProductById(id));
        if (categoryId) {
            dispatch(fetchProductsByCategory(categoryId));
        }
    }, [dispatch, id, categoryId]);

    const breadCrumbs = [
        { path: '/', name: 'Main Page' },
        { path: '/categories', name: 'Categories' },
        { path: `/categories/${categoryId}`, name: category?.title },
        { path: `/product/${id}`, name: product?.title },
    ];

    const maxVisibleDescriptionLength = 675;
    const [showFullDescription, setShowFullDescription] = useState(false);
    const handleReadMoreButton = () => {
        setShowFullDescription(prev => !prev);
    }

    if (isLoadingProduct || isLoadingCategory) {
        return <Loader />
    }

    if (!product) {
        return <Error404Page />
    }

    return (
        <Box>
            <title>{`${APP_TITLE} - Product: ${product.title}`}</title>
            <BreadCrumbs breadCrumbs={breadCrumbs} />
            <Grid container spacing={4} paddingBottom={theme.layout.sectionPaddingBottom}>
                <ProductImageGridCell size={{ xs: 12, sm: 7 }}>
                    {product.image && <ProductImageWrapper>
                        <img src={`${BASE_URL}${product.image}`} alt={product.title} id="product_detail_image" />
                    </ProductImageWrapper>}
                </ProductImageGridCell>

                <ProductContentGridCell size={{ xs: 12, sm: 5 }}>
                    <Typography variant="h2">{product.title}</Typography>

                    <ProductPrices>
                        <ProductPrice>${product.discont_price ?? product.price}</ProductPrice>
                        {product.discont_price && <>
                            <ProductOldPrice>${product.price}</ProductOldPrice>
                            <ProductDiscountPercent
                                price={product.price}
                                discountPrice={product.discont_price}
                                sx={{
                                    alignSelf: 'start',
                                    marginLeft: `calc(-1 * ${theme.spacing(2)})`,
                                }}
                            />
                        </>}
                    </ProductPrices>

                    <ProductCartButtons>
                        <ProductCartCountButtons count={count} setCount={setCount} />
                        <ProductCartAddButton product={product} count={count} />
                    </ProductCartButtons>

                    <ProductDescriptionBlock>
                        <Typography fontWeight={600}>Description</Typography>

                        <ProductDescriptionText
                            className={!showFullDescription && product.description.length > maxVisibleDescriptionLength && 'partially-hidden'}
                        >
                            {product.description}
                        </ProductDescriptionText>

                        {product.description.length > maxVisibleDescriptionLength &&
                            <ProductDescriptionReadMoreButton onClick={handleReadMoreButton}>
                                Read {showFullDescription ? 'less' : 'more'}
                            </ProductDescriptionReadMoreButton>
                        }
                    </ProductDescriptionBlock>
                </ProductContentGridCell>
            </Grid>
        </Box>
    );
}

export default ProductPage;