import { JOB_STATUSES, JOB_TYPES } from 'enums';

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
