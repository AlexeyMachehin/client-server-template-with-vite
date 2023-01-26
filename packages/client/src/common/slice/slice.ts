import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUser {
  name: string;
  surname: string;
}

interface ICommonSliceState {
  user: null | IUser;
}

export const commonSlice = createSlice({
  name: 'common',
  initialState: {
    user: null,
  } as ICommonSliceState,
  reducers: {
    setUser: (draft, { payload }: PayloadAction<IUser>) => {
      draft.user = payload;
    },
  },
});

export const { setUser } = commonSlice.actions;
