import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

const DetailScreen = ({ route }) => {
  const { state } = useContext(BlogContext);

  const id = route.params.id;
  const note = state.find((note) => note.id === id);
  return (
    <View style={{ flex: 1, backgroundColor: note.backgroundColor }}>
      <View style={styles.container}>
        <Text style={styles.title}>{note.title}</Text>
        <Text style={styles.description}>{note.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    marginRight: 24,
  },
  description: {
    fontSize: 18,
    color: "#666666",
    marginRight: 16,
  },
});

export default DetailScreen;
