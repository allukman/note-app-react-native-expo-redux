import React from "react";
import { TouchableOpacity } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import IndexScreen from "./src/screens/IndexScreen";
import DetailScreen from "./src/screens/DetailScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

import { EvilIcons } from "@expo/vector-icons";

import store from './src/redux/store/index'
import { Provider } from "react-redux";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Index"
            component={IndexScreen}
            options={() => ({
              headerTitle: "List Note",
            })}
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={({ route, navigation }) => ({
              headerTitle: " ",
              headerStyle: { backgroundColor: route.params.backgroundColor },
              headerRight: () => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Edit", { id: route.params.id, title: route.params.title, backgroundColor: route.params.backgroundColor })
                  }
                >
                  <EvilIcons name="pencil" size={30} />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen 
            name="Edit" 
            component={EditScreen}
            options={({ route}) => ({
              headerTitle: "Edit Note",
              headerStyle: { backgroundColor: route.params.backgroundColor },
            })} />
          <Stack.Screen name="Create" component={CreateScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
