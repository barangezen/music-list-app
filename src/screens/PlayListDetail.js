import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { TrackList } from "../components/TrackList";

export const PlayListDetail = ({ route }) => {
  const { playListTitle, totalTracks, playListPoster, playListTracksUrl } =
    route.params;
  const [tracks, setTracks] = useState();
  const themeColors = useSelector((state) => state.theme);
  const accessToken = useSelector((state) => state.tokenObj);
  useEffect(() => {
    fetch(playListTracksUrl, {
      headers: {
        Authorization: `Bearer ${accessToken.tokenObj.access_token}`,
      },
    })
      .then((trackListResponse) => trackListResponse.json())
      .then((trackListResponse) => setTracks(trackListResponse));
  }, []);
  return (
    <View style={styles.container(themeColors)}>
      <Image style={styles.poster} source={{ uri: playListPoster }} />
      <Text style={styles.title(themeColors)}>{playListTitle}</Text>
      <Text
        style={styles.totalTracks(themeColors)}
      >{`Total Tracks: ${totalTracks}`}</Text>
      <View style={styles.trackListContainer(themeColors)}>
        <Text style={styles.listTitle(themeColors)}>{"Tracks"}</Text>
        <TrackList trackList={tracks} />
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
  poster: {
    width: 200,
    height: 200,
    marginLeft: 82,
    marginTop: 40,
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
  totalTracks: function (mode) {
    return {
      paddingLeft: 10,
      marginBottom: 20,
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
      color: mode.theme.black
    };
  },
});
