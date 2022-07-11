import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCurrentUser } from 'store/user/user.selector';

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const currentUser = useSelector(selectCurrentUser);

  if (!currentUser) {
    return <Navigate to='/landing' />;
  }

  return children;
};

type ProtectedRouteProps = {
  children: JSX.Element;
};

export default ProtectedRoute;
