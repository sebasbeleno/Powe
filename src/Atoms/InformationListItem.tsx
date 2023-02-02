import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Colors, Sizing, Typography } from "../styles";

interface InformationListItemProps {
  title: string;
  value: string;
}

const InformationListItem: React.FC<InformationListItemProps> = ({
  title,
  value,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Sizing.x10,
  },
  title: {
    ...Typography.regular.x20,
    color: Colors.neutral.s400,
  },
  value: {
    ...Typography.regular.x20,
    color: Colors.neutral.s800,
  },
});

export default InformationListItem;
