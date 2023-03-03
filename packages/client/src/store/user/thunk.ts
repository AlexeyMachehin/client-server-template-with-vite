import { authService } from './../../service/AuthService';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const setUser = createAsyncThunk('user/setUser', async () => {
  const response = await authService.getUser();
  return response;
});
