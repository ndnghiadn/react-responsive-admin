import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDisplay: true
}

export const displaySidebarSlice = createSlice({
    name: 'displaySidebarSlice',
    initialState,
    reducers: {
        toggle: (state, action) => {
            state.isDisplay = action.payload;
        }
    }
})

export const { toggle } = displaySidebarSlice.actions;
export default displaySidebarSlice.reducer;