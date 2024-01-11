import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    movies: null,
    name: null,
    gender: null,
    mass: {
      min: null,
      max: null,
    },
  },
  reducers: {
    changeMovies: (state, action) => {
      state.movies = action.payload;
    },
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeGender: (state, action) => {
      state.gender = action.payload;
    },
    changeMinMass: (state, action) => {
      state.mass.min = action.payload;
    },
    changeMaxMass: (state, action) => {
      state.mass.max = action.payload;
    },
    clearFilters: (state) => {
      state.movies = null;
      state.name = null;
      state.gender = null;
      state.mass.min = null;
      state.mass.max = null;
    },
  },
});

export const {
  changeMovies,
  changeName,
  changeGender,
  changeMinMass,
  changeMaxMass,
  clearFilters,
} = filtersSlice.actions;
export default filtersSlice.reducer;
