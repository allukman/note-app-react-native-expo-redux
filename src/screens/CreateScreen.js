import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import NotePostForm from "../components/note-post-form/NotePostForm";

const CreateScreen = ({ navigation }) => {
  const { addNote } = useContext(BlogContext);

  return (
    <NotePostForm
      onSubmit={(title, content, backgroundColor) => {
        addNote(title, content, backgroundColor,() => navigation.navigate("Index"));
      }}
    />
  );
};

export default CreateScreen;

const styles = StyleSheet.create({});
