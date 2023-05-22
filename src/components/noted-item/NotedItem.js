import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const NotedItem = ({ item, navigation, deleteNote }) => {
  return (
    <TouchableOpacity
      style={{ flex: 1 }}
      onPress={() =>
        navigation.navigate("Detail", { id: item.id, title: item.title, backgroundColor: item.backgroundColor })
      }
    >
      <View>
        <View style={[styles.card, {backgroundColor: item.backgroundColor}]}>
          <View style={styles.container}>
            <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
            <Text style={styles.description} numberOfLines={2}>{item.content}</Text>
          </View>

          <TouchableOpacity
            style={styles.trashButton}
            onPress={() => deleteNote(item.id)}
          >
            <FontAwesome5 style={styles.icon} name="trash" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    minHeight: 100,
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    margin: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    marginRight: 24,
  },
  description: {
    fontSize: 16,
    color: "#666666",
    marginRight: 16
  },
  icon: {
    fontSize: 24,
  },
  trashButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    padding: 8,
  },
});

export default NotedItem;

