import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

import { APP_TITLE } from '../../constants';
import { fetchProductsByCategory } from '../../redux/actions/categories';
import { selectCurrentCategory, selectCategoryProducts, selectCategoriesIsLoading } from '../../redux/reducers/categories';
import { selectProductsIsLoading } from '../../redux/reducers/products';
import Loader from '../../components/Common/Loader/Loader';
import Error404Page from '../Error404Page/Error404Page';
import BreadCrumbs from '../../components/Common/BreadCrumbs/BreadCrumbs';
import FilterSet from '../../components/Products/FilterSet/FilterSet';
import ProductList from '../../components/Products/ProductList';

function CategoryPage() {
    const dispatch = useDispatch();

    const category = useSelector(selectCurrentCategory);
    const products = useSelector(selectCategoryProducts);
    const isLoadingCategory = useSelector(selectCategoriesIsLoading);
    const isLoadingProducts = useSelector(selectProductsIsLoading);

    const { id } = useParams();

    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        dispatch(fetchProductsByCategory(id));
    }, [dispatch, id]);

    const breadCrumbs = [
        { path: '/', name: 'Main Page' },
        { path: '/categories', name: 'Categories' },
        { path: `/categories/${id}`, name: category?.title },
    ];

    if (isLoadingCategory || isLoadingProducts) {
        return <Loader />
    }

    if (!category) {
        return <Error404Page />
    }

    return (
        <Box>
            <title>{`${APP_TITLE} - Category: ${category.title}`}</title>
            <BreadCrumbs breadCrumbs={breadCrumbs} />
            <Typography variant="h1">{category.title}</Typography>
            <FilterSet products={products} setFilteredProducts={setFilteredProducts} />
            <ProductList products={filteredProducts} />
        </Box>
    );
}

export default CategoryPage;