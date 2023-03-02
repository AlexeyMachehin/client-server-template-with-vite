import { authService } from '@/service/AuthService';
import { selectorUser } from '@/store/user/selectors';
import { setUser } from '@/store/user/thunk';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { createSelector } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function AuthGuard() {
    // const dispatch = useAppDispatch();

  //   async function getUser() {
  //     const user = await authService.getUser();
  //     console.log(user)
  //     return user;
  //   }

  //   dispatch(setUser());

//   useEffect(() => {
//     dispatch(setUser());
//     console.log(1);
//   }, []);
  const user = useAppSelector(selectorUser);
  console.log(user);

  if (!user) {
    return <Navigate to={'login'} replace />;
  }

  return <Outlet />;
}
