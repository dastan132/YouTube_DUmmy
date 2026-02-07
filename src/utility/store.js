import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videoSlice from "./videoslice";
import searchSlice from "./searchSlice";
import suggestionSlice from "./suggestionSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    videos: videoSlice,
    search: searchSlice,
    suggestions: suggestionSlice,
  },
});

export default store;
