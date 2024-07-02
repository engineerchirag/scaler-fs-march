import { configureStore } from '@reduxjs/toolkit'
import favouriteReducer from './FavouriteStore';

export const store = configureStore({
  reducer: {
    favourites: favouriteReducer
  },
})