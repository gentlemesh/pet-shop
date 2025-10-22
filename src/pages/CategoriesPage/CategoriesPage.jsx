import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

import { APP_TITLE } from '../../constants';
import { fetchAllCategories } from '../../redux/actions/categories';
import { selectCategories, selectCategoriesIsLoading } from '../../redux/reducers/categories';
import Loader from '../../components/Common/Loader/Loader';
import BreadCrumbs from '../../components/Common/BreadCrumbs/BreadCrumbs';
import CategoryList from '../../components/Categories/CategoryList';

function CategoriesPage() {
    const dispatch = useDispatch();

    const categories = useSelector(selectCategories);
    const isLoading = useSelector(selectCategoriesIsLoading);

    useEffect(() => {
        dispatch(fetchAllCategories())
    }, [dispatch]);

    const breadCrumbs = [
        { path: '/', name: 'Main Page' },
        { path: '/categories', name: 'Categories' },
    ];

    if (isLoading) {
        return <Loader />
    }

    return (
        <Box>
            <title>{`${APP_TITLE} - Categories`}</title>
            <BreadCrumbs breadCrumbs={breadCrumbs} />
            <Typography variant="h1">Categories</Typography>
            <CategoryList categories={categories} />
        </Box>
    );
}

export default CategoriesPage;