import React from "react";
import { StyleSheet } from "react-native";
import NotePostForm from "../components/note-post-form/NotePostForm";

import { useDispatch } from "react-redux";
import { addNote } from "../redux/features/note/noteSlice";

const CreateScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <NotePostForm
      onSubmit={(title, content, backgroundColor) => {
        dispatch(addNote(title, content, backgroundColor, () => navigation.navigate("Index")));
      }}
    />
  );
};

export default CreateScreen;

const styles = StyleSheet.create({});
