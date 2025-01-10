import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/moviesSlice";
import wishlistReducer from '../features/wishlistSlice'
const store = configureStore({
  reducer: {
    movies: moviesReducer,
    wishlist:wishlistReducer,
  },
});

export default store;
