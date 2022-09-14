import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

export const Search = () => {
  const tokenData = useSelector((state) => state.tokenObj);
  console.log("tokenData", tokenData);
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
};
