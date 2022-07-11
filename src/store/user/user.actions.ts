import { CustomError } from 'types/error.types';
import { createAction, withMatcher } from 'utils/redux.utils';
import {
  SignInFailedAction,
  SignInRequestAction,
  SignInSuccessAction,
  SignOutRequestAction,
  SignUpFailedAction,
  SignUpRequestAction,
  SignUpSuccessAction,
  UpdateProfileFailedAction,
  UpdateProfileRequestAction,
  UpdateProfileSuccessAction,
} from './types/user-action.types';
import {
  SignInRequestPayload,
  SignInSuccessPayload,
  SignUpRequestPayload,
  SignUpSuccessPayload,
  UpdateProfileRequestPayload,
  UpdateProfileSuccessPayload,
} from './types/user-payload.types';
import { USER_ACTION_TYPES } from './types/user-action.types';

export const signInRequest = withMatcher(
  (payload: SignInRequestPayload): SignInRequestAction =>
    createAction(USER_ACTION_TYPES.SIGN_IN_REQUEST, payload),
);

export const signInSuccess = withMatcher(
  (payload: SignInSuccessPayload): SignInSuccessAction =>
    createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, payload),
);

export const signInFailed = withMatcher(
  (payload: CustomError): SignInFailedAction =>
    createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, payload),
);

export const signUpRequest = withMatcher(
  (payload: SignUpRequestPayload): SignUpRequestAction =>
    createAction(USER_ACTION_TYPES.SIGN_UP_REQUEST, payload),
);

export const signUpSuccess = withMatcher(
  (payload: SignUpSuccessPayload): SignUpSuccessAction =>
    createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, payload),
);

export const signUpFailed = withMatcher(
  (payload: CustomError): SignUpFailedAction =>
    createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, payload),
);

export const signOutRequest = withMatcher(
  (): SignOutRequestAction => createAction(USER_ACTION_TYPES.SIGN_OUT_REQUEST),
);

export const updateProfileRequest = withMatcher(
  (payload: UpdateProfileRequestPayload): UpdateProfileRequestAction =>
    createAction(USER_ACTION_TYPES.UPDATE_PROFILE_REQUEST, payload),
);

export const updateProfileSuccess = withMatcher(
  (payload: UpdateProfileSuccessPayload): UpdateProfileSuccessAction =>
    createAction(USER_ACTION_TYPES.UPDATE_PROFILE_SUCCESS, payload),
);

export const updateProfileFailed = withMatcher(
  (payload: CustomError): UpdateProfileFailedAction =>
    createAction(USER_ACTION_TYPES.UPDATE_PROFILE_FAILED, payload),
);
