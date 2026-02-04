import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "video",
    initialState: {
        videoList: [],
    },
    reducers:{
        addVideos: (state,actions) => {
            state.videoList = actions.payload;
        },
        
    }
})

export const {addVideos} = videoSlice.actions;

export default videoSlice.reducer;