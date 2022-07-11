import { DetailedJob } from 'store/job/types/job-state.types';
import {
  CreateJobSuccessPayload,
  DeleteJobSuccessPayload,
  FetchJobListSuccessPayload,
} from 'store/job/types/job-payload.types';

import {
  CreateJobResponse,
  DeleteJobResponse,
  FetchJobListResponse,
} from 'store/job/types/job-response.types';

export const normalizeCreateJobResponse = (data: CreateJobResponse): CreateJobSuccessPayload => {
  return {
    jobId: data?.job?._id,
    company: data?.job?.company,
    jobLocation: data?.job?.jobLocation,
    jobType: data?.job?.jobType,
    jobStatus: data?.job?.status,
    position: data?.job?.position,
    createdAt: data?.job?.createdAt,
  };
};

export const normalizeFetchJobListResponse = (
  data: FetchJobListResponse,
  currentPage: number,
): FetchJobListSuccessPayload => {
  const jobList = data?.jobs.map((job): DetailedJob => {
    return {
      jobId: job?._id,
      company: job?.company,
      jobLocation: job?.jobLocation,
      jobType: job?.jobType,
      jobStatus: job?.status,
      position: job?.position,
      createdAt: job?.createdAt,
    };
  });

  const pagination = {
    totalJobs: data?.totalJobs,
    totalPages: data?.numOfPages,
    currentPage,
  };

  return { jobList, pagination };
};

export const normalizeDeleteJobResponse = (data: DeleteJobResponse): DeleteJobSuccessPayload => {
  return {
    deleteJobSuccessMessage: data?.msg,
  };
};
