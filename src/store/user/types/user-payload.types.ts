import { CurrentUser, Tokens } from './user-state.types';

export type SignInRequestPayload = {
  email: string;
  password: string;
};

export type SignInSuccessPayload = {
  tokens: Tokens;
  currentUser: CurrentUser;
  isAuthenticated: boolean;
};

export type SignUpRequestPayload = {
  name: string;
  email: string;
  password: string;
};

export type SignUpSuccessPayload = {
  tokens: Tokens;
  currentUser: CurrentUser;
  isAuthenticated: boolean;
};

export type UpdateProfileRequestPayload = {
  name: string;
  email: string;
  lastName: string;
  location: string;
};

export type UpdateProfileSuccessPayload = {
  tokens: Tokens;
  currentUser: CurrentUser;
};
