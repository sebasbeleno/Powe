import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { tabsDTO } from "../PokemonScreen";

interface TabsProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ currentTab, setCurrentTab }) => {
  return (
    <View style={styles.container}>
      {tabsDTO.map((tab) => {
        const isActive = tab.key === currentTab;
        return (
          <Pressable
            onPress={() => {
              setCurrentTab(tab.key);
            }}
          >
            <View
              style={isActive ? styles.activeTabContainer : styles.tabContainer}
              key={tab.key}
            >
              <Text>{tab.name}</Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  tabContainer: {
    padding: 10,
  },
  activeTabContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },
});

export default Tabs;
