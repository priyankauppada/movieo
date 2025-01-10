import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../apis/movieApi";
import axios from "axios";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async ({media,category}) => {
    const apiKey = "ae898899c4b983fa80f5dcf782a35aff"; // Replace with your TMDB API key
    const url = `https://api.themoviedb.org/3/${media}/${category}?api_key=${apiKey}`;
      const res=await axios.get(url)
      const result=res.data.results
      return result
      
  
  }
);


const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    favorites: [],
    status: "idle",
    error: null,
    name:"pinky"
  },
  reducers: {
    addToFavorites: (state, action) => {
      const movie = action.payload;
      // Avoid duplicates
      if (!state.favorites.find((fav) => fav.id === movie.id)) {
        state.favorites.push(movie);
      }
    },
    removeFromFavorites: (state, action) => {
      const movieId = action.payload;
      state.favorites = state.favorites.filter((fav) => fav.id !== movieId);
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});


export const { addToFavorites, removeFromFavorites } = moviesSlice.actions;
export default moviesSlice.reducer;
