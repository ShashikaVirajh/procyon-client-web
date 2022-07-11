import { Action, ActionWithPayload } from 'types/redux.types';
import { CustomError } from 'types/error.types';
import {
  SignInRequestPayload,
  SignInSuccessPayload,
  SignUpRequestPayload,
  SignUpSuccessPayload,
  UpdateProfileRequestPayload,
  UpdateProfileSuccessPayload,
} from './user-payload.types';

export enum USER_ACTION_TYPES {
  SIGN_UP_REQUEST = 'USER/SIGN_UP_REQUEST',
  SIGN_UP_SUCCESS = 'USER/SIGN_UP_SUCCESS',
  SIGN_UP_FAILED = 'USER/SIGN_UP_FAILED',

  SIGN_IN_REQUEST = 'USER/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS = 'USER/SIGN_IN_SUCCESS',
  SIGN_IN_FAILED = 'USER/SIGN_IN_FAILED',

  UPDATE_PROFILE_REQUEST = 'USER/UPDATE_PROFILE_REQUEST',
  UPDATE_PROFILE_SUCCESS = 'USER/UPDATE_PROFILE_SUCCESS',
  UPDATE_PROFILE_FAILED = 'USER/UPDATE_PROFILE_FAILED',

  SIGN_OUT_REQUEST = 'USER/SIGN_OUT_REQUEST',
}

export type SignInRequestAction = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_REQUEST,
  SignInRequestPayload
>;

export type SignInSuccessAction = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_SUCCESS,
  SignInSuccessPayload
>;

export type SignInFailedAction = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FAILED, CustomError>;

export type SignUpRequestAction = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_REQUEST,
  SignUpRequestPayload
>;

export type SignUpSuccessAction = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_SUCCESS,
  SignUpSuccessPayload
>;

export type SignUpFailedAction = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_FAILED, CustomError>;

export type SignOutRequestAction = Action<USER_ACTION_TYPES.SIGN_OUT_REQUEST>;

export type UpdateProfileRequestAction = ActionWithPayload<
  USER_ACTION_TYPES.UPDATE_PROFILE_REQUEST,
  UpdateProfileRequestPayload
>;

export type UpdateProfileSuccessAction = ActionWithPayload<
  USER_ACTION_TYPES.UPDATE_PROFILE_SUCCESS,
  UpdateProfileSuccessPayload
>;

export type UpdateProfileFailedAction = ActionWithPayload<
  USER_ACTION_TYPES.UPDATE_PROFILE_FAILED,
  CustomError
>;
