import { ROUTES } from 'constants/routes.constants';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { ProtectedRoute } from 'components/hoc';
import { Spinner } from 'components/common';
import { SentryRoutes } from 'library/logger.library';

const ErrorPage = lazy(() => import('pages/common/error/error.page'));
const LandingPage = lazy(() => import('pages/common/landing/landing.page'));
const RegisterPage = lazy(() => import('pages/auth/register/register.page'));

const CreateJobPage = lazy(() => import('pages/dashboard/create-job/create-job.page'));
const JobListPage = lazy(() => import('pages/dashboard/job-list/job-list.page'));
const ProfilePage = lazy(() => import('pages/dashboard/profile/profile.page'));
const StatsPage = lazy(() => import('pages/dashboard/stats/stats.page'));
const DashboardPage = lazy(() => import('pages/dashboard/dashboard-layout/dashboard-layout.page'));

const App = (): JSX.Element => (
  <Suspense fallback={<Spinner />}>
    <BrowserRouter>
      <SentryRoutes>
        <Route
          path={ROUTES.DASHBOARD}
          element={
            <ProtectedRoute>
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
    </BrowserRouter>
  </Suspense>
);

export default App;
