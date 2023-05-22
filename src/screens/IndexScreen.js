import React, { useContext, useEffect } from "react";
import {
  View,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Context } from "../context/BlogContext";
import NotedItem from "../components/noted-item/NotedItem"

import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, deleteNote, getNotes } = useContext(Context);

  useEffect(() => {
    getNotes();

    const listener = navigation.addListener('focus', ()=> {
      getNotes();
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View>
      <FlatList
        style={{marginBottom: 16}}
        data={state}
        keyExtractor={(note) => note.id}
        renderItem={({ item }) => (
          <NotedItem
            item={item}
            navigation={navigation}
            deleteNote={deleteNote}
          />
        )}
      />

<TouchableOpacity
        style={{
          position: "absolute",
          bottom: 30,
          right: 30,
          backgroundColor: "blue",
          borderRadius: 50,
          padding: 16,
        }}
        onPress={() => {
          navigation.navigate("Create")
        }}
      >
        <Feather name="plus" size={30} color="white"/>
      </TouchableOpacity>
    </View>
  );
};

export default IndexScreen;
