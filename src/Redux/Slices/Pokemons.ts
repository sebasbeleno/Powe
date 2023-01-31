import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "../../types";

const initialState: {
  pokemons: Pokemon[];
} = {
  pokemons: [],
};

const pokemonsSlice = createSlice({
  name: "Pokemons",
  initialState,
  reducers: {
    setPokemons: (state, action: PayloadAction<any>) => {
      state.pokemons = action.payload;
    },
  },
});

export const { setPokemons } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
