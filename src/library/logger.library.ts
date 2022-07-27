import { ENVIRONMENT, IS_DEV_APP, SENTRY_DSN } from 'constants/config.constants';
import { useEffect } from 'react';
import { BrowserTracing } from '@sentry/tracing';
import {
  createRoutesFromChildren,
  matchRoutes,
  Routes,
  useLocation,
  useNavigationType,
} from 'react-router-dom';
import * as Sentry from '@sentry/react';

const init = (): void => {
  if (!IS_DEV_APP) {
    Sentry.init({
      dsn: SENTRY_DSN,
      environment: ENVIRONMENT,
      tracesSampleRate: 0.2,
      integrations: [
        new BrowserTracing({
          routingInstrumentation: Sentry.reactRouterV6Instrumentation(
            useEffect,
            useLocation,
            useNavigationType,
            createRoutesFromChildren,
            matchRoutes,
          ),
        }),
      ],
    });
  }
};

const log = (name: string, message: string, extras?: any): void => {
  const error = new Error(message);
  error.name = name;

  Sentry.withScope((scope: Sentry.Scope) => {
    if (extras) scope.setExtras(extras);

    Sentry.captureException(error);
  });
};

const message = (msg: string): void => {
  Sentry.captureMessage(msg);
};

const addBreadcrumb = ({ message, data, category }: Sentry.Breadcrumb): void => {
  addBreadcrumb({
    data,
    message,
    category,
    level: 'info',
  });
};

const configureScope = (callback: (scope: Sentry.Scope) => void): void => {
  Sentry.configureScope(callback);
};

const loggerFunctions = { addBreadcrumb, configureScope, init, log, message };

export default loggerFunctions;

export const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes);

export type SentryScope = Sentry.Scope;
