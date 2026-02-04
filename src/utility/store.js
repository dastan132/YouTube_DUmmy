import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videoSlice  from "./videoslice";

const store = configureStore({
  reducer: {
    app: appSlice,
    videos: videoSlice,
  },
});

export default store;
