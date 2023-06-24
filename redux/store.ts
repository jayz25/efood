import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import { locationReducer } from "./locationSlice";

export const store = configureStore({
    reducer: {
        cartItems: cartReducer,
        location: locationReducer,
    },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch