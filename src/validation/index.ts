import {
  INVALID_MESSAGE,
  MAX_LENGTH_MESSAGE,
  MIN_LENGTH_MESSAGE,
  REQUIRED_MESSAGE,
} from './validation-messages';
import { EMAIL_REGEX } from './validation-regexes';

/** User Rules */
export const userNameRules = {
  required: { value: true, message: REQUIRED_MESSAGE('User Name') },
  minLength: { value: 3, message: MIN_LENGTH_MESSAGE(3) },
  maxLength: { value: 20, message: MAX_LENGTH_MESSAGE(20) },
};

export const lastNameRules = {
  required: { value: true, message: REQUIRED_MESSAGE('Last Name') },
  minLength: { value: 3, message: MIN_LENGTH_MESSAGE(3) },
  maxLength: { value: 20, message: MAX_LENGTH_MESSAGE(20) },
};

export const emailRules = {
  required: { value: true, message: REQUIRED_MESSAGE('Email') },
  pattern: {
    value: new RegExp(EMAIL_REGEX, 'ig'),
    message: INVALID_MESSAGE('Email'),
  },
};

export const passwordRules = {
  required: { value: true, message: REQUIRED_MESSAGE('Password') },
  minLength: { value: 6, message: MIN_LENGTH_MESSAGE(6) },
  maxLength: { value: 16, message: MAX_LENGTH_MESSAGE(16) },
};

/** Job Rules */
export const companyRules = {
  required: { value: true, message: REQUIRED_MESSAGE('Company') },
  minLength: { value: 3, message: MIN_LENGTH_MESSAGE(3) },
  maxLength: { value: 50, message: MAX_LENGTH_MESSAGE(50) },
};

export const locationRules = {
  required: { value: true, message: REQUIRED_MESSAGE('Location') },
  minLength: { value: 3, message: MIN_LENGTH_MESSAGE(3) },
  maxLength: { value: 50, message: MAX_LENGTH_MESSAGE(50) },
};

export const positionRules = {
  required: { value: true, message: REQUIRED_MESSAGE('Position') },
  minLength: { value: 3, message: MIN_LENGTH_MESSAGE(3) },
  maxLength: { value: 50, message: MAX_LENGTH_MESSAGE(50) },
};
