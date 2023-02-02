import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { Colors, Outlines, Sizing } from "../../../styles";

interface SearchBarProps {
  onSearch: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({onSearch}) => {
  const [searchText, setSearchText] = useState("");

  const onChangeText = (text: string) => {
    setSearchText(text);
  };

  // Debounce search text
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch(searchText);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchText]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        style={styles.textinput}
        value={searchText}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.neutral.white,
    padding: 10,
    // Add smooth shadow to the card
    shadowRadius: 2,
    elevation: 1,
  },
  textinput: {
    backgroundColor: Colors.neutral.s100,
    padding: Sizing.x10,
    borderRadius: Outlines.borderRadius.base,
  },
});

export default SearchBar;
