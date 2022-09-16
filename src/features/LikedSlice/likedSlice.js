import { createSlice } from "@reduxjs/toolkit";

const likedSlice = createSlice({
  name: "likedTracks",
  initialState: {
    likedTracks: [],
  },
  reducers: {
    addLikedTrack: (state, action) => {
      const newLikedTracks = [...state.likedTracks];
      newLikedTracks.push(action.payload);
      return {
        likedTracks: newLikedTracks,
      };
    },
  },
});
export const { addLikedTrack } = likedSlice.actions;
export default likedSlice.reducer;
