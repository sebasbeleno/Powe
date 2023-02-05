import SearchBar from "./Components/SearchBar";
import React, { useCallback, useState, useEffect } from "react";
import PokemonList from "./Components/PokemonList";
import { View, Text } from "react-native";
import { useDispatch, useStore } from "react-redux";
import { Pokemon } from "../../types";
import { getPokemons } from "../../Redux/Slices/Pokemons";
import { AppDispatch, RootState } from "../../Redux";
import CustomStatusBar from "../../Atoms/StatusBar";
import { Colors } from "../../styles";

function HomeScreen({ navigation }) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch<AppDispatch>();
  const store = useStore<RootState>();

  useEffect(() => {
    const { pokemons: _storePokemons } = store.getState();

    store.subscribe(() => {
      const { pokemons } = store.getState();
      setPokemons(pokemons.pokemons);
    });

    if (_storePokemons.pokemons.length === 0) {
      console.log("fetching pokemons");
      dispatch(getPokemons());
    }

    setLoading(false);
    setPokemons(_storePokemons.pokemons);
  }, []);

  const onSearch = useCallback((searchText: string) => {
    // filter pokemons
    if (searchText === "") {
      setPokemons(store.getState().pokemons.pokemons);
      return;
    }

    const filteredPokemons = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setPokemons(filteredPokemons);
  }, []);

  const navigateToPokemon = useCallback((pokemon: Pokemon) => {
    navigation.navigate("Pokemon", { pokemon });
  }, []);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      <CustomStatusBar backgroundColor={Colors.neutral.white} />
      <SearchBar onSearch={onSearch} />
      <PokemonList pokemons={pokemons} navigateToPokemon={navigateToPokemon}/>
    </View>
  );
}

export default HomeScreen;
