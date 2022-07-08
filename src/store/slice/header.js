import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const toggleHeaderSlice = createSlice({
  name: "header",
  initialState: true,
  reducers: {
    toggleHeader(state, action) {
      return !state;
    },
  },
});
const { actions, reducer } = toggleHeaderSlice;
export const {toggleHeader} = actions;

export default reducer;
