import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./Home";
import { Search } from "./Search";
import { Profile } from "./Profile";

export const MainScreens = () => {
  const loadIcons = (route) => {
    if (route.name === "Home") {
      return <Ionicons name="md-home-outline" size={30} color={"black"} />;
    } else if (route.name === "Search") {
      return <Ionicons name="search-outline" size={30} color={"black"} />;
    } else if (route.name === "Profile") {
      return <Ionicons name="settings-outline" size={30} color={"black"} />;
    }
  };
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: () => loadIcons(route),
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
