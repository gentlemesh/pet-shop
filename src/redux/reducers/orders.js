import { createSlice } from "@reduxjs/toolkit";

import { postDiscount, createOrder } from "../actions/orders";

const ordersSlice = createSlice({
    name: 'orders',
    initialState: {
        query: {
            responseData: {},
            isAccepted: false,
            error: null,
        },
        order: {
            responseData: {},
            isAccepted: false,
            error: null,
        },
    },
    reducers: {
        resetOrderState: (state) => {
            state.order.responseData = {};
            state.order.isAccepted = false;
            state.order.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(postDiscount.fulfilled, (state, action) => {
                state.query.responseData = action.payload;
                state.query.isAccepted = action.payload?.status === 'OK';
                state.query.error = null;
            })
            .addCase(postDiscount.rejected, (state, action) => {
                state.query.responseData = {};
                state.query.isAccepted = false;
                state.query.error = [action.error.message, action.payload || 'Unknown reason'].join(': ');
            })
            .addCase(createOrder.fulfilled, (state, action) => {
                state.order.responseData = action.payload;
                state.order.isAccepted = action.payload?.status === 'OK';
                state.order.error = null;
            })
            .addCase(createOrder.rejected, (state, action) => {
                state.order.responseData = {};
                state.order.isAccepted = false;
                state.order.error = [action.error.message, action.payload || 'Unknown reason'].join(': ');
            })
    }
});

export const selectIsQueryAccepted = state => state.orders.query.isAccepted;
export const selectQueryError = state => state.orders.query.error;
export const selectIsOrderAccepted = state => state.orders.order.isAccepted;
export const selectOrderError = state => state.orders.order.error;

export const { resetOrderState } = ordersSlice.actions;

export default ordersSlice.reducer;