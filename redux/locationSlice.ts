import { createSlice } from "@reduxjs/toolkit"


export type locationState = {
    location: string,
}

const initialState: locationState = {
    location: "Mumbai"
}

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setLocation: (state, action) => {
            state.location = action.payload
        }
    }
});

export const locationReducer = locationSlice.reducer;

export const {
    setLocation
} = locationSlice.actions;