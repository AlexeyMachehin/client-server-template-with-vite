import { useAppSelector } from '@/utils/hooks';
import { Navigate, Outlet } from 'react-router-dom';

export default function UnAuthGuard() {
  const user = useAppSelector(state => state.userReducer.user);

  if (!user) {
    return <Outlet />;
  }
  return <Navigate to={'/'} />;
}
