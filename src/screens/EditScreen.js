import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import NotePostForm from "../components/note-post-form/NotePostForm";

const EditScreen = ({ navigation, route }) => {
  const id = route.params.id;
  const { state, editNote } = useContext(BlogContext);
  
  const note = state.find((note) => note.id === id);

  // return (
  //   <NotePostForm
  //     initialValues={{ title: note.title, content: note.content, backgroundColor: note.backgroundColor }}
  //     onSubmit={(title, content, backgroundColor) => {
  //       editNote(id, title, content, backgroundColor, () => navigation.pop());
  //     }}
  //   />
  // );
  return (
    <View style={{ flex: 1, backgroundColor: note.backgroundColor }}>
      <View style={styles.container}>
        <Text style={styles.title}>{note.title}</Text>
        <Text style={styles.description}>{note.content}</Text>
      </View>
    </View>
  )
};

export default EditScreen;

const styles = StyleSheet.create({});
