import React, { useContext, useEffect } from "react";
import {
  View,
  FlatList,
} from "react-native";
import { Context } from "../context/BlogContext";
import NotedItem from "../components/noted-item/NotedItem"

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPost } = useContext(Context);

  useEffect(() => {
    getBlogPost();

    const listener = navigation.addListener('focus', ()=> {
      getBlogPost();
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.id}
        renderItem={({ item }) => (
          <NotedItem
            item={item}
            navigation={navigation}
            deleteBlogPost={deleteBlogPost}
          />
        )}
      />
    </View>
  );
};

export default IndexScreen;
