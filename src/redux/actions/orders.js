import { createAsyncThunk } from "@reduxjs/toolkit";

import { postData } from '../../helpers/network';

export const postDiscount = createAsyncThunk(
    'orders/postDiscount',
    async (data, { rejectWithValue }) => {
        try {
            return await postData('/sale/send', data);
        } catch (error) {
            return rejectWithValue(error.response?.data?.message ?? error.message);
        }
    }
);

export const createOrder = createAsyncThunk(
    'orders/createOrder',
    async (data, { rejectWithValue }) => {
        try {
            return await postData('/order/send', data);
        } catch (error) {
            return rejectWithValue(error.response?.data?.message ?? error.message);
        }
    }
);