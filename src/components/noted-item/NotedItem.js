import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const NotedItem = ({ item, navigation, deleteBlogPost }) => {
  return (
    <TouchableOpacity
      style={{ flex: 1 }}
      onPress={() =>
        navigation.navigate("Detail", { id: item.id, title: item.title })
      }
    >
      <View style={styles.row}>
        <View style={styles.card}>
          <View style={styles.container}>
            <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
            <Text style={styles.description} numberOfLines={2}>{item.content}</Text>
          </View>

          <TouchableOpacity
            style={styles.trashButton}
            onPress={() => deleteBlogPost(item.id)}
          >
            <Feather style={styles.icon} name="trash" />
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
    backgroundColor: "#ffffff",
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
    marginRight: 16
  },
  description: {
    fontSize: 16,
    color: "#666666",
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

// const NotedItem = ({ item, navigation, deleteBlogPost }) => {
//     return (
//       <View style={styles.card}>
//         <Text style={styles.title}>Card Title</Text>
//         <Text style={styles.description}>Card Description</Text>
//       </View>
//     );
//   };

//   const styles = StyleSheet.create({
//     card: {
//       backgroundColor: "#ffffff",
//       borderRadius: 8,
//       padding: 16,
//       shadowColor: "#000000",
//       shadowOpacity: 0.2,
//       shadowOffset: {
//         width: 0,
//         height: 2,
//       },
//       shadowRadius: 4,
//       elevation: 4,
//       margin: 8
//     },
//     title: {
//       fontSize: 18,
//       fontWeight: "bold",
//       marginBottom: 8,
//     },
//     description: {
//       fontSize: 16,
//       color: "#666666",
//     },
//   });

//   export default NotedItem;
