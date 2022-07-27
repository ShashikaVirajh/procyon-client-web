import { JOB_STATUSES, JOB_TYPES } from 'enums';

/** STATS RESPONSE TYPES */
export type FetchStatsResponse = {
  defaultStats: ApplicationCountInResponse;
  monthlyApplications: MonthlyApplicationInResponse[];
};

type ApplicationCountInResponse = {
  declined: number;
  interview: number;
  pending: number;
};

type MonthlyApplicationInResponse = {
  date: string;
  count: number;
};

/** JOB RESPONSE TYPES */
export type CreateJobResponse = {
  job: JobInResponse;
};

export type FetchJobListResponse = {
  jobs: JobInResponse[];
  numOfPages: number;
  totalJobs: number;
};

export type DeleteJobResponse = {
  msg: string;
};

type JobInResponse = {
  _id: string;
  company: string;
  jobLocation: string;
  jobType: JOB_TYPES;
  status: JOB_STATUSES;
  position: string;
  createdAt: string;
};

/** USER RESPONSE TYPES */
export type SignInResponse = {
  user: AuthenticatedUser;
};

export type SignUpResponse = {
  user: AuthenticatedUser;
};

export type UpdateProfileResponse = {
  user: AuthenticatedUser;
};

type AuthenticatedUser = {
  name: string;
  lastName: string;
  location: string;
  email: string;
  token: string;
};
