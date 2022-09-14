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
    <View style={styles.container}>
      <Image style={styles.poster} source={{ uri: playListPoster }} />
      <Text style={styles.title}>{playListTitle}</Text>
      <Text style={styles.totalTracks}>{`Total Tracks: ${totalTracks}`}</Text>
      <View style={styles.trackListContainer}>
        <Text style={styles.listTitle}>{"Tracks"}</Text>
        <TrackList trackList={tracks} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  poster: {
    width: 200,
    height: 200,
    marginLeft: 82,
    marginTop: 40,
  },
  title: {
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20
  },
  totalTracks: {
    paddingLeft: 10,
    marginBottom: 20
  },
  trackListContainer: {
    paddingLeft: 10,
  },
  listTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
