import { CallEffect, ForkEffect, PutEffect } from 'redux-saga/effects';

import {
  SignInFailedAction,
  SignInSuccessAction,
  SignOutRequestAction,
  SignUpFailedAction,
  SignUpSuccessAction,
  UpdateProfileFailedAction,
  UpdateProfileSuccessAction,
} from './user-action.types';

import { SignInResponse, SignUpResponse, UpdateProfileResponse } from './user-response.types';

export type SignInSaga = Generator<
  CallEffect<SignInResponse> | PutEffect<SignInSuccessAction> | PutEffect<SignInFailedAction>
>;

export type SignUpSaga = Generator<
  CallEffect<SignUpResponse> | PutEffect<SignUpSuccessAction> | PutEffect<SignUpFailedAction>
>;

export type UpdateProfileSaga = Generator<
  | CallEffect<UpdateProfileResponse>
  | PutEffect<UpdateProfileSuccessAction>
  | PutEffect<UpdateProfileFailedAction>
  | PutEffect<SignOutRequestAction>
>;

export type UserSagas = Generator<ForkEffect<never>>;
