import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

import { APP_TITLE } from '../../constants';
import { fetchAllProducts } from '../../redux/actions/products';
import { selectProducts, selectDiscountedProducts, selectProductsIsLoading } from '../../redux/reducers/products';
import Loader from '../../components/Common/Loader/Loader';
import BreadCrumbs from '../../components/Common/BreadCrumbs/BreadCrumbs';
import FilterSet from '../../components/Products/FilterSet/FilterSet';
import ProductList from '../../components/Products/ProductList';

function ProductsPage({ isDiscountPage = false }) {
    const dispatch = useDispatch();

    const products = useSelector(isDiscountPage ? selectDiscountedProducts : selectProducts);
    const isLoading = useSelector(selectProductsIsLoading);

    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [dispatch]);

    const heading = isDiscountPage ? 'Discounted items' : 'All Products';
    const breadCrumbs = [
        { path: '/', name: 'Main Page' },
        isDiscountPage ? { path: '/discounts', name: 'All Sales' } : { path: '/products', name: 'All Products' },
    ];

    if (isLoading) {
        return <Loader />
    }

    return (
        <Box>
            <title>{`${APP_TITLE} - ${heading}`}</title>
            <BreadCrumbs breadCrumbs={breadCrumbs} />
            <Typography variant="h1">{heading}</Typography>
            <FilterSet products={products} setFilteredProducts={setFilteredProducts} isDiscountPage={isDiscountPage} />
            <ProductList products={filteredProducts} />
        </Box>
    );
}

export default ProductsPage;