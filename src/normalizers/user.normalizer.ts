import {
  SignInSuccessPayload,
  SignUpSuccessPayload,
  UpdateProfileSuccessPayload,
} from 'types/payload.types';

import { SignInResponse, SignUpResponse, UpdateProfileResponse } from 'types/response.types';

export const normalizeSignInResponse = (data: SignInResponse): SignInSuccessPayload => {
  return {
    tokens: {
      accessToken: data?.user?.token,
    },
    currentUser: {
      userName: data?.user?.name,
      fullName: data?.user?.lastName,
      location: data?.user?.location,
      email: data?.user?.email,
    },
    isAuthenticated: true,
  };
};

export const normalizeSignUpResponse = (data: SignUpResponse): SignUpSuccessPayload => {
  return {
    tokens: {
      accessToken: data?.user?.token,
    },
    currentUser: {
      userName: data?.user?.name,
      fullName: data?.user?.lastName,
      location: data?.user?.location,
      email: data?.user?.email,
    },
    isAuthenticated: true,
  };
};

export const normalizeUpdateUserResponse = (
  data: UpdateProfileResponse,
): UpdateProfileSuccessPayload => {
  return {
    tokens: {
      accessToken: data?.user?.token,
    },
    currentUser: {
      userName: data?.user?.name,
      fullName: data?.user?.lastName,
      location: data?.user?.location,
      email: data?.user?.email,
    },
  };
};
