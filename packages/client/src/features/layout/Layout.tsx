import { getUser } from '../../../src/store/user/thunk';
import { useAppDispatch } from '../../../src/utils/hooks';
import { useEffect } from 'react';

export function Layout({ children }: { children: JSX.Element }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return children;
}
