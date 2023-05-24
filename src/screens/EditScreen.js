import React from "react";
import NotePostForm from "../components/note-post-form/NotePostForm";
import { Alert } from 'react-native'

import { useSelector, useDispatch } from "react-redux";
import { updateNote } from "../redux/features/note/noteSlice";

const EditScreen = ({ navigation, route }) => {
  const handleEdit = (id, title, content, backgroundColor) => {
    Alert.alert("Confirmation", "Are you sure you want to edit this?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Save",
        style: "destructive",
        onPress: () => {
          dispatch(
            updateNote(id, title, content, backgroundColor, () =>
              navigation.navigate("Detail", { id, title, backgroundColor })
            )
          );
        },
      },
    ]);
  };

  const dispatch = useDispatch();
  const notes = useSelector((state) => state.note);

  const id = route.params.id;
  const note = notes.find((note) => note.id === id);

  return (
    <NotePostForm
      initialValues={{
        title: note.title,
        content: note.content,
        backgroundColor: note.backgroundColor,
      }}
      onSubmit={(title, content, backgroundColor) => {
        handleEdit(id, title, content, backgroundColor);
      }}
    />
  );
};

export default EditScreen;
