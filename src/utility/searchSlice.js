import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchQuery: "",
    cacheResults: {},
  },
  reducers: {
    setSearchQuary: (state, action) => {
      state.searchQuery = action.payload;
    },
    setCacheResults: (state, action) => {
      state.cacheResults = {
        ...state.cacheResults,
        ...action.payload,
      };
    },
  },
});

export const { setSearchQuary, setCacheResults } = searchSlice.actions;
export default searchSlice.reducer;
