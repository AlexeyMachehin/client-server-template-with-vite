import { createSlice } from '@reduxjs/toolkit';
import { errorSnackbarState } from './errorSnackbarState';

export const errorSnackbarSlice = createSlice({
  name: 'errorSnackbar',
  initialState: errorSnackbarState,
  reducers: {
    setError(state, action) {
      state.errorText = action.payload;
    },
    isOpenErrorSnackbar(state, action) {
      state.isOpen = action.payload;
    },
  },
});

export const { setError, isOpenErrorSnackbar } = errorSnackbarSlice.actions;
