import React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { Pokemon } from "../../../types";
import PercentageBar from "../../../Atoms/PercentageBar";
import { getPokemonColorFromType } from "../../../utils";
import { Sizing, Colors, Typography } from "../../../styles";

interface BaseStatsProps {
  pokemon: Pokemon;
}

const BaseStats: React.FC<BaseStatsProps> = ({ pokemon }) => {
  return (
    <View>
      {pokemon.stats.map((stat) => {
        return (
          <View key={stat.name} style={styles.itemContainer}>
            <View style={{ flex: 1 }}>
              <Text style={styles.itemName}>{stat.name}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.itemValue}>{stat.value}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <PercentageBar
                percentage={stat.value}
                color={getPokemonColorFromType(pokemon.types[0])}
              />
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
    marginBottom: Sizing.x10,
    padding: Sizing.x10,
  },
  itemName: {
    ...Typography.regular.x20,
    color: Colors.neutral.s400,
    textTransform: "capitalize",
  },
  itemValue: {
    ...Typography.regular.x20,
    color: Colors.neutral.s800,
  },
});

export default BaseStats;
