import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const select = (state: RootState) => state;

export const selectorErrorText = createSelector(
  [select],
  store => store.errorSnackbarReducer.errorText
);

export const selectorIsOpenErrorSnackbar = createSelector(
  [select],
  store => store.errorSnackbarReducer.isOpen
);
