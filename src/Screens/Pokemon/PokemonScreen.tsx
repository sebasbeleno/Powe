import React, { useEffect, useMemo, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Pokemon } from "../../types";
import { getPokemonColorFromType } from "../../utils";
import { Colors, Typography, Sizing, Outlines } from "../../styles";
import Tabs from "./Components/Tabs";
import About from "./Components/About";
import BaseStats from "./Components/BaseStats";
import Abilities from "./Components/Abilities";
import { HeaderBar } from "./Components/HeaderBar";
import { useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../../Redux/Slices/Favorites";
import { tabsDTO } from "./Components/Tabs";
import { useStore } from "react-redux";
import { RootState } from "../../Redux";

interface PokemonScreenProps {
  route: any;
  navigation: any;
}

const PokemonScreen = ({ route, navigation }: PokemonScreenProps) => {
  const dispatch = useDispatch();
  const store = useStore<RootState>();
  const { pokemon } = route.params as { pokemon: Pokemon };

  const [activeTab, setActiveTab] = useState(tabsDTO[0].key);
  const [favorite, setFavorite] = useState(false);

  const type = pokemon.types[0];
  const backgroundColor = getPokemonColorFromType(type);

  useEffect(() => {
    // Note: this is a bad implementation, the pokemon object should be immutable and must be a propertie of the store
    store.subscribe(() => {
      setFavorite(getIsOnFavorites());
    });

    setFavorite(getIsOnFavorites());
  }, []);

  const getIsOnFavorites = () => {
    const state = store.getState();
    const { favorites } = state;

    const isOnFavorites = favorites.favorites.find(
      (favorite) => favorite.id === pokemon.id
    );

    return !!isOnFavorites;
  };
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleFavorite = () => {
    if (favorite) {
      dispatch(removeFavorite(pokemon));
    } else {
      dispatch(addFavorite(pokemon));
    }
  };

  const RenderTypes = () => {
    return (
      <View style={{ flexDirection: "row" }}>
        {pokemon.types.map((type, index) => (
          <View key={index}>
            <Text
              style={{
                ...Typography.regular.x30,
                color: "#fff",
                textTransform: "capitalize",
                marginRight: Sizing.x5,
              }}
              key={type}
            >
              {type}
            </Text>
          </View>
        ))}
      </View>
    );
  };

  const Header = useMemo(() => {
    return (
      <View style={styles.header}>
        <Text style={styles.name}>{pokemon.name}</Text>
        <RenderTypes />
      </View>
    );
  }, [pokemon]);

  const Content = useMemo(() => {
    switch (activeTab) {
      case "about":
        return <About pokemon={pokemon} />;
      case "baseStats":
        return <BaseStats pokemon={pokemon} />;
      case "abilities":
        return <Abilities pokemon={pokemon} />;
      default:
        return <About pokemon={pokemon} />;
    }
  }, [activeTab]);

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <HeaderBar
        favorite={favorite}
        onFavorite={handleFavorite}
        onBack={handleBack}
      />
      {Header}
      <View style={styles.Content}>
        <Image
          style={styles.image}
          source={{
            uri: pokemon.image,
          }}
        />
        <Tabs currentTab={activeTab} setCurrentTab={handleTabChange} />
        {Content}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 200,
    padding: Sizing.x20,
  },
  name: {
    ...Typography.bold.x60,
    color: Colors.neutral.white,
    letterSpacing: 1,
  },
  image: {
    width: 200,
    height: 250,
    position: "absolute",
    right: Sizing.screen.width / 2 - 100,
    top: -200,
  },
  Content: {
    backgroundColor: Colors.neutral.white,
    flex: 1,
    borderTopLeftRadius: Outlines.borderRadius.large,
    borderTopRightRadius: Outlines.borderRadius.large,
    padding: Sizing.x20,
    paddingTop: Sizing.x50,
    zIndex: 0,
  },
});

export default PokemonScreen;
