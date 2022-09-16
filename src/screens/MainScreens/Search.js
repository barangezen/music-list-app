import React, { useState } from "react";
import { useEffect } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { useSelector } from "react-redux";
import { Albums } from "../../components/Albums";
import { Tracks } from "../../components/Tracks";

export const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedType, setSelectedType] = useState("track");
  console.log("selectedType", selectedType);
  const [trackAlbumArtist, setTrackAlbumArtist] = useState("");
  /* console.log("trackAlbumArtist", trackAlbumArtist.tracks.items); */
  const tokenData = useSelector((state) => state.tokenObj);
  console.log("tokenData", tokenData);
  const displayContent = () => {
    if (selectedType === "track") {
      return <Tracks trackList={trackAlbumArtist} />;
    } else if (selectedType === "album") {
      return <Albums trackList={trackAlbumArtist} />;
    }
  };
  useEffect(() => {
    fetch(
      `https://api.spotify.com/v1/search?q=${searchInput}&type=${selectedType}`,
      {
        headers: {
          Authorization: `Bearer ${tokenData.tokenObj.access_token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => setTrackAlbumArtist(res));
  }, [searchInput, selectedType]);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchMovie}
        placeholder="Search track..."
        onChangeText={(text) => {
          setSearchInput(text);
        }}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Track"
          color={selectedType === "track" ? "" : "grey"}
          onPress={() => setSelectedType("track")}
        />
        <Button
          title="Album"
          color={selectedType === "album" ? "" : "grey"}
          onPress={() => setSelectedType("album")}
        />
      </View>
      <View style={styles.contentContainer}>{displayContent()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Styles in component because we use global state data.
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  searchMovie: {
    marginTop: 20,
    height: 50,
    backgroundColor: "rgba(55, 54, 54, 0.5)",
  },
  buttonContainer: {
    flexDirection: "row",
    width: 200,
    paddingTop: 10,
    justifyContent: "flex-start",
  },
  contentContainer: {
    padding: 10,
  },
});
