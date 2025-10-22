import { createAsyncThunk } from "@reduxjs/toolkit";

import { getData } from '../../helpers/network';

export const fetchAllCategories = createAsyncThunk(
    'categories/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            return await getData('/categories/all');
        } catch (error) {
            return rejectWithValue(error.response?.data?.message ?? error.message);
        }
    }
);

export const fetchProductsByCategory = createAsyncThunk(
    'categories/fetchProductsByCategory',
    async (categoryId, { rejectWithValue }) => {
        try {
            return await getData(`/categories/${categoryId}`);
        } catch (error) {
            return rejectWithValue(error.response?.data?.message ?? error.message);
        }
    }
);