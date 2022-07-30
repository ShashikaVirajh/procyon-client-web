import { FC } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute: FC<Props> = ({ isAllowed, redirectPath = '/landing', children }) => {
  if (!isAllowed) return <Navigate to={redirectPath} />;
  return children;
};

type Props = {
  children: JSX.Element;
  isAllowed: boolean;
  redirectPath?: string;
};

export default ProtectedRoute;
