import { request } from 'library/http.library';

import { API_VERSIONS, HTTP_METHODS } from 'enums';
import {
  SignInRequestPayload,
  SignUpRequestPayload,
  UpdateProfileRequestPayload,
} from './types/user-payload.types';
import { SignInResponse, SignUpResponse, UpdateProfileResponse } from './types/user-response.types';

import { USER_ENDPOINTS } from './user.endpoints';

export class UserService {
  static signIn = (data: SignInRequestPayload): Promise<SignInResponse> =>
    request({
      action: USER_ENDPOINTS.SIGN_IN,
      data,
      apiVersion: API_VERSIONS.V1,
      guest: true,
    });

  static signUp = (data: SignUpRequestPayload): Promise<SignUpResponse> =>
    request({
      action: USER_ENDPOINTS.SIGN_UP,
      data,
      apiVersion: API_VERSIONS.V1,
      guest: true,
    });

  static updateProfile = (data: UpdateProfileRequestPayload): Promise<UpdateProfileResponse> =>
    request({
      action: USER_ENDPOINTS.UPDATE_PROFILE,
      data,
      method: HTTP_METHODS.PATCH,
      apiVersion: API_VERSIONS.V1,
    });
}
