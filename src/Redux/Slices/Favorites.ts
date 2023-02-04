import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Pokemon } from "../../types";

const initialState: {
  favorites: Pokemon[];
  loading: "idle" | "pending" | "succeeded" | "failed";
} = {
  favorites: [],
  loading: "idle",
};

const favoritesSlice = createSlice({
  name: "Favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<any>) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<any>) => {
      state.favorites = state.favorites.filter(
        (pokemon) => pokemon.id !== action.payload.id
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
