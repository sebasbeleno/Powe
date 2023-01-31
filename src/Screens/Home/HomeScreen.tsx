import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useDispatch, useStore } from "react-redux";
import { getPokemons } from "../../Redux/Slices/Pokemons";
import { AppDispatch, RootState } from "../../Redux";
function HomeScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const store = useStore<RootState>();

  useEffect(() => {
    const { pokemons } = store.getState();

    if (pokemons.pokemons.length === 0) {
      dispatch(getPokemons());
    }
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default HomeScreen;
