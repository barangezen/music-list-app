import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { LikedTracks } from "./src/screens/LikedTracks";
import { MainScreens } from "./src/screens/MainScreens/MainScreens";
import { PlayListDetail } from "./src/screens/PlayListDetail";
import { SignIn } from "./src/screens/SignIn";
import { SignUp } from "./src/screens/SignUp";
import { store } from "./src/store";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="PlayListDetail" component={PlayListDetail} />
            <Stack.Screen name="LikedTracks" component={LikedTracks} />
            <Stack.Screen name="MainScreens" component={MainScreens} />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
