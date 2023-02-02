import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import { Pokemon } from "../../../types";
import PokemonCard from "./PokemonCard";

interface PokemonListProps {
  pokemons: Pokemon[];
  navigateToPokemon: (pokemon: Pokemon) => void;
}
const PokemonList: React.FC<PokemonListProps> = ({
  pokemons,
  navigateToPokemon,
}) => {
  return (
    <View>
      <FlatList
        data={pokemons}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({ item }) => (
          <PokemonCard pokemon={item} navigateToPokemon={navigateToPokemon} />
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {},
});

export default PokemonList;
