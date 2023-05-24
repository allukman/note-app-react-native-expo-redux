import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { useSelector } from "react-redux";

const DetailScreen = ({ route }) => {
  const notes = useSelector((state) => state.note)

  const [fontsLoaded] = useFonts({
    'Nunito-Regular': require('../../assets/fonts/Nunito-Regular.ttf'),
    'Nunito-Bold': require('../../assets/fonts/Nunito-Bold.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  const id = route.params.id;
  const note = notes.find((note) => note.id === id);

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
    fontSize: 30,
    marginBottom: 24,
    marginRight: 24,
    fontFamily: 'Nunito-Bold'
  },
  description: {
    fontSize: 18,
    color: "#666666",
    marginRight: 16,
    fontFamily: 'Nunito-Regular'
  },
});

export default DetailScreen;
