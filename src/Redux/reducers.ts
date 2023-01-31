import Pokemons from "./Slices/Pokemons";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  pokemons: Pokemons,
});

export default rootReducer;
