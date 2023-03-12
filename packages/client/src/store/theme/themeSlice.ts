import { createSlice } from '@reduxjs/toolkit';
import { themeState } from './themeState';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: themeState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
