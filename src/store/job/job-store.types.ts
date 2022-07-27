import { CallEffect, ForkEffect, PutEffect } from 'redux-saga/effects';

import { Action, ActionWithPayload } from 'types/redux.types';
import { CustomError } from 'types/error.types';
import { JOB_SORT_OPTIONS, JOB_STATUSES, JOB_TYPES } from 'enums';

import { CreateJobResponse, DeleteJobResponse, FetchJobListResponse } from 'types/response.types';

import {
  ChangeJobPagePayload,
  CreateJobRequestPayload,
  CreateJobSuccessPayload,
  DeleteJobRequestPayload,
  DeleteJobSuccessPayload,
  FetchJobListSuccessPayload,
  FilterJobsPayload,
} from 'types/payload.types';

/** JOB ACTION TYPE CONSTANTS */
export enum JOB_ACTION_TYPES {
  CREATE_JOB_REQUEST = 'JOB/CREATE_JOB_REQUEST',
  CREATE_JOB_SUCCESS = 'JOB/CREATE_JOB_SUCCESS',
  CREATE_JOB_FAILED = 'JOB/CREATE_JOB_FAILED',

  FETCH_JOB_LIST_REQUEST = 'JOB/FETCH_JOB_LIST_REQUEST',
  FETCH_JOB_LIST_SUCCESS = 'JOB/FETCH_JOB_LIST_SUCCESS',
  FETCH_JOB_LIST_FAILED = 'JOB/FETCH_JOB_LIST_FAILED',

  UPDATE_JOB_REQUEST = 'JOB/UPDATE_JOB_REQUEST',
  UPDATE_JOB_SUCCESS = 'JOB/UPDATE_JOB_SUCCESS',
  UPDATE_JOB_FAILED = 'JOB/UPDATE_JOB_FAILED',

  DELETE_JOB_REQUEST = 'JOB/DELETE_JOB_REQUEST',
  DELETE_JOB_SUCCESS = 'JOB/DELETE_JOB_SUCCESS',
  DELETE_JOB_FAILED = 'JOB/DELETE_JOB_FAILED',

  FILTER_JOBS = 'JOB/FILTER_JOBS',
  RESET_JOB_FILTERS = 'JOB/RESET_JOB_FILTERS',

  CHANGE_JOB_PAGE = 'JOB/CHANGE_JOB_PAGE',

  RESET_JOB_STATE = 'JOB/RESET_JOB_STATE',
}

/** JOB ACTION TYPES */
export type CreateJobRequestAction = ActionWithPayload<
  JOB_ACTION_TYPES.CREATE_JOB_REQUEST,
  CreateJobRequestPayload
>;
export type CreateJobSuccessAction = ActionWithPayload<
  JOB_ACTION_TYPES.CREATE_JOB_SUCCESS,
  CreateJobSuccessPayload
>;
export type CreateJobFailedAction = ActionWithPayload<
  JOB_ACTION_TYPES.CREATE_JOB_FAILED,
  CustomError
>;

export type FetchJobListRequestAction = Action<JOB_ACTION_TYPES.FETCH_JOB_LIST_REQUEST>;
export type FetchJobListSuccessAction = ActionWithPayload<
  JOB_ACTION_TYPES.FETCH_JOB_LIST_SUCCESS,
  FetchJobListSuccessPayload
>;
export type FetchJobListFailedAction = ActionWithPayload<
  JOB_ACTION_TYPES.FETCH_JOB_LIST_FAILED,
  CustomError
>;

export type DeleteJobRequestAction = ActionWithPayload<
  JOB_ACTION_TYPES.DELETE_JOB_REQUEST,
  DeleteJobRequestPayload
>;
export type DeleteJobSuccessAction = ActionWithPayload<
  JOB_ACTION_TYPES.DELETE_JOB_SUCCESS,
  DeleteJobSuccessPayload
>;
export type DeleteJobFailedAction = ActionWithPayload<
  JOB_ACTION_TYPES.DELETE_JOB_FAILED,
  CustomError
>;

export type FilterJobsAction = ActionWithPayload<JOB_ACTION_TYPES.FILTER_JOBS, FilterJobsPayload>;
export type ResetJobFiltersAction = Action<JOB_ACTION_TYPES.RESET_JOB_FILTERS>;
export type ChangeJobPageAction = ActionWithPayload<
  JOB_ACTION_TYPES.CHANGE_JOB_PAGE,
  ChangeJobPagePayload
>;
export type ResetJobStateAction = Action<JOB_ACTION_TYPES.RESET_JOB_STATE>;

/** JOB SAGA TYPES */
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

/** JOB STATE TYPES */
export type JobState = {
  data: {
    detailedJob: DetailedJob | null;
    jobList: DetailedJob[];
    pagination: JobPagination;
    filters: JobFilterState;
  };
  ui: {
    createJob: {
      isLoading: boolean;
      errorMessage: CustomError | null;
      successMessage: string | null;
    };
    fetchJobList: {
      isLoading: boolean;
      errorMessage: CustomError | null;
      successMessage: string | null;
    };
    deleteJob: {
      isLoading: boolean;
      errorMessage: CustomError | null;
      successMessage: string | null;
    };
  };
};

export type JobFilterState = {
  search: '';
  jobStatus: JOB_STATUSES | string;
  jobType: JOB_TYPES | string;
  sort: JOB_SORT_OPTIONS;
};

export type DetailedJob = {
  jobId: string;
  position: string;
  company: string;
  jobLocation: string;
  jobType: JOB_TYPES;
  jobStatus: JOB_STATUSES;
  createdAt: string;
};

export type JobPagination = {
  totalJobs: number;
  totalPages: number;
  currentPage: number;
};
