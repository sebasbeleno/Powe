import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
interface TabsProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export const tabsDTO = [
  {
    name: "About",
    key: "about",
  },
  {
    name: "Base Stats",
    key: "baseStats",
  },
  {
    name: "Abilities",
    key: "abilities",
  },
];

const Tabs: React.FC<TabsProps> = ({ currentTab, setCurrentTab }) => {
  return (
    <View style={styles.container}>
      {tabsDTO.map((tab, index) => {
        const isActive = tab.key === currentTab;
        return (
          <Pressable
            onPress={() => {
              setCurrentTab(tab.key);
            }}
            key={index}
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
