import React, { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getSpotifyToken } from "../../api/spotify_token";
import { Playlists } from "../../components/PlayLists";
import { setTokenObj } from "../../features/TokenSlice/TokenSlice";
import { setActiveUser } from "../../features/UserSlice/UserSlice";
import { useGetsyncStorageValue } from "../../hooks/getAsyncStorageValue";

export const Home = ({ navigation }) => {
  const [spotifyToken, setSpotifyToken] = useState();
  const [playLists, setPlayLists] = useState();
  const themeColors = useSelector((state) => state.theme);
  const asyncStorageValue = useGetsyncStorageValue("registeredUser");
  const dispatch = useDispatch();

  useEffect(() => {
    if (asyncStorageValue?.length > 0) {
      dispatch(setActiveUser(asyncStorageValue));
    }
    if (spotifyToken) {
      dispatch(setTokenObj(spotifyToken));
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
    <View style={styles.container(themeColors)}>
      <Text style={styles.title(themeColors)}>Baran's Playlists</Text>
      <View style={styles.playListsContainer(themeColors)}>
        <Playlists
          playLists={playLists ? playLists : []}
          navigation={navigation}
        />
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
      fontSize: 40,
      padding: 10,
      fontWeight: "bold",
      color: mode.theme.black,
    };
  },
  playListsContainer: function (mode) {
    return {
      padding: 10,
      backgroundColor: mode.theme.white,
    };
  },
});
