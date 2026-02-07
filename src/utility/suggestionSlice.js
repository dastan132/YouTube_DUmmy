import { createSlice } from "@reduxjs/toolkit";

const suggestionSlice = createSlice({
    name: "suggestions",
    initialState: {
        suggestions: [],
        showSuggestions: false
    },
     reducers: {
    setSuggestions: (state, action) => {
      state.suggestions = action.payload;
    },
    clearSuggestions: (state) => {
      state.suggestions = [];
    },
    showSuggestionBox: (state) => {
      state.showSuggestions = true;
    },
    hideSuggestionBox: (state) => {
      state.showSuggestions = false;
    },
  },
});

export const {hideSuggestionBox,showSuggestionBox,clearSuggestions,setSuggestions} = suggestionSlice.actions
export default suggestionSlice.reducer