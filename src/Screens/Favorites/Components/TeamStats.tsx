import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Pokemon } from "../../../types";
import { getTeamStats } from "../../../utils";

interface TeamStatsProps {
  team: Pokemon[];
}

export interface TeamStats {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
}

const TeamStats: React.FC<TeamStatsProps> = ({ team }) => {
  const [stats, setStats] = useState<TeamStats>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    get(team);
  }, []);

  const get = (team: Pokemon[]) => {
    const _stats = getTeamStats(team);
    setStats(_stats);
    setLoading(false);
  };

  if (loading) {
    return (
      <View>
        <Text>Cargando</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.statContainer}>
        <Text>HP {stats.hp}</Text>
        <Text>Attack {stats.attack}</Text>
      </View>
      <View style={styles.statContainer}>
        <Text>Defense {stats.defense}</Text>
        <Text>Special Attack {stats.specialAttack}</Text>
      </View>
      <View style={styles.statContainer}>
        <Text>Special Defense {stats.specialDefense}</Text>
        <Text>Speed {stats.speed}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statContainer: {
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 8,
    margin: 8,
  }
});

export default TeamStats;
