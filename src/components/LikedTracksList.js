import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { Track } from "./Track";

export const LikedTracksList = ({ trackList }) => {
  const themeColors = useSelector((state) => state.theme);
  return (
    <ScrollView contentContainerStyle={styles.container(themeColors)}>
      {trackList?.likedTracks.map((track, index) => {
        return (
          <Track
            key={index}
            trackName={track?.track}
            artistName={track?.artist}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: function (mode) {
    return {
      flexGrow: 1,
      marginTop: 10,
      backgroundColor: mode.theme.white,
    };
  },
});
