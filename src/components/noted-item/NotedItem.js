import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const BlogItem = ({ item, navigation, deleteBlogPost }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Detail", { id: item.id, title: item.title })}>
      <View style={styles.row}>
        <Text style={styles.title}>{item.title} - {item.id}</Text>
        <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
          <Feather style={styles.icon} name="trash" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 4,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
  icon: {
    fontSize: 24,
  },
});

export default BlogItem;