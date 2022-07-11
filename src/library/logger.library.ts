import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

import { ENVIRONMENT, SENTRY_DSN } from 'config';

const init = (): void => {
  Sentry.init({
    dsn: SENTRY_DSN,
    environment: ENVIRONMENT,
    tracesSampleRate: 0.2,
    integrations: [new BrowserTracing()],
  });
};

const log = (name: string, message: string, extras?: any): void => {
  const error = new Error(message);
  error.name = name;

  Sentry.withScope((scope: Sentry.Scope) => {
    if (extras) scope.setExtras(extras);

    Sentry.captureException(error);
  });
};

export default { init, log };
