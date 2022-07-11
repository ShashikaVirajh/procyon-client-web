/* istanbul ignore file */

export const BASE_URL = 'https://jobify-prod.herokuapp.com';

export const ENVIRONMENT = process.env.NODE_ENV;
export const IS_DEV_APP = process.env.NODE_ENV === 'development';
export const IS_PROD_APP = process.env.NODE_ENV === 'production';

export const SENTRY_DSN =
  'https://963832b55c3c42979770464a07215bd8@o434595.ingest.sentry.io/6438065';
