import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    videoList: [],
    selectedCategoryId: "0",
  },
  reducers: {
    addVideos: (state, action) => {
      state.videoList = action.payload;
    },
    setCategoryId: (state, action) => {
      state.selectedCategoryId = action.payload;
    },
  },
});

export const { addVideos, setCategoryId } = videoSlice.actions;
export default videoSlice.reducer;
