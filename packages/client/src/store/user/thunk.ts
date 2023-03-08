import { ILoginRequestDto } from './../../service/types/Login/request/ILoginRequestDto';
import { authService } from './../../service/AuthService';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ISignupRequestDto } from '../../service/types/Signup/request/ISignupRequestDto';

export const getUser = createAsyncThunk('user/getUser', async () => {
  const response = await authService.getUser();
  return response;
});

export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout();
});

export const signup = createAsyncThunk(
  'auth/signup',
  async (userData: ISignupRequestDto) => {
    await authService.signup(userData);
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (dto: ILoginRequestDto) => {
    await authService.login(dto);
  }
);
