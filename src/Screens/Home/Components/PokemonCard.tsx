import React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { Pokemon } from "../../../types";
import { getPokemonColorFromType } from "../../../utils";
import { Outlines, Sizing, Typography } from "../../../styles";

interface PokemonCardProps {
  pokemon: Pokemon;
  navigateToPokemon: (pokemon: Pokemon) => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon,
  navigateToPokemon,
}) => {
  const type = pokemon.types[0];
  const backgroundColor = getPokemonColorFromType(type);

  const RenderTypes = () => {
    return (
      <View style={{ flexDirection: "row" }}>
        {pokemon.types.map((type) => (
          <Text
            style={{
              ...Typography.regular.x20,
              color: "#fff",
              textTransform: "capitalize",
              marginRight: Sizing.x5,
            }}
            key={type}
          >
            {type}
          </Text>
        ))}
      </View>
    );
  };

  return (
    <Pressable
      onPress={() => {
        navigateToPokemon(pokemon);
      }}
    >
      <View style={[styles.container, { backgroundColor }]}>
        <View>
          <Text style={styles.name}>{pokemon.name}</Text>
          <RenderTypes />
        </View>
        <Image source={{ uri: pokemon.image }} style={styles.image} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Sizing.x10,
    margin: Sizing.x10,
    borderRadius: Outlines.borderRadius.base,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    backgroundColor: "#fff",
    height: 8 * 16,
    // Add smooth shadow to the card
    shadowRadius: 2,
    elevation: 1,
    justifyContent: "center",
  },
  image: {
    width: "110%",
    height: "150%",
    position: "absolute",
    resizeMode: "center",
    bottom: 0,
    left: 100,
    // add shadow to the image
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2,
    elevation: 1,
  },
  name: {
    textTransform: "capitalize",
    ...Typography.bold.x40,
    color: "#fff",
    letterSpacing: 1,
  },
});

export default PokemonCard;
