import React from "react";
import { ScrollView } from "react-native";
import { Playlist } from "./PlayList";

export const Playlists = ({playLists, navigation}) => {
  return (
    <ScrollView>
      {playLists.items?.map((playList) => {
       return <Playlist key={playList.id} playListTitle={playList.name} totalTracks={playList.tracks.total} playListPoster={playList.images[0].url} navigation={navigation} playListTracksUrl={playList.tracks.href} />
      })}
    </ScrollView>
  );
};
