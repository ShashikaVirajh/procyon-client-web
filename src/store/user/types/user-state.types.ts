import { CustomError } from 'types/error.types';

export type UserState = {
  data: {
    isAuthenticated: boolean;
    tokens: Tokens | null;
    currentUser: CurrentUser | null;
  };
  ui: {
    signIn: {
      isLoading: boolean;
      errorMessage: CustomError | null;
      successMessage: CustomError | null;
    };
    signUp: {
      isLoading: boolean;
      errorMessage: CustomError | null;
      successMessage: CustomError | null;
    };
    updateProfile: {
      isLoading: boolean;
      errorMessage: CustomError | null;
      successMessage: CustomError | null;
    };
  };
};

export type CurrentUser = {
  userName: string;
  fullName: string;
  location: string;
  email: string;
};

export type Tokens = {
  accessToken?: string;
  refreshToken?: string;
};
