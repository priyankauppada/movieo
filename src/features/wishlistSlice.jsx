import { createSlice } from "@reduxjs/toolkit";

// Load wishlist from localStorage
const loadWishlistFromStorage = () => {
  const storedData = localStorage.getItem("wishlist");
  return storedData ? JSON.parse(storedData) : { movies: [], tvShows: [] };
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: loadWishlistFromStorage(),
  reducers: {
    addToWishlist: (state, action) => {
      const { type, item } = action.payload; // type: 'movie' or 'tv'
      if (type === "movie") {
        if(!state.movies.some(movie=>movie.id==item.id)){
            state.movies.push(item);
        }
        
      } else if (type === "tv") {
        const exists = state.tvShows.find((show) => show.id === item.id);
        if (!exists) {
          state.tvShows.push(item);
        }
      }
      localStorage.setItem("wishlist", JSON.stringify(state)); // Save to localStorage
    },
    removeFromWishlist: (state, action) => {
      const { type, id } = action.payload; // media: 'movie' or 'tv'
      if (type === "movie") {
        state.movies = state.movies.filter((movie) => movie.id !== id);
      } else if (type === "tv") {
        state.tvShows = state.tvShows.filter((show) => show.id !== id);
      }
      localStorage.setItem("wishlist", JSON.stringify(state)); // Save to localStorage
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
