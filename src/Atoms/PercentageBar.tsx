import React from "react";
import { View, StyleSheet } from "react-native";

interface PercentageBarProps {
  percentage: number;
  color: string;
}

const PercentageBar: React.FC<PercentageBarProps> = ({ percentage, color }) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.bar,
          { width: `${percentage}%`, backgroundColor: color },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 10,
    width: "100%",
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    overflow: "hidden",
  },
  bar: {
    height: "100%",
  },
});

export default PercentageBar;
