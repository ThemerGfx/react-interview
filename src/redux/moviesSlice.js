import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { movies$ } from "../data/movies";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await movies$;
  return response;
});

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    status: "idle",
    error: null,
    filters: [],
    currentPage: 1,
    itemsPerPage: 4,
  },
  reducers: {
    deleteMovie: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    },
    toggleLike: (state, action) => {
      const movie = state.movies.find((movie) => movie.id === action.payload);
      if (movie) {
        movie.likes += 1;
        movie.dislikes -= 1;
      }
    },
    toggleDislike: (state, action) => {
      const movie = state.movies.find((movie) => movie.id === action.payload);
      if (movie) {
        movie.likes -= 1;
        movie.dislikes += 1;
      }
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action) => {
      state.itemsPerPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {
  deleteMovie,
  toggleLike,
  toggleDislike,
  setFilters,
  setPage,
  setItemsPerPage,
} = moviesSlice.actions;

export default moviesSlice.reducer;
