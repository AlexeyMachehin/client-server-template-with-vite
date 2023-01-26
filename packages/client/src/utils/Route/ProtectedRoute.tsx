import { FC } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

interface IRequireAuthProps {
  isAuthorized: boolean;
}

export const RequireAuth: FC<IRequireAuthProps> = ({ isAuthorized }) => {
  return isAuthorized ? <Outlet /> : <Navigate to="/login" />;
};

export default RequireAuth;
