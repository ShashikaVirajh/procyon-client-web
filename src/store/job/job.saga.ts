import { call, put, takeLeading } from 'typed-redux-saga';

import {
  normalizeCreateJobResponse,
  normalizeDeleteJobResponse,
  normalizeFetchJobListResponse,
} from 'normalizers/job.normalizer';

import { setErrorMessage } from 'utils/error.utils';
import { store } from 'store/store';
import { createFetchJobListURL } from 'utils/job.utils';

import {
  CreateJobRequestAction,
  CreateJobSaga,
  DeleteJobRequestAction,
  DeleteJobSaga,
  FetchJobListSaga,
  JOB_ACTION_TYPES,
  JobSagas,
} from './job-store.types';

import { JobService } from './job.service';

import {
  createJobFailed,
  createJobSuccess,
  deleteJobFailed,
  deleteJobSuccess,
  fetchJobListFailed,
  fetchJobListRequest,
  fetchJobListSuccess,
} from './job.actions';

function* createJobSaga({ payload }: CreateJobRequestAction): CreateJobSaga {
  try {
    const data = yield* call(JobService.createJob, payload);

    const createJobSuccessPayload = normalizeCreateJobResponse(data);

    yield* put(createJobSuccess(createJobSuccessPayload));
  } catch (error) {
    const customError = setErrorMessage(error);
    yield* put(createJobFailed(customError));
  }
}

function* fetchJobListSaga(): FetchJobListSaga {
  try {
    const filters = store.getState().job.data.filters;
    const { currentPage } = store.getState().job.data.pagination;

    const fetchJobListURL = createFetchJobListURL(filters, currentPage);

    const data = yield* call(JobService.fetchJobList, fetchJobListURL);

    const fetchJobListSuccessPayload = normalizeFetchJobListResponse(data, currentPage);

    yield* put(fetchJobListSuccess(fetchJobListSuccessPayload));
  } catch (error) {
    const customError = setErrorMessage(error);
    yield* put(fetchJobListFailed(customError));
  }
}

function* deleteJobSaga({ payload }: DeleteJobRequestAction): DeleteJobSaga {
  try {
    const data = yield* call(JobService.deleteJob, payload);
    const deleteJobSuccessPayload = normalizeDeleteJobResponse(data);
    yield* put(deleteJobSuccess(deleteJobSuccessPayload));

    yield* put(fetchJobListRequest());
  } catch (error) {
    const customError = setErrorMessage(error);
    yield* put(deleteJobFailed(customError));
  }
}

export function* jobSagas(): JobSagas {
  yield* takeLeading(JOB_ACTION_TYPES.CREATE_JOB_REQUEST, createJobSaga);
  yield* takeLeading(JOB_ACTION_TYPES.FETCH_JOB_LIST_REQUEST, fetchJobListSaga);
  yield* takeLeading(JOB_ACTION_TYPES.DELETE_JOB_REQUEST, deleteJobSaga);
}
