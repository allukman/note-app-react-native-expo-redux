import React, { useState } from "react";
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from "react-native";

const NoteBackground = ({ onItemSelected }) => {
  const [selectedItem, setSelectedItem] = useState("");
  const data = [
    {
      id: "1",
      backgroundColor: "lightblue",
    },
    {
      id: "2",
      backgroundColor: "pink",
    },
    {
      id: "3",
      backgroundColor: "cyan",
    },
    {
      id: "4",
      backgroundColor: "yellow",
    },
    {
      id: "5",
      backgroundColor: "lightgrey",
    },
    {
      id: "6",
      backgroundColor: "lightgreen",
    },
    {
      id: "7",
      backgroundColor: "orange",
    },
    {
      id: "8",
      backgroundColor: "purple",
    },
  ];

  const handleItemPress = (item) => {
    setSelectedItem(item);
    onItemSelected(item);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.item, selectedItem === item.backgroundColor.toString() && styles.selectedItem, { backgroundColor: item.backgroundColor }]}
      onPress={() => handleItemPress(item.backgroundColor.toString())}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16
  },
  listContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    height: 40,
    width: 40,
    backgroundColor: "lightgray",
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 45,
    paddingVertical: 4,
    paddingHorizontal: 4,
    margin: 4,
  },
  selectedItem: {
    borderColor: 'black',
  },
  itemText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default NoteBackground;
