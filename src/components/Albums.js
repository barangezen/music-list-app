import React from "react";
import { useState } from "react";
import { ScrollView, Dimensions, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { Track } from "./Track";

const windowHeight = Dimensions.get("window").height;

export const Albums = ({ trackList }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {trackList?.albums?.items.map((track) => {
        return (
          <Track
            key={track.id}
            trackName={track.name}
            artistName={track.artists[0].name}
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
    paddingBottom: 100
  },
});
