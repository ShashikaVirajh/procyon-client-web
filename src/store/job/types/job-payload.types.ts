import { JOB_STATUSES, JOB_TYPES } from 'enums';
import { DetailedJob, JobPagination } from './job-state.types';

export type CreateJobRequestPayload = {
  position: string;
  company: string;
  jobLocation: string;
  jobType: JOB_TYPES;
  jobStatus: JOB_STATUSES;
};

export type CreateJobSuccessPayload = {
  jobId: string;
  position: string;
  company: string;
  jobLocation: string;
  jobType: JOB_TYPES;
  jobStatus: JOB_STATUSES;
  createdAt: string;
};

export type FetchJobListSuccessPayload = {
  jobList: DetailedJob[];
  pagination: JobPagination;
};

export type DeleteJobRequestPayload = {
  jobId: string;
};

export type DeleteJobSuccessPayload = {
  deleteJobSuccessMessage: string;
};

export type FilterJobsPayload = {
  search: string;
  jobType: JOB_TYPES | string;
  jobStatus: JOB_STATUSES | string;
  sort: string;
};

export type ChangeJobPagePayload = {
  currentPage: number;
};
