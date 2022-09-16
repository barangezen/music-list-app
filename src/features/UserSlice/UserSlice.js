import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: [],
  },
  reducers: {
    setActiveUser: (state, action) => {
      return {
        user: action.payload,
      };
    },
  },
});
export const {setActiveUser} = userSlice.actions;
export default userSlice.reducer;