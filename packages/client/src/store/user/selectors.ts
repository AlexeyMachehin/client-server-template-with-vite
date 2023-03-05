import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const select = (state: RootState) => state;

export const selectorUser = createSelector(
  [select],
  store => store.userReducer.user
);

export const selectorIsLoading = createSelector(
  [select],
  store => store.userReducer.isLoaded
);
