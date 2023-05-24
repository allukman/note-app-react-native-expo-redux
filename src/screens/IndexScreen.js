import React, { useEffect } from "react";
import { View, FlatList, TouchableOpacity, Alert } from "react-native";
import NotedItem from "../components/noted-item/NotedItem";

import { useSelector, useDispatch } from "react-redux";
import { getNotes, deleteNote } from "../redux/features/note/noteSlice";

import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {

  const notes = useSelector((state) => state.note);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes());

    const listener = navigation.addListener("focus", () => {
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
        keyExtractor={(note) => note.id.toString()}
        renderItem={({ item }) => (
          <NotedItem
            item={item}
            navigation={navigation}
            deleteNote={() => dispatch(deleteNote(item.id))}
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
