import {createSlice} from '@reduxjs/toolkit';
import {lightTheme} from '../../data/theme';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: lightTheme,
  },
  reducers: {
    setTheme: (state, action) => {
      return {
        theme: action.payload,
      };
    },
  },
});
export const {setTheme} = themeSlice.actions;
export default themeSlice.reducer;