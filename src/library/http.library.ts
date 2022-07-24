import { API_TIME_OUT } from 'constants/common.constants';
import axios, { AxiosRequestConfig } from 'axios';

import { API_VERSIONS, HTTP_METHODS, STATUS_CODES } from 'enums';

import { store } from 'store/store';
import { resetApplicationState } from 'store/common/common.actions';

import Console from 'library/console.library';
import { BASE_URL, IS_DEV_APP } from 'config';
import Logger, { SentryScope } from './logger.library';

export const request = async ({
  action,
  data,
  headers,
  apiVersion,
  method = HTTP_METHODS.POST,
  guest = false,
}: Request): Promise<any> => {
  const customURL = generateURL(apiVersion, action);

  const axiosHeaders = setHeaders(headers);

  if (!guest) {
    const accessToken = getAccessToken();
    axiosHeaders.Authorization = accessToken;
  }

  const axiosConfig = {
    method,
    data,
    url: customURL,
    headers: axiosHeaders,
    timeout: API_TIME_OUT,
  };

  Logger.configureScope((scope: SentryScope) => {
    const currentUser = store.getState().user?.data?.currentUser;

    scope.setTag('request', axiosConfig.url || '-');

    if (currentUser) {
      scope.setTag('user-type', 'Authentication User');
      scope.setUser({ email: currentUser?.email, name: currentUser?.userName });
    } else {
      scope.setTag('user-type', 'Guest User');
    }
  });

  if (IS_DEV_APP) {
    const requestConfig = {
      headers: axiosHeaders,
      body: data,
    };

    Console.log(`REQUEST: ${customURL}`, `[${method.toUpperCase()}]`, requestConfig);
  }

  try {
    const response = await axios(axiosConfig);

    if (IS_DEV_APP) {
      Console.log(`SUCCESS: ${axiosConfig.url}`, response);
    }

    return response?.data;
  } catch (error) {
    const response = axios.isAxiosError(error) ? error?.response : error;

    if (IS_DEV_APP) {
      Console.error(`ERROR: ${axiosConfig.url}`, response);
    }

    if (error?.response?.status === STATUS_CODES.UNAUTHORIZED) {
      store.dispatch(resetApplicationState());
    }

    Logger.log('API Error', error?.message || error?.response?.message, error);

    throw error;
  }
};

const generateURL = (apiVersion: API_VERSIONS, action: string): string => {
  return [BASE_URL, 'api', apiVersion, 'toolkit', action].join('/');
};

const setHeaders = (headers: any): any => {
  return {
    'Content-Type': 'application/json',
    ...headers,
  };
};

const getAccessToken = (): string | null => {
  const accessToken = store.getState().user?.data?.tokens?.accessToken;

  if (!accessToken) return null;
  return `Bearer ${accessToken}`;
};

type Request = {
  action: string;
  data?: object;
  method?: AxiosRequestConfig['method'];
  headers?: AxiosRequestConfig['headers'];
  apiVersion: API_VERSIONS;
  guest?: boolean;
};
