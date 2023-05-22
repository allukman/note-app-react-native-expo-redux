import React, { useContext } from "react";
import {View, Text, StyleSheet } from 'react-native'
import { Context as BlogContext} from "../context/BlogContext";

const DetailScreen = ( { route } ) => {
    const { state } = useContext(BlogContext);

    const id = route.params.id
    const title = route.params.title

    console.log(title)

    const blogPost = state.find((blogPost) => blogPost.id === id)


    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default DetailScreen;