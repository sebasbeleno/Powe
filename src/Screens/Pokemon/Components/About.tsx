import React from "react";
import { View, StyleSheet } from "react-native";
import { Pokemon } from "../../../types";
import InformationListItem from "../../../Atoms/InformationListItem";
import { Sizing, Typography, Colors } from "../../../styles";

interface AboutProps {
  pokemon: Pokemon;
}

const About: React.FC<AboutProps> = ({ pokemon }) => {
  return (
    <View style={styles.container}>
      <InformationListItem title="Height" value={pokemon.height + " cm"} />
      <InformationListItem title="Weight" value={pokemon.weight + " kg"} />
      <InformationListItem title="Species" value={pokemon.species} />
      <InformationListItem title="Gender" value={pokemon.gender} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Sizing.x10,
  },
  title: {
    ...Typography.bold.x40,
    color: Colors.neutral.s500,
  },
});

export default About;
