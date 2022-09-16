import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

export const Track = ({ trackName, artistName }) => {
  const themeColors = useSelector((state) => state.theme);
  return (
    <View style={styles.container(themeColors)}>
      <Text
        style={styles.trackName(themeColors)}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {trackName}
      </Text>
      <Text style={styles.artistName(themeColors)} numberOfLines={1} ellipsizeMode="tail">
        {artistName}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: function (mode) {
    return {
      height: 60,
      marginBottom: 10,
      backgroundColor: mode.theme.white,
    };
  },
  trackName: function (mode) {
    return {
      fontSize: 15,
      fontWeight: "bold",
      color: mode.theme.black,
    };
  },
  artistName: function (mode) {
    return {
      color: mode.theme.black,
    };
  },
});
