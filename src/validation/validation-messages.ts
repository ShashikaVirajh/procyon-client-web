export const REQUIRED_MESSAGE = (field: string): string => {
  return `${field} is required`;
};

export const MIN_LENGTH_MESSAGE = (minLength: number): string => {
  return `Minimum length is ${minLength} characters `;
};

export const MAX_LENGTH_MESSAGE = (maxLength: number): string => {
  return `Maximum length is ${maxLength} characters`;
};

export const INVALID_MESSAGE = (field: string): string => {
  return `Invalid ${field}`;
};
