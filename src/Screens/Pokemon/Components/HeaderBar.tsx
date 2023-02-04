import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Colors, Typography } from "../../../styles";

interface HeaderProps {
  favorite: boolean;
  onFavorite: () => void;
  onBack: () => void;
}

export const HeaderBar = ({ favorite, onFavorite, onBack }: HeaderProps) => {
  return (
    <View style={styles.header}>
      <Pressable onPress={onBack}>
        <Text style={styles.title}>{'<-'}</Text>
      </Pressable>
      <Text style={styles.favorite} onPress={onFavorite}>
        {favorite ? "♥" : "♡"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  title: {
    ...Typography.bold.x40,
    color: Colors.neutral.white,
  },
  favorite: {
    ...Typography.bold.x40,
    color: Colors.neutral.white,
  },
});
