import React, { useContext } from "react";
import {View, Text, StyleSheet } from 'react-native'
import { Context as BlogContext} from "../context/BlogContext";

const DetailScreen = ( { route } ) => {
    const { state } = useContext(BlogContext);

    const id = route.params.id
    const title = route.params.title

    console.log(title)

    const note = state.find((note) => note.id === id)


    return (
        <View>
            <Text>{note.title}</Text>
            <Text>{note.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default DetailScreen;