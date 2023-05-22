import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NotedItem = () => {
  return (
        <View style={styles.container}>
          <Text style={styles.title}>
            JUDUL INI AKAN JADI JUDUL YANG SANGAT PANJANG OKE
          </Text>
          <Text style={styles.description}>
            CONTENT lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet 
          </Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default NotedItem;
