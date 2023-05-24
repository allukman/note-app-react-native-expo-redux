import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import NoteBackground from "../note-background-color-selector/NoteBackground";
import { useFonts } from "expo-font";

const NotePostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  const [selectedItem, setSelectedItem] = useState(
    initialValues.backgroundColor
  );

  const [fontsLoaded] = useFonts({
    'Nunito-Regular': require('../../../assets/fonts/Nunito-Regular.ttf'),
    'Nunito-Bold': require('../../../assets/fonts/Nunito-Bold.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  // TEST

  const handleItemSelected = (item) => {
    setSelectedItem(item); // Mengubah state item yang dipilih
  };

  const onPressButton = () => {
    onSubmit(title, content, selectedItem);
  };

  return (
    <View style={{ flex: 1, backgroundColor: selectedItem ? selectedItem : initialValues.backgroundColor, justifyContent: 'space-between'}}>
      <View style={styles.containerTop}>
        <TextInput
          placeholder="Title"
          style={styles.inputTitle}
          value={title}
          onChangeText={(text) => setTitle(text)}
        />

        <TextInput
          placeholder="Description"
          multiline={true}
          numberOfLines={4}
          textAlignVertical="top"
          value={content}
          onChangeText={setContent}
          style={styles.inputDescription}
        />
      </View>
      <View style={styles.containerBot}>
        <NoteBackground onItemSelected={handleItemSelected} />
        <TouchableOpacity style={styles.button} onPress={onPressButton}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

NotePostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
    backgroundColor: "white",
  },
};

export default NotePostForm;

const styles = StyleSheet.create({
  containerTop: {
    margin: 16,
  },
  containerBot: {
    marginBottom: 16
  },
  inputTitle: {
    fontSize: 24,
    fontFamily: "Nunito-Bold",
    marginBottom: 24,
    marginRight: 24,
  },
  inputDescription: {
    fontSize: 18,
    color: "#666666",
    fontFamily: "Nunito-Regular",
    marginRight: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 24,
    marginRight: 24,
  },
  description: {
    fontSize: 18,
    color: "#666666",
    marginRight: 16,
  },
  button: {
    backgroundColor: "blue",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 16,
    marginHorizontal: 16,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
