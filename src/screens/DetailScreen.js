import React, { useContext } from "react";
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Context as BlogContext} from "../context/BlogContext";
import { EvilIcons } from '@expo/vector-icons'

const DetailScreen = ( { navigation } ) => {
    const { state } = useContext(BlogContext);

    const id = navigation.getParam('id')

    const blogPost = state.find((blogPost) => blogPost.id === id)


    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
}

DetailScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
            <EvilIcons name="pencil" size={35} />
          </TouchableOpacity>
        ),
      };
}

const styles = StyleSheet.create({

})

export default DetailScreen;