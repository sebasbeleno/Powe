import Pokemons from "./Slices/Pokemons";
import { combineReducers } from "@reduxjs/toolkit";
import Favorites from "./Slices/Favorites";

const rootReducer = combineReducers({
  pokemons: Pokemons,
  favorites: Favorites,
});

export default rootReducer;
