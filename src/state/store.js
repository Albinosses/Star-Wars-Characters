import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filtersSlice";
import charactersReducer from "./charactersSlice";

export default configureStore({
  reducer: {
    filters: filtersReducer,
    characters: charactersReducer,
  },
});
