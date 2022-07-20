import { useEffect } from 'react';
import { BrowserTracing } from '@sentry/tracing';
import {
  createRoutesFromChildren,
  matchRoutes,
  Routes,
  useLocation,
  useNavigationType,
} from 'react-router-dom';
import {
  Breadcrumb,
  captureException,
  captureMessage,
  init as initialize,
  reactRouterV6Instrumentation,
  Scope,
  withScope,
  withSentryReactRouterV6Routing,
} from '@sentry/react';

import { ENVIRONMENT, SENTRY_DSN, IS_DEV_APP } from 'config';

const init = (): void => {
  if (!IS_DEV_APP) {
    initialize({
      dsn: SENTRY_DSN,
      environment: ENVIRONMENT,
      tracesSampleRate: 0.2,
      integrations: [
        new BrowserTracing({
          routingInstrumentation: reactRouterV6Instrumentation(
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

  withScope((scope: Scope) => {
    if (extras) scope.setExtras(extras);

    captureException(error);
  });
};

const message = (msg: string): void => {
  captureMessage(msg);
};

const addBreadcrumb = ({ message, data, category }: Breadcrumb): void => {
  addBreadcrumb({
    data,
    message,
    category,
    level: 'info',
  });
};

const configureScope = (callback: (scope: Scope) => void): void => {
  configureScope(callback);
};

const loggerFunctions = { addBreadcrumb, configureScope, init, log, message };

export default loggerFunctions;

export const SentryRoutes = withSentryReactRouterV6Routing(Routes);

export type SentryScope = Scope;
