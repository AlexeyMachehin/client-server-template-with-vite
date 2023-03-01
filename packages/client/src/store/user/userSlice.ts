import { setUser } from './thunk';
import { createSlice } from '@reduxjs/toolkit';
import { userState } from './userState';

export const userSlice = createSlice({
  name: 'user',
  initialState: userState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});
