import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import NoteBackground from "../note-background-color-selector/NoteBackground";

const NotePostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  const [selectedItem, setSelectedItem] = useState(initialValues.backgroundColor);

  const handleItemSelected = (item) => {
    setSelectedItem(item); // Mengubah state item yang dipilih
  };

  const onPressButton = () => {
    onSubmit(title, content, selectedItem)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title : </Text>
      <TextInput
        style={[styles.input, { height: 40 }]}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Content : </Text>
      <TextInput
        style={[styles.input, { height: 100 }]}
        value={content}
        multiline={true}
        numberOfLines={4}
        textAlignVertical="top"
        onChangeText={(text) => setContent(text)}
      />
      <NoteBackground onItemSelected={handleItemSelected}/>
      <TouchableOpacity style={styles.button} onPress={onPressButton}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
      {/* <Button title="Save" onPress={() => onSubmit(title, content, "lightblue")} /> */}
    </View>
  );
};

NotePostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
    backgroundColor: "lightblue",
  },
};

export default NotePostForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    marginHorizontal: 8,
  },
  button: {
    backgroundColor: "green",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    width: "100%",
    height: 100,
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 8,
  },
});
