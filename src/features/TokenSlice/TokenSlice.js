import {createSlice} from '@reduxjs/toolkit';

const tokenSlice = createSlice({
  name: 'tokenObj',
  initialState: {
    tokenObj: null,
  },
  reducers: {
    setTokenObj: (state, action) => {
      return {
        tokenObj: action.payload,
      };
    },
  },
});
export const {setTokenObj} = tokenSlice.actions;
export default tokenSlice.reducer;