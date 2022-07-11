import { JOB_SORT_OPTIONS, JOB_STATUSES, JOB_TYPES } from 'enums';

export type RegistrationForm = {
  name: string;
  email: string;
  password: string;
};

export type UpdateProfileForm = {
  name: string;
  email: string;
  lastName: string;
  location: string;
};

export type JobForm = {
  position: string;
  company: string;
  jobLocation: string;
  jobType: JOB_TYPES;
  jobStatus: JOB_STATUSES;
};

export type JobFilterForm = {
  search: string;
  jobType: JOB_TYPES | string;
  jobStatus: JOB_STATUSES | string;
  sort: JOB_SORT_OPTIONS;
};
