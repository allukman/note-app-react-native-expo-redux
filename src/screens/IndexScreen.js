import React, { useContext, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
// import { Context } from "../context/BlogContext";
import NotedItem from "../components/noted-item/NotedItem";

import { useSelector, useDispatch } from "react-redux";
import { getNotes, deleteNote } from "../redux/features/note/noteSlice";

import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  // const { state, deleteNote, getNotes } = useContext(Context);

  const notes = useSelector((state) => state.note);
  const dispatch = useDispatch();

  useEffect(() => {
    // getNotes();

    dispatch(getNotes());

    const listener = navigation.addListener("focus", () => {
      // getNotes();
      dispatch(getNotes());
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View>
      <FlatList
        style={{ marginBottom: 16 }}
        data={notes}
        keyExtractor={(note) => note.id.toString()} // Convert to string
        renderItem={({ item }) => (
          <NotedItem
            item={item}
            navigation={navigation}
            deleteNote={() => dispatch(deleteNote(item.id))} // Pass as a reference
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
          navigation.navigate("Create");
        }}
      >
        <Feather name="plus" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default IndexScreen;
