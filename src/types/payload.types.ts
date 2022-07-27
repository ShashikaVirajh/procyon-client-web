import { JOB_STATUSES, JOB_TYPES } from 'enums';
import { ApplicationCount, MonthlyApplication } from 'store/stats/stats-store.types';
import { DetailedJob, JobPagination } from 'store/job/job-store.types';
import { CurrentUser, Tokens } from 'store/user/user-store.types';

/** STATS PAYLOAD TYPES */
export type FetchStatsSuccessPayload = {
  applicationCount: ApplicationCount;
  monthlyApplications: MonthlyApplication[];
};

/** USER PAYLOAD TYPES */
export type SignInRequestPayload = {
  email: string;
  password: string;
};

export type SignInSuccessPayload = {
  tokens: Tokens;
  currentUser: CurrentUser;
  isAuthenticated: boolean;
};

export type SignUpRequestPayload = {
  name: string;
  email: string;
  password: string;
};

export type SignUpSuccessPayload = {
  tokens: Tokens;
  currentUser: CurrentUser;
  isAuthenticated: boolean;
};

export type UpdateProfileRequestPayload = {
  name: string;
  email: string;
  lastName: string;
  location: string;
};

export type UpdateProfileSuccessPayload = {
  tokens: Tokens;
  currentUser: CurrentUser;
};

/** JOB PAYLOAD TYPES */
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
