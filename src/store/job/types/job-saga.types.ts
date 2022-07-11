import { CallEffect, ForkEffect, PutEffect } from 'redux-saga/effects';

import { CreateJobResponse, DeleteJobResponse, FetchJobListResponse } from './job-response.types';

import {
  CreateJobFailedAction,
  CreateJobSuccessAction,
  DeleteJobFailedAction,
  DeleteJobSuccessAction,
  FetchJobListFailedAction,
  FetchJobListRequestAction,
  FetchJobListSuccessAction,
} from './job-action.types';

export type CreateJobSaga = Generator<
  | CallEffect<CreateJobResponse>
  | PutEffect<CreateJobSuccessAction>
  | PutEffect<CreateJobFailedAction>
>;

export type FetchJobListSaga = Generator<
  | CallEffect<FetchJobListResponse>
  | PutEffect<FetchJobListSuccessAction>
  | PutEffect<FetchJobListFailedAction>
>;

export type DeleteJobSaga = Generator<
  | CallEffect<DeleteJobResponse>
  | PutEffect<DeleteJobSuccessAction>
  | PutEffect<FetchJobListRequestAction>
  | PutEffect<DeleteJobFailedAction>
>;

export type JobSagas = Generator<ForkEffect<never>>;
