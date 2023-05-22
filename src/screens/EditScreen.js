import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import NotePostForm from "../components/note-post-form/NotePostForm";

const EditScreen = ({ navigation, route }) => {
  const id = route.params.id;
  const { state, editNote } = useContext(BlogContext);
  
  const note = state.find((note) => note.id === id);

  return (
    <NotePostForm
      initialValues={{ title: note.title, content: note.content }}
      onSubmit={(title, content, backgroundColor) => {
        editNote(id, title, content, backgroundColor, () => navigation.pop());
      }}
    />
  );
};

export default EditScreen;

const styles = StyleSheet.create({});
