import React, { useEffect, useState } from "react";
import { useStore, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../Redux";
import { Pokemon } from "../../types";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import CustomStatusBar from "../../Atoms/StatusBar";
import { Colors, Outlines, Typography } from "../../styles";
import { getPokemonColorFromType, getTeamStats } from "../../utils";
import TeamStats from "./Components/TeamStats";

const FavoritesScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const store = useStore<RootState>();

  const [favorites, setFavorites] = useState<Pokemon[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    store.subscribe(() => {
      getFavorites();
    });

    getFavorites();
  }, []);

  const getFavorites = () => {
    const state = store.getState();
    const { favorites: _favorites } = state;

    setFavorites(_favorites.favorites);

    setLoading(false);
  };

  if (loading) {
    return (
      <View>
        <Text>Cargando</Text>
      </View>
    );
  }

  const renderItem = ({ item }: { item: Pokemon; index: number }) => {
    const type = item.types[0];
    const backgroundColor = getPokemonColorFromType(type);

    return (
      <View style={[styles.pokemonCardContainer, { backgroundColor }]}>
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />
        <Text style={styles.pokemonName}>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <CustomStatusBar backgroundColor="#fff" />

      <FlatList
        data={favorites}
        renderItem={renderItem}
        numColumns={2}
        ListHeaderComponent={<TeamStats team={favorites} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pokemonCardContainer: {
    flex: 1,
    padding: 20,
    margin: 8,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Outlines.borderRadius.base,
  },
  image: {
    width: 100,
    height: 100,
  },
  pokemonName: {
    ...Typography.bold.x20,
    color: Colors.neutral.white,
  },
});

export default FavoritesScreen;
