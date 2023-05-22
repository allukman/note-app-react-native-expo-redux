import React from "react";
import { TouchableOpacity } from "react-native"

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import IndexScreen from "./src/screens/IndexScreen";
import DetailScreen from "./src/screens/DetailScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

import { Provider } from "./src/context/BlogContext";

import { Feather, EvilIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();

export default function App() {
  return(
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Index" 
            component={IndexScreen}
            options={({navigation}) => ({
              headerTitle: "List Note",
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                  <Feather name="plus" size={30}/>
                </TouchableOpacity>
              )
            })}/>
            <Stack.Screen 
            name="Detail" 
            component={DetailScreen}
            options={({route, navigation}) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Edit", { id: route.params.id})}>
                  <EvilIcons name="pencil" size={30}/>
                </TouchableOpacity>
              )
            })}/>
          <Stack.Screen name="Create" component={CreateScreen}/>
          <Stack.Screen name="Edit" component={EditScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

// const navigator = createStackNavigator(
//   {
//     Index: IndexScreen,
//     Detail: DetailScreen,
//     Create: CreateScreen,
//     Edit: EditScreen
//   },
//   {
//     initialRouteName: "Index",
//     defaultNavigationOptions: {
//       title: "Blogs",
//     },
//   }
// );

// const App = createAppContainer(navigator);

// export default () => {
//   return (
//     <BlogProvider>
//       <App />
//     </BlogProvider>
//   );
// };
