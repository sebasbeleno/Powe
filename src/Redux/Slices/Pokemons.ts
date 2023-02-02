import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Pokemon } from "../../types";
import PokeApi from "../../Repository/PokeApi";

const initialState: {
  pokemons: Pokemon[];
  loading: "idle" | "pending" | "succeeded" | "failed";
} = {
  pokemons: [],
  loading: "idle",
};

export const getPokemons = createAsyncThunk(
  "@Pokemons/getPokemons",
  async (thunkAPI) => {
    const response = await PokeApi.getAllPokemons();
    return response;
  }
);

const pokemonsSlice = createSlice({
  name: "Pokemons",
  initialState,
  reducers: {
    setPokemons: (state, action: PayloadAction<any>) => {
      state.pokemons = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPokemons.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(getPokemons.fulfilled, (state, action) => {
      // update state
      state.pokemons = action.payload;
      state.loading = "succeeded";
    });
    builder.addDefaultCase((state, action) => {
      return state;
    });
  },
});

export const { setPokemons } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
