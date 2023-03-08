import { getUser, logout, login } from './thunk';
import { createSlice } from '@reduxjs/toolkit';
import { userState } from './userState';

export const userSlice = createSlice({
  name: 'user',
  initialState: userState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(logout.fulfilled, state => {
      state.user = null;
    });
  },
});
