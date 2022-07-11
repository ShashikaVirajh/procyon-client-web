import { CustomError } from 'types/error.types';
import { JOB_SORT_OPTIONS, JOB_STATUSES, JOB_TYPES } from 'enums';

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
