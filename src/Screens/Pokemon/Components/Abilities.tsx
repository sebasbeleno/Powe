import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Pokemon } from "../../../types";
import { Typography, Colors } from "../../../styles";

interface BaseStatsProps {
  pokemon: Pokemon;
}

const Abilities: React.FC<BaseStatsProps> = ({ pokemon }) => {
  return (
    <View>
      {pokemon.abilities.map((ability) => {
        return (
          <View key={ability} style={styles.itemContainer}>
            <View>
              <Text style={styles.itemName}>{ability}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    padding: 10,
  },
  itemName: {
    ...Typography.regular.x30,
    color: Colors.neutral.s600,
    textTransform: "capitalize",
  },
});

export default Abilities;
