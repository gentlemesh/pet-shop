import { createAsyncThunk } from "@reduxjs/toolkit";

import { getData } from '../../helpers/network';

export const fetchAllProducts = createAsyncThunk(
    'products/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            return await getData('/products/all');
        } catch (error) {
            return rejectWithValue(error.response?.data?.message ?? error.message);
        }
    }
);

export const fetchProductById = createAsyncThunk(
    'products/fetchById',
    async (productId, { rejectWithValue }) => {
        try {
            return await getData(`/products/${productId}`);
        } catch (error) {
            return rejectWithValue(error.response?.data?.message ?? error.message);
        }
    }
);