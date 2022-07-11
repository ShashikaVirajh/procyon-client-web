import { JOB_SORT_OPTIONS } from 'enums';
import { AnyAction } from 'redux';

import { JobFilterState, JobState } from './types/job-state.types';

import {
  changeJobPage,
  createJobFailed,
  createJobRequest,
  createJobSuccess,
  deleteJobFailed,
  deleteJobRequest,
  deleteJobSuccess,
  fetchJobListFailed,
  fetchJobListRequest,
  fetchJobListSuccess,
  filterJobs,
  resetJobFilters,
  resetJobState,
} from './job.actions';

const JOB_FILTERES_INITIAL_STATE: JobFilterState = {
  search: '',
  jobStatus: 'all',
  jobType: 'all',
  sort: JOB_SORT_OPTIONS.LATEST,
};

const JOB_INITIAL_STATE: JobState = {
  data: {
    detailedJob: null,
    jobList: [],
    pagination: {
      totalPages: 0,
      totalJobs: 0,
      currentPage: 1,
    },
    filters: JOB_FILTERES_INITIAL_STATE,
  },
  ui: {
    createJob: {
      isLoading: false,
      errorMessage: null,
      successMessage: null,
    },
    fetchJobList: {
      isLoading: false,
      errorMessage: null,
      successMessage: null,
    },
    deleteJob: {
      isLoading: false,
      errorMessage: null,
      successMessage: null,
    },
  },
};

export const jobReducer = (state = JOB_INITIAL_STATE, action: AnyAction): JobState => {
  if (createJobRequest.match(action)) return handleCreateJobRequest(state);

  if (createJobSuccess.match(action)) return handleCreateJobSuccess(state, action);

  if (createJobFailed.match(action)) return handleCreateJobFailed(state, action);

  if (fetchJobListRequest.match(action)) return handleFetchJobListRequest(state);

  if (fetchJobListSuccess.match(action)) return handleFetchJobListSuccess(state, action);

  if (fetchJobListFailed.match(action)) return handleFetchJobListFailed(state, action);

  if (deleteJobRequest.match(action)) return handleDeleteJobRequest(state);

  if (deleteJobSuccess.match(action)) return handleDeleteJobSuccess(state, action);

  if (deleteJobFailed.match(action)) return handleDeleteJobFailed(state, action);

  if (filterJobs.match(action)) return handleFilterJobs(state, action);

  if (resetJobFilters.match(action)) return handleResetJobFilters(state);

  if (changeJobPage.match(action)) return handleChangeJobPage(state, action);

  if (resetJobState.match(action)) return handleResetJobState();

  return state;
};

const handleCreateJobRequest = (state: JobState): JobState => ({
  ...state,
  ui: {
    ...state.ui,
    createJob: {
      ...state.ui.createJob,
      isLoading: true,
    },
  },
});

const handleCreateJobSuccess = (state: JobState, action: AnyAction): JobState => ({
  ...state,
  data: {
    ...state.data,
    detailedJob: action.payload,
  },
  ui: JOB_INITIAL_STATE.ui,
});

const handleCreateJobFailed = (state: JobState, action: AnyAction): JobState => ({
  ...state,
  data: JOB_INITIAL_STATE.data,
  ui: {
    ...JOB_INITIAL_STATE.ui,
    createJob: {
      ...state.ui.createJob,
      isLoading: true,
      errorMessage: action.payload,
    },
  },
});

const handleFetchJobListRequest = (state: JobState): JobState => ({
  ...state,
  ui: {
    ...state.ui,
    fetchJobList: {
      ...state.ui.fetchJobList,
      isLoading: true,
    },
  },
});

const handleFetchJobListSuccess = (state: JobState, action: AnyAction): JobState => ({
  ...state,
  data: {
    ...state.data,
    jobList: action.payload.jobList,
    pagination: action.payload.pagination,
  },
  ui: JOB_INITIAL_STATE.ui,
});

const handleFetchJobListFailed = (state: JobState, action: AnyAction): JobState => ({
  ...state,
  data: JOB_INITIAL_STATE.data,
  ui: {
    ...JOB_INITIAL_STATE.ui,
    fetchJobList: {
      ...state.ui.fetchJobList,
      isLoading: false,
      errorMessage: action.payload,
    },
  },
});

const handleDeleteJobRequest = (state: JobState): JobState => ({
  ...state,
  ui: {
    ...state.ui,
    deleteJob: {
      ...state.ui.deleteJob,
      isLoading: true,
    },
  },
});

const handleDeleteJobSuccess = (state: JobState, action: AnyAction): JobState => ({
  ...state,
  ui: {
    ...state.ui,
    deleteJob: {
      ...state.ui.deleteJob,
      isLoading: false,
      errorMessage: null,
      successMessage: action.payload.deleteJobSuccessMessage,
    },
  },
});

const handleDeleteJobFailed = (state: JobState, action: AnyAction): JobState => ({
  ...state,
  data: JOB_INITIAL_STATE.data,
  ui: {
    ...JOB_INITIAL_STATE.ui,
    deleteJob: {
      ...state.ui.deleteJob,
      isLoading: false,
      errorMessage: action.payload,
      successMessage: null,
    },
  },
});

const handleFilterJobs = (state: JobState, action: AnyAction): JobState => ({
  ...state,
  data: {
    ...state.data,
    filters: action.payload,
    pagination: {
      ...state.data.pagination,
      currentPage: 1,
    },
  },
});

const handleResetJobFilters = (state: JobState): JobState => ({
  ...state,
  data: {
    ...state.data,
    filters: JOB_FILTERES_INITIAL_STATE,
  },
});

const handleChangeJobPage = (state: JobState, action: AnyAction): JobState => ({
  ...state,
  data: {
    ...state.data,
    pagination: {
      ...state.data.pagination,
      ...action.payload,
    },
  },
});

const handleResetJobState = (): JobState => ({
  ...JOB_INITIAL_STATE,
});
