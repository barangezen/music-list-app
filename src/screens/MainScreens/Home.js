import React, { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getSpotifyToken } from "../../api/spotify_token";
import { setTokenObj } from "../../features/TokenSlice/TokenSlice";
import { setActiveUser } from "../../features/UserSlice/UserSlice";
import { useGetsyncStorageValue } from "./hooks/getAsyncStorageValue";

export const Home = () => {
  const [spotifyToken, setSpotifyToken] = useState();
  const [playLists, setPlayLists] = useState();
  console.log("playLists", playLists);
  const asyncStorageValue = useGetsyncStorageValue("registeredUser");
  const dispatch = useDispatch();

  useEffect(() => {
    if (asyncStorageValue?.length > 0) {
      dispatch(setActiveUser(asyncStorageValue));
    }
    if (spotifyToken) {
      dispatch(setTokenObj(spotifyToken))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asyncStorageValue, spotifyToken]);

  useEffect(() => {
    getSpotifyToken().then((res) => {
      fetch(
        "https://api.spotify.com/v1/users/5zehz3orf3kps30zxcrxhgiqj/playlists",
        {
          headers: {
            Authorization: `Bearer ${res.access_token}`,
          },
        }
      )
        .then((playListResponse) => playListResponse.json())
        .then((playListResponse) => setPlayLists(playListResponse))
        .catch((err) => console.log("err", err));
      setSpotifyToken(res);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
