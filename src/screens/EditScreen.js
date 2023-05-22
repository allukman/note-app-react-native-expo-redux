import React, { useContext } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import NotePostForm from "../components/note-post-form/NotePostForm";

const EditScreen = ({ navigation, route }) => {
  const id = route.params.id;
  const { state, editNote } = useContext(BlogContext);

  const note = state.find((note) => note.id === id);

  return (
    <NotePostForm
      initialValues={{ title: note.title, content: note.content, backgroundColor: note.backgroundColor }}
      onSubmit={(title, content, backgroundColor) => {
        editNote(id, title, content, backgroundColor, () => navigation.pop());
      }}
    />
  );

  // return (
  //   <View style={{ flex: 1, backgroundColor: note.backgroundColor }}>
  //     <View style={styles.container}>
  //       <TextInput placeholder="Title" style={styles.inputTitle} />
  //       <TextInput
  //         placeholder="Description"
  //         multiline={true}
  //         numberOfLines={4}
  //         textAlignVertical="top"
  //         style={styles.inputDescription}
  //       />
  //     </View>
  //   </View>
  // );
};

export default EditScreen;

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  inputTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    marginRight: 24,
  },
  inputDescription: {
    fontSize: 18,
    color: "#666666",
    marginRight: 16,
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
