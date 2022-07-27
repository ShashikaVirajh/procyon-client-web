import { CustomError } from 'types/error.types';
import { createAction, withMatcher } from 'utils/redux.utils';
import {
  ChangeJobPagePayload,
  CreateJobRequestPayload,
  CreateJobSuccessPayload,
  DeleteJobRequestPayload,
  DeleteJobSuccessPayload,
  FetchJobListSuccessPayload,
  FilterJobsPayload,
} from 'types/payload.types';

import {
  ChangeJobPageAction,
  CreateJobFailedAction,
  CreateJobRequestAction,
  CreateJobSuccessAction,
  DeleteJobFailedAction,
  DeleteJobRequestAction,
  DeleteJobSuccessAction,
  FetchJobListFailedAction,
  FetchJobListRequestAction,
  FetchJobListSuccessAction,
  FilterJobsAction,
  JOB_ACTION_TYPES,
  ResetJobFiltersAction,
  ResetJobStateAction,
} from './job-store.types';

export const createJobRequest = withMatcher(
  (payload: CreateJobRequestPayload): CreateJobRequestAction =>
    createAction(JOB_ACTION_TYPES.CREATE_JOB_REQUEST, payload),
);

export const createJobSuccess = withMatcher(
  (payload: CreateJobSuccessPayload): CreateJobSuccessAction =>
    createAction(JOB_ACTION_TYPES.CREATE_JOB_SUCCESS, payload),
);

export const createJobFailed = withMatcher(
  (payload: CustomError): CreateJobFailedAction =>
    createAction(JOB_ACTION_TYPES.CREATE_JOB_FAILED, payload),
);

export const fetchJobListRequest = withMatcher(
  (): FetchJobListRequestAction => createAction(JOB_ACTION_TYPES.FETCH_JOB_LIST_REQUEST),
);

export const fetchJobListSuccess = withMatcher(
  (payload: FetchJobListSuccessPayload): FetchJobListSuccessAction =>
    createAction(JOB_ACTION_TYPES.FETCH_JOB_LIST_SUCCESS, payload),
);

export const fetchJobListFailed = withMatcher(
  (payload: CustomError): FetchJobListFailedAction =>
    createAction(JOB_ACTION_TYPES.FETCH_JOB_LIST_FAILED, payload),
);

export const deleteJobRequest = withMatcher(
  (payload: DeleteJobRequestPayload): DeleteJobRequestAction =>
    createAction(JOB_ACTION_TYPES.DELETE_JOB_REQUEST, payload),
);

export const deleteJobSuccess = withMatcher(
  (payload: DeleteJobSuccessPayload): DeleteJobSuccessAction =>
    createAction(JOB_ACTION_TYPES.DELETE_JOB_SUCCESS, payload),
);

export const deleteJobFailed = withMatcher(
  (payload: CustomError): DeleteJobFailedAction =>
    createAction(JOB_ACTION_TYPES.DELETE_JOB_FAILED, payload),
);

export const filterJobs = withMatcher(
  (payload: FilterJobsPayload): FilterJobsAction =>
    createAction(JOB_ACTION_TYPES.FILTER_JOBS, payload),
);

export const resetJobFilters = withMatcher(
  (): ResetJobFiltersAction => createAction(JOB_ACTION_TYPES.RESET_JOB_FILTERS),
);

export const changeJobPage = withMatcher(
  (payload: ChangeJobPagePayload): ChangeJobPageAction =>
    createAction(JOB_ACTION_TYPES.CHANGE_JOB_PAGE, payload),
);

export const resetJobState = withMatcher(
  (): ResetJobStateAction => createAction(JOB_ACTION_TYPES.RESET_JOB_STATE),
);
