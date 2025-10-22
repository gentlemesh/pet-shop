import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";

import { fetchAllCategories } from '../../../redux/actions/categories';
import TitleDivider from '../../../components/Common/TitleDivider/TitleDivider';
import CategoryList from '../../../components/Categories/CategoryList';

function MainCategories() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllCategories())
    }, [dispatch]);

    const categories = useSelector(state => state.categories.categories)?.slice(0, 4);

    return (
        <Box>
            <TitleDivider title="Categories" linkTo="/categories" btnTitle="All categories" />
            <CategoryList categories={categories} />
        </Box>
    );
}

export default MainCategories;