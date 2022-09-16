import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from "react";
import { addLikedTrack } from "../features/LikedSlice/likedSlice";
import { useEffect } from "react";
export const Track = ({ trackName, artistName }) => {
  const themeColors = useSelector((state) => state.theme);
  const [likedTrack, setLikedTrack] = useState({ track: "", artist: "" });
  const [isLiked, setIsLiked] = useState(false);
  const dispatch = useDispatch();
  const handleLike = async () => {
    setIsLiked(!isLiked);
    setLikedTrack({ ...likedTrack, track: trackName, artist: artistName });
  };
  useEffect(() => {
    if (isLiked) {
      dispatch(addLikedTrack(likedTrack));
    }
  }, [likedTrack]);
  return (
    <View style={styles.container(themeColors)}>
      <View style={styles.contentContainer}>
        <View>
          <Text
            style={styles.trackName(themeColors)}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {trackName}
          </Text>
          <Text
            style={styles.artistName(themeColors)}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {artistName}
          </Text>
        </View>
        <Ionicons
          style={styles.likeIcon}
          name="heart"
          size={30}
          color={isLiked ? "red" : themeColors.theme.black}
          onPress={handleLike}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: function (mode) {
    return {
      height: 60,
      marginBottom: 10,
      backgroundColor: mode.theme.white,
    };
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  trackName: function (mode) {
    return {
      fontSize: 15,
      fontWeight: "bold",
      color: mode.theme.black,
    };
  },
  artistName: function (mode) {
    return {
      color: mode.theme.black,
    };
  },
  likeIcon: {
    paddingRight: 10,
  },
});
