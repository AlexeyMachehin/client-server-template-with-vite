import { themeService } from '@/service/ThemeService';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const saveTheme = createAsyncThunk(
  'savetheme',
  async (theme: string) => {
    const response = await themeService.saveTheme(theme);
    return response;
  }
);
