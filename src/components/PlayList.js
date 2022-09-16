import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import PatikaSpotiImg from "../assets/Patikaspoti.png";

export const Playlist = ({
  playListTitle,
  totalTracks,
  playListPoster,
  playListTracksUrl,
  navigation,
}) => {
  const themeColors = useSelector((state) => state.theme);
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("PlayListDetail", {
          playListTitle: playListTitle,
          totalTracks: totalTracks,
          playListPoster: playListPoster,
          playListTracksUrl: playListTracksUrl,
        })
      }
    >
      <View style={playListTitle ? styles.container(themeColors) : null}>
        <View style={styles.contentContainer}>
          <Image style={styles.poster} source={{ uri: playListPoster }} />
          <View style={styles.textContainer}>
            <Text style={styles.title(themeColors)} numberOfLines={1} ellipsizeMode="tail">
              {playListTitle}
            </Text>
            <Text style={styles.totalTrack(themeColors)}>{totalTracks ? `Total Tracks: ${totalTracks}` : ""}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: function (mode) {
    return {
      marginBottom: 10,
      backgroundColor: mode.theme.white,
      height: 80,
    };
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
  title: function (mode) {
    return {
      fontSize: 18,
      fontWeight: "bold",
      color: mode.theme.black
    };
  },
  totalTrack: function(mode) {
    return {
      color: mode.theme.black
    }
  }
});
