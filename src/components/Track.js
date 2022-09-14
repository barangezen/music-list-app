import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Track = ({trackName, artistName}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.trackName} numberOfLines={1} ellipsizeMode="tail">{trackName}</Text>
      <Text style={styles.artistName} numberOfLines={1} ellipsizeMode="tail">{artistName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    marginBottom: 10,
  },
  trackName: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  artistName: {
    color: '#444444'
  }
});
