import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { LikedTracksList } from "../components/LikedTracksList";

export const LikedTracks = () => {
  const likedTracks = useSelector((state) => state.likedTracks);
  const themeColors = useSelector((state) => state.theme);
  return (
    <View style={styles.container(themeColors)}>
      <Text style={styles.title(themeColors)}>{"Liked Tracks"}</Text>
      <View style={styles.trackListContainer(themeColors)}>
        <View style={styles.trackList}>
          <LikedTracksList trackList={likedTracks} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: function (mode) {
    return {
      flex: 1,
      backgroundColor: mode.theme.white,
    };
  },

  title: function (mode) {
    return {
      paddingLeft: 10,
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 20,
      color: mode.theme.black,
    };
  },

  trackListContainer: function (mode) {
    return {
      paddingLeft: 10,
      backgroundColor: mode.theme.white,
    };
  },
  listTitle: function (mode) {
    return {
      fontSize: 20,
      fontWeight: "bold",
      color: mode.theme.black,
    };
  },
  trackList: {
    paddingTop: 20,
  },
});
