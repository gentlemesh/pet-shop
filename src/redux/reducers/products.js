import { createSelector, createSlice } from "@reduxjs/toolkit";

import { fetchAllProducts, fetchProductById } from '../actions/products';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        currentProduct: null,
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProducts.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload;
            })
            .addCase(fetchAllProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = [action.error.message, action.payload || 'Unknown reason'].join(': ');
                console.error(state.error);
            })
            .addCase(fetchProductById.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentProduct = action.payload[0];
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = [action.error.message, action.payload || 'Unknown reason'].join(': ');
                console.error(state.error);
            })
    }
});

export const selectProducts = state => state.products.products ?? [];
export const selectCurrentProduct = state => state.products.currentProduct ?? null;
export const selectProductsIsLoading = state => !!state.products.isLoading;
export const selectProductsError = state => state.products.error ?? null;
export const selectDiscountedProducts = createSelector(selectProducts, products => products.filter(product => product.discont_price !== null));

export default productsSlice.reducer;