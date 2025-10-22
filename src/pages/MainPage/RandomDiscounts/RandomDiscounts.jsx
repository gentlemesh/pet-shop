import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";

import { fetchAllProducts } from '../../../redux/actions/products';
import { selectDiscountedProducts } from '../../../redux/reducers/products';
import { shuffleArray } from '../../../helpers/array';
import TitleDivider from '../../../components/Common/TitleDivider/TitleDivider';
import ProductList from '../../../components/Products/ProductList';

function RandomDiscounts() {
    const dispatch = useDispatch();

    const products = shuffleArray(useSelector(selectDiscountedProducts)).slice(0, 4);

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [dispatch]);

    return (
        <Box>
            <TitleDivider title="Products" linkTo="/products" btnTitle="All Products" />
            <ProductList products={products} />
        </Box>
    )
}
export default RandomDiscounts;