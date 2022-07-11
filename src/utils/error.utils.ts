import { STATUS_CODES } from 'enums';
import { CustomError } from 'types/error.types';

export const setErrorMessage = (error: any): CustomError => {
  const errorMessage = error?.response?.data?.msg || error?.message;
  return { errorMessage: errorMessage || 'Error Occured' };
};

export const isUnauthorizedUser = (error: any): boolean => {
  return error?.response?.status === STATUS_CODES.UNAUTHORIZED;
};
