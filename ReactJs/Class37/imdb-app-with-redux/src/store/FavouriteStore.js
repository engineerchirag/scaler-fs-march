import { createSlice } from '@reduxjs/toolkit'
import { updateLocalStorage } from '../utils/localstorage';

const initialState = {};

export const favouriteSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    init: (state, data) => {
        state = data.payload;
    },
    onAdd: (state, data) => {
        const { payload } = data;
        state[payload.id] = payload;
        updateLocalStorage(state);
    },
    onDelete: (state, data) => {
        const { payload } = data;
        delete state[payload.id];
        updateLocalStorage(state);
    }
  },
})

export const { onAdd, onDelete, init } = favouriteSlice.actions;

export default favouriteSlice.reducer;