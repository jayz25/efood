import { createSlice } from '@reduxjs/toolkit';


export type CartItemState = {
    id: string,
    name: string,
    quantity: number,
    pricePerItem: number,
    restaurentId: string,
}

export type stateType = {
    cart: CartItemState[],
}

const initialState: stateType = {
    cart: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cart.find((item) => item.id === action.payload.id)
            if (itemInCart)
                itemInCart.quantity += 1
            else
                state.cart.push({
                    ...action.payload
                })
        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload.id)
            if (item)
                item.quantity += 1
        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload.id)
            if (item)
                item.quantity -= 1
        },
        removeItem: (state, action) => {
            const removedItemState = state.cart.filter((item) => item.id !== action.payload.id)
            state.cart = removedItemState
        }
    }
})

export const cartReducer = cartSlice.reducer;

export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeItem,
} = cartSlice.actions;