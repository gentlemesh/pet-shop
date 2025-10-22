import { configureStore } from "@reduxjs/toolkit";

import categoriesReducer from './reducers/categories';
import productsReducer from './reducers/products';
import ordersReducer from './reducers/orders';
import cartReducer from './reducers/cart';

const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer,
        orders: ordersReducer,
        cart: cartReducer,
    },
    devTools: true,
});

export default store;