import React from "react";
import { useState } from "react";
import { ScrollView, Dimensions, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { Track } from "./Track";

const windowHeight = Dimensions.get("window").height;

export const TrackList = ({ trackList }) => {
  console.log("track list", trackList);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {trackList?.items.map((track) => {
        return (
          <Track
            key={track.track.id}
            trackName={track.track.name}
            artistName={track.track.artists[0].name}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: 10,
  },
});
