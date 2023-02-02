import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import { Pokemon } from "../../../types";
import PokemonCard from "./PokemonCard";

interface PokemonListProps {
  pokemons: Pokemon[];
}
const PokemonList: React.FC<PokemonListProps> = ({ pokemons }) => {
  return (
    <View>
      <FlatList
        data={pokemons}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {},
});

export default PokemonList;
