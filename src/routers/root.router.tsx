import { ROUTES } from 'constants/routes.constants';
import { FC, lazy } from 'react';
import { Route } from 'react-router-dom';

import { ProtectedRoute } from 'components/hoc';
import { SentryRoutes } from 'library/logger.library';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from 'store/user/user.selector';

const ErrorPage = lazy(() => import('pages/common/error/error.page'));
const LandingPage = lazy(() => import('pages/common/landing/landing.page'));
const RegisterPage = lazy(() => import('pages/auth/register/register.page'));

const CreateJobPage = lazy(() => import('pages/dashboard/create-job/create-job.page'));
const JobListPage = lazy(() => import('pages/dashboard/job-list/job-list.page'));
const ProfilePage = lazy(() => import('pages/dashboard/profile/profile.page'));
const StatsPage = lazy(() => import('pages/dashboard/stats/stats.page'));
const DashboardPage = lazy(() => import('pages/dashboard/dashboard-layout/dashboard-layout.page'));

const RootRouter: FC = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <SentryRoutes>
      <Route
        path={ROUTES.DASHBOARD}
        element={
          <ProtectedRoute isAllowed={isAuthenticated}>
            <DashboardPage />
          </ProtectedRoute>
        }
      >
        <Route index element={<StatsPage />} />
        <Route path={ROUTES.JOB_LIST} element={<JobListPage />} />
        <Route path={ROUTES.CREATE_JOB} element={<CreateJobPage />} />
        <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
      </Route>

      <Route path={ROUTES.LANDING} element={<LandingPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />

      <Route path={ROUTES.NOT_FOUND} element={<ErrorPage />} />
    </SentryRoutes>
  );
};

export default RootRouter;
