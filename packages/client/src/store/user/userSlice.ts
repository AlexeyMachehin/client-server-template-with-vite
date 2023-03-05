import { getUser, logout } from './thunk';
import { createSlice } from '@reduxjs/toolkit';
import { userState } from './userState';

export const userSlice = createSlice({
  name: 'user',
  initialState: userState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUser.rejected, state => {
      state.isLoaded = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoaded = true;
    });
    builder.addCase(logout.fulfilled, state => {
      state.user = null;
    });
  },
});
