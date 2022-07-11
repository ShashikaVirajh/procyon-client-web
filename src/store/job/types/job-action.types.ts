import { Action, ActionWithPayload } from 'types/redux.types';
import { CustomError } from 'types/error.types';
import {
  ChangeJobPagePayload,
  CreateJobRequestPayload,
  CreateJobSuccessPayload,
  DeleteJobRequestPayload,
  DeleteJobSuccessPayload,
  FetchJobListSuccessPayload,
  FilterJobsPayload,
} from './job-payload.types';

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
