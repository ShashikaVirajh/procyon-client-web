/* istanbul ignore file */

export const ENVIRONMENT = process.env.NODE_ENV;
export const IS_DEV_APP = process.env.NODE_ENV === 'development';
export const IS_PROD_APP = process.env.NODE_ENV === 'production';

export const BASE_URL = process.env.REACT_APP_BASE_URL;

export const SENTRY_DSN = process.env.REACT_APP_SENTRY_DSN;
