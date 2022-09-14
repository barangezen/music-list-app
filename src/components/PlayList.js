import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import PatikaSpotiImg from "../assets/Patikaspoti.png";

export const Playlist = ({ playListTitle, totalTracks, playListPoster, playListTracksUrl, navigation }) => {
  return (
    <Pressable onPress={() => navigation.navigate("PlayListDetail", {
        playListTitle: playListTitle,
        totalTracks: totalTracks,
        playListPoster: playListPoster,
        playListTracksUrl: playListTracksUrl
    })}>
      <View style={playListTitle ? styles.container : null}>
        <View style={styles.contentContainer}>
          <Image style={styles.poster} source={{ uri: playListPoster }} />
          <View style={styles.textContainer}>
            <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
              {playListTitle}
            </Text>
            <Text>{totalTracks ? `Total Tracks: ${totalTracks}` : ""}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    backgroundColor: "white",
    height: 80,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
  },
  poster: {
    height: 80,
    width: 80,
  },
  textContainer: {
    paddingLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
