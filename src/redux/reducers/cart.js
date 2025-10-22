import { createSelector, createSlice } from "@reduxjs/toolkit";

import { loadCart, saveCart } from '../../helpers/cart';

const ITEM_KEY_PREFIX = '_'; // helps maintain native items order

const loadedCart = loadCart();

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: loadedCart,
        itemsCount: Object.keys(loadedCart).length,
    },
    reducers: {
        addItem: {
            prepare: (product, count = 1) => ({
                payload: {
                    product: {
                        id: product.id,
                        title: product.title,
                        image: product.image,
                        price: product.price,
                        discont_price: product.discont_price,
                    },
                    count
                }
            }),
            reducer: (state, action) => {
                const productKey = `${ITEM_KEY_PREFIX}${action.payload.product.id}`;
                if (productKey in state.items) {
                    state.items[productKey].count += +action.payload.count;
                } else {
                    state.items[productKey] = action.payload;
                    state.itemsCount++;
                }

                saveCart(state.items);
            },
        },
        removeItem: (state, action) => {
            const productKey = `${ITEM_KEY_PREFIX}${action.payload}`;
            if (productKey in state.items) {
                delete state.items[productKey];
                state.itemsCount--;

                saveCart(state.items);
            }
        },
        updateItemCount: {
            prepare: (id, count = 1) => ({ payload: { id, count } }),
            reducer: (state, action) => {
                const productKey = `${ITEM_KEY_PREFIX}${action.payload.id}`;
                if (!(productKey in state.items)) {
                    console.error(`Error on cart item count update: no product with id ${action.payload.id} in cart!`);
                    return;
                }

                state.items[productKey].count = +action.payload.count || 1;

                saveCart(state.items);
            },
        },
        clearCart: (state) => {
            state.items = {};
            state.itemsCount = 0;

            saveCart(state.items);
        },
    },
});

export const selectItems = state => state.cart.items ?? {};
export const selectItemsCount = state => state.cart.itemsCount ?? 0;
export const selectIsInCart = createSelector([selectItems, (_, id) => id], (items, id) => `${ITEM_KEY_PREFIX}${id}` in items);

export const { addItem, removeItem, updateItemCount, clearCart } = cartSlice.actions;

export default cartSlice.reducer;