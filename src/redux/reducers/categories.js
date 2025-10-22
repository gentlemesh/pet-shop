import { createSlice } from "@reduxjs/toolkit";

import { fetchAllCategories, fetchProductsByCategory } from "../actions/categories";

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [],
        currentCategory: null,
        categoryProducts: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllCategories.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchAllCategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.categories = action.payload;
            })
            .addCase(fetchAllCategories.rejected, (state, action) => {
                state.isLoading = false;
                state.error = [action.error.message, action.payload || 'Unknown reason'].join(': ');
                console.error(state.error);
            })
            .addCase(fetchProductsByCategory.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentCategory = action.payload.category;
                state.categoryProducts = action.payload.data;
            })
            .addCase(fetchProductsByCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.error = [action.error.message, action.payload || 'Unknown reason'].join(': ');
                console.error(state.error);
            })
    }
});

export const selectCategories = state => state.categories.categories ?? [];
export const selectCurrentCategory = state => state.categories.currentCategory ?? null;
export const selectCategoryProducts = state => state.categories.categoryProducts ?? [];
export const selectCategoriesIsLoading = state => !!state.categories.isLoading;
export const selectCategoriesError = state => state.categories.error ?? null;

export default categoriesSlice.reducer;